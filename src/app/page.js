"use client";
import ContractCard from "@/components/ContractCard";
import Hero from "@/components/Hero";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useRef } from "react";
import "../components/ContractCard/styles.css";

export default function Home() {
    const sliderRef = useRef(null);
    const slideAmount = 460 * 3 + 20 * 2;
    const breakpoint = useBreakpoint();
    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= slideAmount;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += slideAmount;
        }
    };

    const contractDataArray = [
        {
            title: "Looking for Math Teacher",
            paymentType: "Fixed Price",
            id: 1,
            client: {
                name: "Edward Smith",
                role: "Founder of MathTech",
                rating: "5.0",
                image: "/first-image.svg",
                label: "Client",
                textColor: "#000000",
                labelColor: "rgba(13, 64, 190, 0.1)",
            },
            talent: {
                name: "John Doe",
                role: "Math Teacher",
                rating: "4.7",
                image: "/second-image.svg",
                label: "Talent",
                textColor: "rgba(24, 71, 13, 1)",
                labelColor: "#CBEC5E",
            },
            startDate: "Jan 15, 2025",
            endDate: "Not Estimated",
            status: "Ongoing",
            budget: "$2000",
        },
        {
            title: "Looking for Math Teacher",
            paymentType: "Fixed Price",
            id: 2,
            client: {
                name: "Edward Smith",
                role: "Founder of MathTech",
                rating: "5.0",
                image: "/first-image.svg",
                label: "Client",
                textColor: "#000000",
                labelColor: "rgba(13, 64, 190, 0.1)",
            },
            talent: {
                name: "John Doe",
                role: "Math Teacher",
                rating: "4.7",
                image: "/second-image.svg",
                label: "Talent",
                textColor: "rgba(24, 71, 13, 1)",
                labelColor: "#CBEC5E",
            },
            startDate: "Jan 15, 2025",
            endDate: "Not Estimated",
            status: "Ongoing",
            budget: "$2000",
        },
        {
            title: "Looking for Math Teacher",
            paymentType: "Fixed Price",
            id: 3,
            client: {
                name: "Edward Smith",
                role: "Founder of MathTech",
                rating: "5.0",
                image: "/first-image.svg",
                label: "Client",
                textColor: "#000000",
                labelColor: "rgba(13, 64, 190, 0.1)",
            },
            talent: {
                name: "John Doe",
                role: "Math Teacher",
                rating: "4.7",
                image: "/second-image.svg",
                label: "Talent",
                textColor: "rgba(24, 71, 13, 1)",
                labelColor: "#CBEC5E",
            },
            startDate: "Jan 15, 2025",
            endDate: "Not Estimated",
            status: "Ongoing",
            budget: "$2000",
        },
        {
            title: "Looking for Math Teacher",
            paymentType: "Fixed Price",
            id: 4,
            client: {
                name: "John Doe",
                role: "Founder of MathTech",
                rating: "5.0",
                image: "/first-image.svg",
                label: "Client",
                textColor: "#000000",
                labelColor: "rgba(13, 64, 190, 0.1)",
            },
            talent: {
                name: "John Doe",
                role: "Math Teacher",
                rating: "4.7",
                image: "/second-image.svg",
                label: "Talent",
                textColor: "rgba(24, 71, 13, 1)",
                labelColor: "#CBEC5E",
            },
            startDate: "Jan 15, 2025",
            endDate: "Not Estimated",
            status: "Ongoing",
            budget: "$2000",
        },
    ];

    const dekstopObject = [
        {
            1920: {
                cardSize: "w-[1440px] pl-[240px]",
                image: "w-[63px] h-[63px]",
            },
            1440: {
                cardSize: "w-[1180px] pl-[120px]",
                image: "w-[47px] h-[47px]",
            },
            1200: {
                cardSize: "w-[800px] pl-[40px]",
                image: "w-[47px] h-[47px]",
            },
            770: {
                cardSize: "w-[335px] pl-[20px]",
                image: "w-[47px] h-[47px]",
            },
            530: {
                cardSize: "w-[335px] pl-[20px]",
                image: "w-[41px] h-[41px]",
            },
        },
    ];

    return (
        <div>
            <Hero />
            <div className="mx-auto">
                <div className="container-slider">
                    <div
                        ref={sliderRef}
                        className={`contract-slider ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].cardSize
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].cardSize
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].cardSize
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].cardSize
                                : breakpoint === "xs"
                                ? dekstopObject[0][530].cardSize
                                : dekstopObject[0][530].cardSize
                        }`}
                    >
                        {contractDataArray.map((user) => (
                            <div className="contract-card" key={user.id}>
                                <ContractCard data={user} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-[10px] justify-center mt-[30px]">
                    <img
                        src="/Group 1171277215.svg"
                        alt="arrow left"
                        className={`cursor-pointer ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].image
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].image
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].image
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].image
                                : breakpoint === "xs"
                                ? dekstopObject[0][530].image
                                : dekstopObject[0][530].image
                        }`}
                        onClick={slideLeft}
                    />
                    <img
                        src="/Group 1171277213.svg"
                        alt="arrow right"
                        className={`cursor-pointer ${
                            breakpoint === "xl"
                                ? dekstopObject[0][1920].image
                                : breakpoint === "lg"
                                ? dekstopObject[0][1440].image
                                : breakpoint === "md"
                                ? dekstopObject[0][1200].image
                                : breakpoint === "sm"
                                ? dekstopObject[0][770].image
                                : breakpoint === "xs"
                                ? dekstopObject[0][530].image
                                : dekstopObject[0][530].image
                        }`}
                        onClick={slideRight}
                    />
                </div>
            </div>
        </div>
    );
}
