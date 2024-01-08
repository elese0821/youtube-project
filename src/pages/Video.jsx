import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import Main from '../components/section/Main';

import { CiChat1, CiStar, CiRead } from "react-icons/ci";

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [comments, setComments] = useState([]);

    // 비디오 정보 가져오기
    useEffect(() => {
        console.log("로드 start")
        fetchFromAPI(`videos?part=snippet.statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
                console.log("비디오 로드완")
            })
            .catch((err) => {
                alert("Error fetching comments:", err)
            })
    }, [videoId]);

    // 댓글 가져오기
    useEffect(() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}`)
            .then((data) => {
                setComments(data.items);
            })
            .catch((err) => {
                setComments([]);
                alert("Error fetching comments:", err)
            })
    }, [videoDetail, videoId]);

    function formatNumber(num) {
        if (num < 1000) {
            return num; // 1000 미만의 경우 그대로 반환
        } else if (num < 10000) {
            return `${(num / 1000).toFixed(1)}K`; // 1000 이상 10000 미만은 'K'로 표시
        } else if (num < 100000) {
            return `${(num / 10000).toFixed(1)}M`; // 10000 이상 100000 미만은 'M'으로 표시
        } else {
            return `${(num / 100000).toFixed(1)}L`; // 100000 이상은 'L'로 표시
        }
    }
    return (
        <Main
            title="영상 페이지"
            description="영상 페이지입니다."
        >
            <section id='videoViewPage'>
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>{videoDetail.snippet.title}</h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className="count">
                                    <span className="view"><CiRead /> {formatNumber(videoDetail.statistics.viewCount)}</span>
                                    <span className="like"><CiStar /> {formatNumber(videoDetail.statistics.likeCount)}</span>
                                    <span className="commet"><CiChat1 /> {formatNumber(videoDetail.statistics.commentCount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <div className="comment-container">
                        {comments && comments.length > 0 && comments.map((reply, key) => (
                            <div key={key} className="comment">
                                <div className="comment-author">
                                    {reply.snippet.topLevelComment.snippet.authorDisplayName}
                                </div>
                                <div className="comment-text">
                                    {reply.snippet.topLevelComment.snippet.textDisplay}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default Video