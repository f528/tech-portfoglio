import {
    SiReact, SiLaravel, SiKalilinux, SiAmazon, SiDocker,
    SiVuedotjs, SiTypescript, SiTailwindcss, SiMysql,
    SiWireshark, SiSplunk, SiNextdotjs, SiPhp, SiPython,
    SiJavascript, SiPostgresql, SiMongodb, SiFirebase,
    SiGooglecloud, SiUbuntu, SiDebian,
    SiMetasploit, SiLinux
} from "react-icons/si";
import { RiShieldFlashLine } from "react-icons/ri";
import { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
    SiReact, SiLaravel, SiKalilinux, SiAmazon, SiDocker,
    SiVuedotjs, SiTypescript, SiTailwindcss, SiMysql,
    SiWireshark, SiSplunk, SiNextdotjs, SiPhp, SiPython,
    SiJavascript, SiPostgresql, SiMongodb, SiFirebase,
    SiGooglecloud, SiUbuntu, SiDebian,
    SiMetasploit, SiLinux, RiShieldFlashLine
};

export type IconName = keyof typeof iconMap;
