import Image from "next/image";
import { useState } from "react";
// Styles
import "./index.css";
import { useIsOpen } from "@/hooks/useIsOpen";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const data = [
    { imagePath: "/Mask group (1).svg", id: 1 },
    { imagePath: "/Mask group (1).svg", id: 2 },
    { imagePath: "/Mask group (1).svg", id: 3 },
    { imagePath: "/Mask group (1).svg", id: 4 },
    { imagePath: "/Mask group (1).svg", id: 5 },
];

export default function Hero() {
    const [valueSearch, setValueSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const { isOpen, handleOpen } = useIsOpen();
    const breakpoint = useBreakpoint();
    const activeItem = data[activeIndex];

    const dekstopObject = [
        {
            1920: {
                mainContainer: "ml-[240px] mr-[240px]",
                signUp: "flex gap-[10px] absolute top-[237.86px] right-[102px]",
                signBtn:
                    "bg-[#CBEC5E] text-[#18470D] font-medium rounded-[40px] text-[16px] pt-[13px] pb-[14px] pr-[30px] pl-[30px]",
                search: "bottom-[138px] left-[433px]",
                inputPadding: "pt-[] pb-[] pr-[142px] pl-[16px]",
                isOpenWindow: "pt-[15px] pb-[13px] pl-[23px] pr-[23px]",
                windowPadding: "pl-[14.07px]",
                windowClient: "left-[375px]",
                education:
                    "absolute z-[10] left-1/2 bottom-[31.68px] transform -translate-x-1/2 text-[#000000]  bg-[#FFFFFF]   rounded-[50.83px] font-extrabold pt-[13px] pb-[12px] pl-[45px] pr-[44px]",
                slider: "bottom-[109px]",
            },
            1440: {
                mainContainer: "ml-[120px] mr-[120px]",
                signUp: "flex gap-[10px] absolute top-[194px] right-[74px]",
                signBtn:
                    " bg-[#CBEC5E] text-[#18470D] font-medium rounded-[40px] text-[16px] pt-[13px] pb-[14px] pr-[30px] pl-[30px]",
                search: "bottom-[102px] left-[373px]",
                inputPadding: "pt-[] pb-[] pr-[142px] pl-[16px]",
                isOpenWindow: "pt-[15px] pb-[13px] pl-[23px] pr-[23px]",
                windowPadding: "pl-[14.07px]",
                windowClient: "left-[375px]",
                education:
                    "absolute z-[10] left-1/2 bottom-[11.68px] transform -translate-x-1/2 text-[#000000] font-extrabold  bg-[#FFFFFF]  rounded-[50.83px] pt-[13px] pb-[12px] pl-[45px] pr-[44px]",
                slider: "bottom-[75.83px]",
            },
            1200: {
                mainContainer: "ml-[40px] mr-[40px]",
                signUp: "flex gap-[10px] absolute top-[176px] right-[40.75px]",
                signBtn:
                    " bg-[#CBEC5E] text-[#18470D] font-medium rounded-[40px] text-[12px] pt-[11px] pb-[11px] pr-[26px] pl-[27px]",
                search: "bottom-[67px] left-[159px]",
                inputPadding: "pt-[] pb-[] pr-[97px] pl-[13.33px]",
                isOpenWindow: "pt-[12px] pb-[10px] pl-[16.59px] pr-[17px]",
                windowPadding: "pl-[0]",
                windowClient: "left-[116px]",
                education:
                    "absolute text-[12px] font-bold bottom-[11px] pt-[10px] pb-[9px] pl-[24px] pr-[23px] z-[10] left-1/2 transform -translate-x-1/2 text-[#000000]  bg-[#FFFFFF]  rounded-[50.83px]",
                slider: "bottom-[41px]",
            },
            770: {
                mainContainer: "ml-[20px] mr-[20px]",
                signUp: "flex gap-[10px] absolute top-[176px] right-[40.75px]",
                signBtn:
                    "bg-[#CBEC5E] text-[#18470D] font-medium rounded-[40px] text-[12px] pt-[11px] pb-[11px] pr-[26px] pl-[27px]",
                search: "bottom-[-100px] left-[0px]",
                inputPadding: "pt-[] pb-[] pr-[21.8px] pl-[13.33px]",
                isOpenWindow: "pt-[12px] pb-[10px] pl-[16.59px] pr-[17px]",
                windowPadding: "pl-[0]",
                windowClient: "left-[none] right-[0]",
                education:
                    "absolute text-[12px] font-bold z-[10] left-1/2 pt-[10px] pb-[9px] pl-[24px] pr-[23px] transform -translate-x-1/2 text-[#000000]  bg-[#FFFFFF]  rounded-[50.83px]",
                slider: "bottom-[41px]",
            },
            530: {
                mainContainer: "ml-[20px] mr-[20px]",
                signUp: "flex gap-[10px] relative mr-[40px] ml-[60px]",
                signBtn:
                    " bg-[#CBEC5E] text-[#18470D] font-medium  rounded-[40px] text-[12px] pt-[11px] pb-[11px] pr-[26px] pl-[27px]",
                search: "relative bottom-[0] top-[54px] left-[0px]",
                inputPadding:
                    "pt-[] pb-[] pr-[0] pl-[13.33px] placeholder:text-[12px] w-[190px]",
                isOpenWindow: "pt-[12px] pb-[10px] pl-[16.59px] pr-[17px]",
                windowPadding: "pl-[0]",
                windowClient: "left-[none] right-[0]",
                education:
                    "absolute w-[207px] bottom-[none] top-[253px] text-[12px] font-bold z-[10] leading-[26px]  pt-[7px] pb-[6px] pl-[21px] pr-[21px]  text-[#000000]  bg-[#FFFFFF]  rounded-[50.83px]",
                slider: "bottom-[none] top-[236px]",
            },
        },
    ];

    return (
        <div
            className={`mt-[17px] font-main relative  ${
                breakpoint === "xl"
                    ? dekstopObject[0][1920].mainContainer
                    : breakpoint === "lg"
                    ? dekstopObject[0][1440].mainContainer
                    : breakpoint === "md"
                    ? dekstopObject[0][1200].mainContainer
                    : breakpoint === "sm"
                    ? dekstopObject[0][770].mainContainer
                    : dekstopObject[0][530].mainContainer
            }`}
        >
            <div className="relative">
                <Image
                    src={
                        ["sms", "xs", "xxs"].includes(breakpoint)
                            ? "/young-woman-works-remotely-laptop-surrounded-by-plants 1.svg"
                            : activeItem.imagePath
                    }
                    alt="background"
                    width={0}
                    height={0}
                    className={`mt-[17px] font-main relative  ${
                        breakpoint === "xs"
                            ? "rounded-[20px]"
                            : breakpoint === "xxs"
                            ? "rounded-[20px]"
                            : "rounded-[20px]"
                    }`}
                    style={{
                        width: "100%",
                        height: "auto",
                        transition: "opacity 0.3s ease",
                    }}
                    sizes="100vw"
                    quality={100}
                    priority
                />

                <div>
                    <p className="cutCorner">
                        FIND THE <span className="text-[#CBEC5E]">TALEN</span>{" "}
                        SIGN UP & GET THE{" "}
                        <span className="text-[#CBEC5E]">JOB</span> DONE
                    </p>
                    <p className="cutCornerTwo">
                        WE`LL <span className="text-[#CBEC5E]">HANDLE</span>{" "}
                        THAT
                    </p>
                    <div
                        className={`flex gap-[10px] absolute ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].signUp
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].signUp
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].signUp
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].signUp
                                : dekstopObject[0][530].signUp
                        }`}
                    >
                        <p
                            className={`  ${
                                breakpoint === "xl"
                                    ? dekstopObject[0][1920].signBtn
                                    : breakpoint === "lg"
                                    ? dekstopObject[0][1440].signBtn
                                    : breakpoint === "md"
                                    ? dekstopObject[0][1200].signBtn
                                    : breakpoint === "sm"
                                    ? dekstopObject[0][770].signBtn
                                    : breakpoint === "xs"
                                    ? dekstopObject[0][530].signBtn
                                    : dekstopObject[0][530].signBtn
                            }`}
                        >
                            Sign Up for Contract
                        </p>
                        <Image
                            src="/player.svg"
                            alt="player"
                            width={`${
                                breakpoint === "xl"
                                    ? 51
                                    : breakpoint === "lg"
                                    ? 51
                                    : breakpoint === "md"
                                    ? 40
                                    : breakpoint === "sm"
                                    ? 40
                                    : 40
                            }`}
                            height={`${
                                breakpoint === "xl"
                                    ? 51
                                    : breakpoint === "lg"
                                    ? 51
                                    : breakpoint === "md"
                                    ? 40
                                    : breakpoint === "sm"
                                    ? 40
                                    : 40
                            }`}
                        />
                    </div>
                </div>
                <div
                    className={`absolute flex flex-col justify-center z-50 ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].search
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].search
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].search
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].search
                            : dekstopObject[0][530].search
                    }`}
                >
                    <div
                        className={
                            isOpen
                                ? "flex bg-[#FFFFFF] pt-[4px] pl-[4px] pb-[4px] pr-[4px] rounded-[73px]"
                                : "flex bg-[#FFFFFF] pt-[4px] pl-[4px] pb-[4px] pr-[22.33px] rounded-[73px]"
                        }
                    >
                        <Image
                            src="/search-icon.svg"
                            alt="icon"
                            width={`${
                                breakpoint === "xl"
                                    ? 50
                                    : breakpoint === "lg"
                                    ? 40
                                    : breakpoint === "md"
                                    ? 40
                                    : breakpoint === "sm"
                                    ? 40
                                    : 40
                            }`}
                            height={50}
                        />
                        <input
                            placeholder="Find a job, talent or service"
                            value={valueSearch}
                            onChange={(e) => setValueSearch(e.target.value)}
                            className={`placeholder:text-[#737373] outline-none text-black ${
                                breakpoint === "xl"
                                    ? dekstopObject[0][1920].inputPadding
                                    : breakpoint === "lg"
                                    ? dekstopObject[0][1440].inputPadding
                                    : breakpoint === "md"
                                    ? dekstopObject[0][1200].inputPadding
                                    : breakpoint === "sm"
                                    ? dekstopObject[0][770].inputPadding
                                    : dekstopObject[0][530].inputPadding
                            }`}
                        />
                        <div
                            className={
                                isOpen
                                    ? `flex items-center gap-[4.79px] cursor-pointer  bg-[#F0F1F4] rounded-[27.5px] ${
                                          breakpoint === "xl"
                                              ? dekstopObject[0][1920]
                                                    .isOpenWindow
                                              : breakpoint === "lg"
                                              ? dekstopObject[0][1440]
                                                    .isOpenWindow
                                              : breakpoint === "md"
                                              ? dekstopObject[0][1200]
                                                    .isOpenWindow
                                              : breakpoint === "sm"
                                              ? dekstopObject[0][770]
                                                    .isOpenWindow
                                              : breakpoint === "xs"
                                              ? dekstopObject[0][530]
                                                    .isOpenWindow
                                              : dekstopObject[0][530]
                                                    .isOpenWindow
                                      }`
                                    : "flex items-center gap-[4.79px] cursor-pointer"
                            }
                            style={{
                                border: isOpen ? "1px solid #CDCDCD" : "none",
                            }}
                            onClick={handleOpen}
                        >
                            <div
                                className={
                                    !isOpen
                                        ? "w-[1px] h-[22px] bg-[#737373]"
                                        : "hidden"
                                }
                            ></div>
                            <p
                                className={`text-[#474747] text-sm font-medium  ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].windowPadding
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].windowPadding
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].windowPadding
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].windowPadding
                                        : breakpoint === "xs"
                                        ? dekstopObject[0][530].windowPadding
                                        : dekstopObject[0][530].windowPadding
                                }`}
                            >
                                Talent
                            </p>
                            <Image
                                src={
                                    isOpen
                                        ? "/open-arrow.svg"
                                        : "/weui_arrow-filled-search.svg"
                                }
                                alt="icon"
                                width={14.89}
                                height={7.5}
                            />
                            {isOpen && (
                                <div
                                    className={`w-[239px] absolute bg-[#FFFFFF] pt-[8px] pb-[8px] pl-[12px] pr-[31px] rounded-[12px] top-[60px] z-[50]  ${
                                        breakpoint === "xl"
                                            ? dekstopObject[0][1920]
                                                  .windowClient
                                            : breakpoint === "lg"
                                            ? dekstopObject[0][1440]
                                                  .windowClient
                                            : breakpoint === "md"
                                            ? dekstopObject[0][1200]
                                                  .windowClient
                                            : breakpoint === "sm"
                                            ? dekstopObject[0][770].windowClient
                                            : breakpoint === "xs"
                                            ? dekstopObject[0][530].windowClient
                                            : dekstopObject[0][530].windowClient
                                    }`}
                                >
                                    <div className="flex gap-[6px] ">
                                        <div>
                                            <Image
                                                src={"/Frame.svg"}
                                                alt="icon"
                                                width={22}
                                                height={22}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[#181818] text-[14px] font-medium">
                                                Talent
                                            </p>
                                            <p className="text-[#3F3C3C] text-[11px] font-normal">
                                                Hire professionals effortlessly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[6px] mt-[10px] ">
                                        <div>
                                            <Image
                                                src={"/Frame (1).svg"}
                                                alt="icon"
                                                width={22}
                                                height={22}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[#181818] text-[14px] font-medium">
                                                Client
                                            </p>
                                            <p className="text-[#3F3C3C] text-[11px] font-normal">
                                                Apply to jobs posted by clients
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={`absolute  left-1/2 transform -translate-x-1/2 flex gap-[8px]   ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].slider
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].slider
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].slider
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].slider
                            : dekstopObject[0][530].slider
                    }`}
                >
                    {data.map((_, i) => (
                        <Image
                            key={i}
                            src={
                                i === activeIndex
                                    ? "/active-btn.svg"
                                    : "/nonactive-btn.svg"
                            }
                            alt="indicator"
                            width={9.87}
                            height={9.87}
                            onClick={() => setActiveIndex(i)}
                            className="cursor-pointer"
                        />
                    ))}
                </div>
                <p
                    className={`absolute z-[10] left-1/2 transform -translate-x-1/2 text-[#000000]  bg-[#FFFFFF]  rounded-[50.83px]    ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].education
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].education
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].education
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].education
                            : dekstopObject[0][530].education
                    }`}
                >
                    EDUCATION AND TUTORING
                </p>
            </div>
        </div>
    );
}
