import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import VideoSearch from '../components/video/VideoSearch';
import Main from '../components/section/Main';

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videoData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`);
                setNextPageToken(videoData.nextPageToken);
                setChannelVideo(videoData.items)
            } catch (error) {
                console.log("Error -> ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchResults();
    }, [channelId])

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos => [...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken);
        }
    }

    const channelPageClass = loading ? 'isloading' : 'isLoaded';

    return (
        <Main
            title="음악 유튜버 채널"
            description="음악 채널 페이지 입니다."
        >

            <section id='channelPage' className={channelPageClass}>
                {channelDetail &&
                    <div className="channel__inner">
                        <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        </div>
                        <div className='channel__info'>
                            <div className="info__wrap1">
                                <div className='circle'>
                                    <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                                </div>
                                <h3 className='title'>{channelDetail.snippet.title}</h3>

                            </div>
                            <div className="info__wrap">
                                <p className='desc'>{channelDetail.snippet.description}</p>
                                <div className='info'>
                                    <span>{channelDetail.statistics.subscriberCount}</span>
                                    <span>{channelDetail.statistics.videoCount}</span>
                                    <span>{channelDetail.statistics.viewCount}</span>
                                </div>
                            </div>
                        </div>
                        <div className="channel__video">
                            <VideoSearch videos={channelVideo} layout="channel" />
                        </div>
                        <div className="channel__more">
                            {nextPageToken && <button onClick={loadMoreVideos}>MORE</button>}
                        </div>
                    </div>
                }
            </section>
        </Main>
    )
}

export default Channel