"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import "./styles.css";

export default function ContractCard({ data }) {
    const breakpoint = useBreakpoint();

    const dekstopObject = [
        {
            1920: {
                cardSize: "w-[460px] pr-[27px] pb-[24px] pl-[27px] pt-[14px]",
                title: "text-[16px]",
                date: "text-[13.35px]",
                dateText: "text-[13.35px]",
                clinetLabel:
                    "pt-[1.91px] pb-[1.9px] pr-[28.85px] pl-[31.22px] text-[13.35px]",
                name: "text-[15.26px]",
                role: "text-[13.35px]",
                descriptionBlock: "text-[13.35px]",
                descriptionGap: "gap-[48px]",
                block: "pt-[9.54px] pb-[10.48px] pl-[9.54px] pr-[9.47px] w-[203px] rounded-[18px]",
                button: "pt-[5px] pl-[36px] pb-[4.65px] pr-[36px] text-[13.35px]",
            },
            1440: {
                cardSize:
                    "w-[380px] pr-[11px] pb-[17px] pl-[11px] pt-[10.5px] w-[161px]",
                title: "text-[14px]",
                date: "text-[14px]",
                dateText: "text-[14px]",
                name: "text-[16px]",
                role: "text-[14px]",
                clinetLabel:
                    "pt-[1.91px] pb-[1.9px] pr-[19px] pl-[19px] text-[13.35px]",
                descriptionBlock: "text-[14px]",
                descriptionGap: "gap-[61px]",
                block: "pt-[7.54px] pb-[10.85px] pl-[5.37px] pr-[7.93px] rounded-[18px]",
                button: "pt-[4px] pl-[13px] pb-[6px] pr-[13px] text-[14px]",
            },
            1200: {
                cardSize: "w-[380px] pr-[11px] pb-[17px] pl-[11px] pt-[10.5px]",
                title: "text-[14px]",
                date: "text-[14px]",
                dateText: "text-[14px]",
                clinetLabel:
                    "pt-[1.91px] pb-[1.9px] pr-[19px] pl-[19px] text-[13.35px]",
                name: "text-[16px]",
                role: "text-[14px]",
                descriptionBlock: "text-[14px]",
                descriptionGap: "gap-[61px]",
                block: "pt-[9.54px] pb-[10.48px] pl-[9.54px] pr-[9.47px] rounded-[18px]",
                button: "pt-[4px] pl-[13px] pb-[6px] pr-[13px] text-[14px]",
            },
            770: {
                cardSize: "w-[335px] pr-[11px] pb-[17px] pl-[11px] pt-[10.5px]",
                title: "text-[12px]",
                date: "text-[12px]",
                dateText: "text-[12px]",
                clinetLabel:
                    "pt-[1.91px] pb-[1.9px] pr-[19px] pl-[19px] text-[12px]",
                name: "text-[12px]",
                role: "text-[12px]",
                descriptionBlock: "text-[14px]",
                descriptionGap: "gap-[31px]",
                block: "pt-[9.54px] pb-[10.48px] pl-[9.54px] pr-[9.47px] w-[152px] rounded-[13px]",
                button: "pt-[4px] pl-[11.41px] pb-[6px] pr-[16.67px] text-[12px]",
            },
            530: {
                cardSize:
                    "w-[335px] mr-[20px] ml-[10px] pr-[11px] pb-[17px] pl-[11px] pt-[10.5px]",
                title: "text-[12px]",
                date: "text-[12px]",
                dateText: "text-[12px]",
                clinetLabel:
                    "pt-[1.91px] pb-[1.9px] pr-[19px] pl-[19px] text-[12px]",
                name: "text-[12px]",
                role: "text-[12px]",
                descriptionBlock: "text-[12px]",
                descriptionGap: "gap-[31px]",
                block: "pt-[9.54px] pb-[10.48px] pl-[9.54px] pr-[9.47px] w-[152px] rounded-[13px]",
                button: "pt-[4px] pl-[11.41px] pb-[6px] pr-[16.67px] text-[12px]",
            },
        },
    ];

    return (
        <div
            className={`bg-white rounded-xl mx-auto font-main relative 
            ${
                breakpoint === "xl"
                    ? dekstopObject[0][1920].cardSize
                    : breakpoint === "lg"
                    ? dekstopObject[0][1440].cardSize
                    : breakpoint === "md"
                    ? dekstopObject[0][1200].cardSize
                    : breakpoint === "sm"
                    ? dekstopObject[0][770].cardSize
                    : dekstopObject[0][530].cardSize
            }
        `}
        >
            <div
                className={`contract ${
                    breakpoint === "sms" ? "text-[12px]" : "text-[16px]"
                }`}
            >
                CONTRACT
            </div>
            <div className="text-right">
                <h3
                    className={`text-[#000000] ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].title
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].title
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].title
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].title
                            : dekstopObject[0][530].title
                    } font-semibold`}
                >
                    {data.title}
                </h3>
                <p
                    className={`text-[#000000] ${
                        breakpoint === "sms" ? "text-[10px]" : "text-[13.35px]"
                    } font-semibold`}
                >
                    Payment Type:{" "}
                    <span
                        className={`font-normal ${
                            breakpoint === "sms" ? "text-[10px]" : ""
                        }`}
                    >
                        {data.paymentType}
                    </span>
                </p>
            </div>
            <div className="flex gap-4 mt-4">
                <div
                    className={`bg-[#F4F5F8] ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].block
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].block
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].block
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].block
                            : dekstopObject[0][530].block
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <img
                            src={data.client.image}
                            alt={data.client.name}
                            className="w-[49.6px] h-[49.7px] rounded-full border"
                        />
                        <div>
                            <span
                                style={{
                                    backgroundColor: data.client.labelColor,
                                    color: data.client.textColor,
                                }}
                                className={`${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].clinetLabel
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].clinetLabel
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].clinetLabel
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].clinetLabel
                                        : dekstopObject[0][530].clinetLabel
                                } font-medium rounded-[47.7px] leading-[20.99px]`}
                            >
                                {data.client.label}
                            </span>
                            <div className="mt-[5.72px] text-yellow-500 text-sm font-semibold flex justify-end">
                                <img
                                    src="/Star 1.svg"
                                    alt="icon"
                                    className="mr-[4.77px]"
                                />
                                <p className="text-[#000000]">
                                    {data.client.rating}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p
                        className={`mt-2 text-[#000000] ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].name
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].name
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].name
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].name
                                : dekstopObject[0][530].name
                        } font-semibold`}
                    >
                        {data.client.name}
                    </p>
                    <p
                        className={`text-[#818181] ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].role
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].role
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].role
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].role
                                : dekstopObject[0][530].role
                        } font-normal`}
                    >
                        {data.client.role}
                    </p>
                </div>
                <div
                    className={`bg-[#F4F5F8] ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].block
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].block
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].block
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].block
                            : dekstopObject[0][530].block
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <img
                            src={data.talent.image}
                            alt={data.talent.name}
                            className="w-[49.6px] h-[49.7px] rounded-full border"
                        />
                        <div>
                            <span
                                style={{
                                    backgroundColor: data.talent.labelColor,
                                    color: data.talent.textColor,
                                }}
                                className={` ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].clinetLabel
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].clinetLabel
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].clinetLabel
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].clinetLabel
                                        : dekstopObject[0][530].clinetLabel
                                } font-medium rounded-[47.7px] leading-[20.99px]`}
                            >
                                {data.talent.label}
                            </span>
                            <div className="mt-[5.72px] text-yellow-500 text-sm font-semibold flex justify-end">
                                <img
                                    src="/Star 1.svg"
                                    alt="icon"
                                    className="mr-[4.77px]"
                                />
                                <p className="text-[#000000]">
                                    {data.talent.rating}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p
                        className={`mt-2 text-[#000000] ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].name
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].name
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].name
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].name
                                : dekstopObject[0][530].name
                        } font-semibold`}
                    >
                        {data.talent.name}
                    </p>
                    <p
                        className={`text-[#818181] ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].role
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].role
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].role
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].role
                                : dekstopObject[0][530].role
                        } font-normal`}
                    >
                        {data.talent.role}
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <div>
                    <div className="flex items-center gap-2">
                        <img src="/Group 1171277340.svg" alt="icon" />
                        <h4
                            className={`text-[#000000] ${
                                breakpoint === "sms"
                                    ? "text-[12px]"
                                    : "text-[15.26px]"
                            } font-semibold`}
                        >
                            Description
                        </h4>
                    </div>
                    <p
                        className={`${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].descriptionBlock
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].descriptionBlock
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].descriptionBlock
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].descriptionBlock
                                : dekstopObject[0][530].descriptionBlock
                        } font-normal mb-[20px] mt-[8.48px] leading-[20.99px]`}
                        style={{ color: "rgba(71, 71, 71, 1)" }}
                    >
                        We are looking for a teacher to provide one-on-one
                        algebra and geometry tutoring, 60-minute sessions, twice
                        weekly.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/Group 1171277342.svg" alt="icon" />
                    <h4
                        className={`text-[#000000] ${
                            breakpoint === "sms"
                                ? "text-[12px]"
                                : "text-[15.26px]"
                        } font-semibold`}
                    >
                        Job Details
                    </h4>
                </div>
                <div
                    className={`mt-2 text-[13.35px] leading-[20.99px] space-y-2 flex ${
                        breakpoint === "xl"
                            ? dekstopObject[0][1920].descriptionGap
                            : breakpoint === "lg"
                            ? dekstopObject[0][1440].descriptionGap
                            : breakpoint === "md"
                            ? dekstopObject[0][1200].descriptionGap
                            : breakpoint === "sm"
                            ? dekstopObject[0][770].descriptionGap
                            : dekstopObject[0][530].descriptionGap
                    }`}
                >
                    <div className="w-[210px]">
                        <div className="flex justify-between">
                            <p
                                className={`font-semibold text-[#000000] ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].date
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].date
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].date
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].date
                                        : dekstopObject[0][530].date
                                }`}
                            >
                                Start Date:
                            </p>
                            <p
                                className={`text-[#474747] font-normal ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].dateText
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].dateText
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].dateText
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].dateText
                                        : dekstopObject[0][530].dateText
                                }`}
                            >
                                {data.startDate}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p
                                className={`font-semibold text-[#000000] ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].date
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].date
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].date
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].date
                                        : dekstopObject[0][530].date
                                }`}
                            >
                                End Date:
                            </p>
                            <p
                                className={`text-[#474747] font-normal ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].dateText
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].dateText
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].dateText
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].dateText
                                        : dekstopObject[0][530].dateText
                                }`}
                            >
                                {data.endDate}
                            </p>
                        </div>
                    </div>
                    <div className="w-[184px]">
                        <div className="flex justify-between">
                            <p
                                className={`font-semibold text-[#000000] ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].date
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].date
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].date
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].date
                                        : dekstopObject[0][530].date
                                }`}
                            >
                                Status:
                            </p>
                            <p
                                className={`text-[#474747] font-normal ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].dateText
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].dateText
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].dateText
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].dateText
                                        : dekstopObject[0][530].dateText
                                }`}
                            >
                                {data.status}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p
                                className={`font-semibold text-[#000000] ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].date
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].date
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].date
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].date
                                        : dekstopObject[0][530].date
                                }`}
                            >
                                Budget:
                            </p>
                            <p
                                className={`text-[#474747] font-normal ${
                                    breakpoint === "xl"
                                        ? dekstopObject[0][1920].dateText
                                        : breakpoint === "lg"
                                        ? dekstopObject[0][1440].dateText
                                        : breakpoint === "md"
                                        ? dekstopObject[0][1200].dateText
                                        : breakpoint === "sm"
                                        ? dekstopObject[0][770].dateText
                                        : dekstopObject[0][530].dateText
                                }`}
                            >
                                {data.budget}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`mt-[21px] bg-black text-white  text-center  rounded-[14.31px] ${
                    breakpoint === "xl"
                        ? dekstopObject[0][1920].button
                        : breakpoint === "lg"
                        ? dekstopObject[0][1440].button
                        : breakpoint === "md"
                        ? dekstopObject[0][1200].button
                        : breakpoint === "sm"
                        ? dekstopObject[0][770].button
                        : dekstopObject[0][530].button
                }`}
            >
                Fixed-priced contract is under the protection of the payment
                system.
            </div>
        </div>
    );
}
