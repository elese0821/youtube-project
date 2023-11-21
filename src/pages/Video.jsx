import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet.statistics&id=${videoId}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
            })
    }, [videoId])

    return (
        <section id='videoViewPage'>
            <h2>비디오</h2>
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
                        <h2 className='video__title'>{videoDetail.statistics.title}</h2>
                        <div className='video__channel'>
                            <div className='id'>
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                            </div>
                            <div className="count">
                                <div className="view">{videoDetail.statistics.viewCount}</div>
                                <div className="like">{videoDetail.statistics.likeCount}</div>
                                <div className="commet">{videoDetail.statistics.commentCount}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Video