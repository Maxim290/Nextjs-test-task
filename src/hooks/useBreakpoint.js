import { useState, useEffect } from "react";

export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState("xl");

    const handleResize = () => {
        const width = window.innerWidth;

        if (width <= 530) {
            setBreakpoint("xs");
        } else if (width <= 770) {
            setBreakpoint("sm");
        } else if (width <= 1200) {
            setBreakpoint("md");
        } else if (width <= 1440) {
            setBreakpoint("lg");
        } else if (width <= 1920) {
            setBreakpoint("xl");
        } else {
            setBreakpoint("xxl");
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
}
