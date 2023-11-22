import React, { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/api';
import Today from '../components/contents/Today';
import Musician from '../components/contents/Musician';
import Main from '../components/section/Main';
import VideoSlider from '../components/video/VideoSlider';

const Home = () => {
    const [channelVideo, setChannelVideo] = useState({});

    const channelIds = {
        v1: "UCCJPp5fgXqQPcJxF9Fzed0A",
        v2: "UCBXNRYFBNNMHwArbYK3N4eg",
        v3: "UCoV8L_tyJqZoRh51f-2ylhQ",
        v4: "UCMRvw9TUJB5m32YPrxLu7ag",
        v5: "UCgpBsaDW2n_6ruzht3wvP0A"
    };

    useEffect(() => {
        const fetchResults = async (channelName) => {
            try {
                const videoData = await fetchFromAPI(`search?channelId=${channelIds[channelName]}&part=snippet&order=date`);
                setChannelVideo(prevVideos => ({ ...prevVideos, [channelName]: videoData.items }));
            } catch (error) {
                console.error(error);
            }
        }

        for (let name in channelIds) {
            fetchResults(name);
        }
    }, []);

    return (
        <Main
            title="음악 유튜버"
            description="음악유튜브 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Musician />
            {Object.keys(channelIds).map(name => (
                <VideoSlider videos={channelVideo[name] || []} title='new' name={name} key={name} />
            ))}
        </Main>
    )
}

export default Home;
