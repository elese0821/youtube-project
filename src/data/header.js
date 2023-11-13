import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiFranprix } from "react-icons/si"
import { SiGhostery } from "react-icons/si"
import { SiGooglehome } from "react-icons/si"
import { SiHotjar } from "react-icons/si"

export const menuText = [
    {
        title: "Home",
        icon: <SiFranprix />,
        src: "/"
    }, {
        title: "인기 음악",
        icon: <SiGhostery />,
        src: "/today"
    }, {
        title: "추천 음악",
        icon: <SiGooglehome />,
        src: "/youtuber"
    }, {
        title: "PLAY LIST",
        icon: <SiHotjar />,
        src: "/youtuber"
    }
]

export const keywordText = [
    {
        title: "BLACK PINK",
        src: "/search/BLACK PINK"
    }, {
        title: "Justin Bieber",
        src: "/search/Justin Bieber"
    }, {
        title: "BTS",
        src: "/search/BTS"
    }, {
        title: "Marshmello",
        src: "/search/Marshmello"
    }, {
        title: "Ed Sheeran",
        src: "/search/Ed Sheeran"
    }, {
        title: "Eminem",
        src: "/search/Eminem"
    }, {
        title: "Ariana Grande",
        src: "/search/Ariana Grande"
    }, {
        title: "Taylor Swift",
        src: "/search/Taylor Swift"
    }, {
        title: "Billie Eilish",
        src: "/search/Billie Eilish"
    }, {
        title: "Post Malone",
        src: "/search/Post Malone"
    }, {
        title: "Lauv",
        src: "/search/Lauv"
    }, {
        title: "Coldplay",
        src: "/search/Coldplay"
    }, {
        title: "Rihanna",
        src: "/search/Rihanna"
    }, {
        title: "The Weeknd",
        src: "/search/The Weeknd"
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    }, {
        title: "Codepen",
        src: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    }, {
        title: "Youtube",
        src: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    }, {
        title: "Instagram",
        src: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    }
]