"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useIsOpen } from "@/hooks/useIsOpen";
import Image from "next/image";
import React, { useState } from "react";

export const Header = () => {
    const { isOpen, handleOpen } = useIsOpen();
    const [language, setLanguage] = useState("EN");
    const [image, setImage] = useState("/england.svg");
    const breakpoint = useBreakpoint();

    const handleChooseLanguage = (str) => {
        if (str === "EN") {
            setLanguage("EN");
            setImage("/england.svg");
        } else {
            setLanguage("GR");
            setImage("/Greek.svg");
        }
    };

    const dekstopObject = [
        {
            1920: {
                header: "bg-black rounded-[145px] px-6 py-[13px] mt-[25px] flex justify-between items-center font-main ml-[240px] mr-[240px] ",
                ul: "flex gap-[34px] items-center text-[16px] font-semibold ",
                signUp: "rounded-[39px] bg-white text-black cursor-pointer font-medium  text-[16px] pl-[32px] pr-[32px] pt-[13px] pb-[14px]",
                signIn: "rounded-[39px] border border-[#94949480] text-white pr-[37px] pl-[37px] pt-[14px] pb-[13px] text-[16px] cursor-pointer font-medium",
                logo: 171,
                lang: "flex items-center pt-[8px] pb-[8px] pl-[9px] pr-[15px] border border-[#94949480] rounded-[39px] cursor-pointer relative ",
            },
            1440: {
                header: "bg-black rounded-[145px] px-6 py-[13px] mt-[25px] flex justify-between items-center font-main ml-[120px] mr-[120px] ",
                logo: 142,
            },
            1200: {
                header: "bg-black rounded-[145px] pt-[6.84px] pb-[7.16px] pr-[9.35px] pl-[16px] mt-[25px] flex justify-between items-center font-main ml-[40px] mr-[40px] ",
                logo: "108px",
                ul: "flex gap-[13px] items-center text-[12px] font-semibold ",
                signUp: "rounded-[39px] bg-white text-black cursor-pointer font-medium text-[12px] pl-[26px] pr-[26px] pt-[11.16px] pb-[10.84px]",
                signIn: "rounded-[39px] border border-[#94949480] text-white pl-[26px] pr-[26px] pt-[11.16px] pb-[10.84px] text-[12px] cursor-pointer font-medium",
                lang: "flex items-center pt-[8px] pb-[8px] pl-[9px] pr-[15px] border border-[#94949480] rounded-[39px] cursor-pointer relative ",
                logo: 108,
            },
            770: {
                ul: "hidden gap-[13px] items-center text-[12px] font-semibold",
                logo: 108,
            },
            530: {
                header: "bg-black rounded-[145px] pt-[6.84px] pb-[7.16px] pr-[9.35px] pl-[16px] mt-[25px] flex justify-between items-center font-main ml-[20px] mr-[20px] ",
                signIn: "hidden",
                lang: "hidden items-center pt-[8px] pb-[8px] pl-[9px] pr-[15px] border border-[#94949480] rounded-[39px] cursor-pointer relative ",
                logo: 108,
                signUp: "rounded-[39px] bg-white text-black cursor-pointer font-medium text-[12px] pl-[26px] pr-[26px] pt-[8px] pb-[8px]",
            },
        },
    ];

    return (
        <header
            className={`bg-black text-[16px] rounded-[145px] pt-[6.84px] pb-[7.16px] pr-[9.35px] pl-[16px] mt-[25px] flex justify-between items-center font-main ml-[20px] mr-[20px]  ${
                breakpoint === "xl"
                    ? dekstopObject[0][1920].header
                    : breakpoint === "lg"
                    ? dekstopObject[0][1440].header
                    : breakpoint === "md"
                    ? dekstopObject[0][1200].header
                    : breakpoint === "sm"
                    ? dekstopObject[0][770].header
                    : dekstopObject[0][530].header
            }`}
        >
            <Image
                src={
                    ["xs", "sms", "xxs"].includes(breakpoint)
                        ? "/mobile-logo.svg"
                        : "/logo.svg"
                }
                alt="logo"
                width={108}
                height={27.33}
            />
            <nav>
                <ul
                    className={`flex gap-[13px] items-center  font-semibold ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].ul
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].ul
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].ul
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].ul
                            : dekstopObject[0][770].ul
                    }`}
                >
                    <li className="flex">
                        <a href="#" className="text-white">
                            Post a Job
                        </a>
                    </li>
                    <li className="flex">
                        <a href="#" className="text-white">
                            Explore Jobs
                        </a>
                    </li>
                    <li className="flex">
                        <a href="#" className="text-white">
                            How It Works
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-1.5">
                <div
                    className={`flex items-center pt-[8px] pb-[8px] pl-[9px] pr-[15px] border border-[#94949480] rounded-[39px] cursor-pointer relative ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].lang
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].lang
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].lang
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].lang
                            : dekstopObject[0][530].lang
                    }`}
                    onClick={handleOpen}
                >
                    <Image src={image} alt="icon" width={24} height={24} />
                    <div className="flex items-center gap-[1px] ml-2">
                        <p className="text-sm">{language}</p>
                        <img src="/weui_arrow-filled.svg" alt="icon" />
                    </div>
                    {isOpen && (
                        <div className="absolute top-[57px] right-[0px] z-10 bg-[#000000] pt-[8px] pl-[8px] pb-[6px] pr-[10px] border border-[#94949480] rounded-[14px] w-[131px]">
                            <div
                                className="flex items-center gap-[8.5px] "
                                onClick={() => handleChooseLanguage("EN")}
                            >
                                <Image
                                    src="/england.svg"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-sm">English</p>
                            </div>
                            <div className="border border-[#94949480] mt-[5px] mb-[8px]"></div>
                            <div
                                className="flex items-center gap-[8.5px]"
                                onClick={() => handleChooseLanguage("GR")}
                            >
                                <Image
                                    src="/Greek.svg"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-sm">Greek</p>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className={` rounded-[39px] border border-[#94949480] text-white pl-[26px] pr-[26px] pt-[11.16px] pb-[10.84px] cursor-pointer font-medium ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].signIn
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].signIn
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].signIn
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].signIn
                            : dekstopObject[0][530].signIn
                    }`}
                >
                    Sign In
                </button>
                <button
                    className={`rounded-[39px] bg-white text-black cursor-pointer font-medium pl-[26px] pr-[26px] pt-[11.16px] pb-[10.84px] ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].signUp
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].signUp
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].signUp
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].signUp
                            : breakpoint === "xs"
                            ? dekstopObject[0][530].signUp
                            : dekstopObject[0][530].signUp
                    }`}
                >
                    Sign Up
                </button>
                {["xs", "sms", "xxs"].includes(breakpoint) && (
                    <Image
                        src="/mobile-icon.svg"
                        alt="icon"
                        width={34}
                        height={34}
                    />
                )}
            </div>
        </header>
    );
};
