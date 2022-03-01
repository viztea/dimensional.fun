import { FaDiscord, FaGithub, FaTwitter, FaReddit, FaTwitch, FaTelegramPlane, FaInstagram, FaHome, FaBars, FaBox } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export const socials = [
    { url: "https://discord.gg/JrHfSmb", Icon: FaDiscord, title: "discord server" },
    { url: "https://github.com/melike2d", Icon: FaGithub, title: "github profile" },
    { url: "https://twitter.com/melike2d", Icon: FaTwitter, title: "twitter account" },
    { url: "https://reddit.com/u/MeLike2D", Icon: FaReddit, title: "reddit profile" },
    { url: "https://twitch.tv/melike2d", Icon: FaTwitch, title: "twitch channel" },
    { url: "https://t.me/melike2d", Icon: FaTelegramPlane, title: "telegram account" },
    { url: "https://instagram.com/melike2d", Icon: FaInstagram, title: "instagram account" }
]

export type Route = { href: string; name: string; Icon?: IconType }

export const routes = [
    { href: '/', name: 'home', Icon: FaHome },
    { href: '/feed', name: 'feed', Icon: FaBars },
    { href: '/projects', name: 'projects', Icon: FaBox }
];
