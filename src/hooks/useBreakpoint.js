import { useState, useEffect } from "react";

export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState("xl");

    const handleResize = () => {
        if (window.matchMedia("(min-width: 1921px)").matches) {
            setBreakpoint("xxl");
        } else if (window.matchMedia("(min-width: 1441px)").matches) {
            setBreakpoint("xl");
        } else if (window.matchMedia("(min-width: 1201px)").matches) {
            setBreakpoint("lg");
        } else if (window.matchMedia("(min-width: 771px)").matches) {
            setBreakpoint("md");
        } else if (window.matchMedia("(min-width: 531px)").matches) {
            setBreakpoint("sm");
        } else {
            setBreakpoint("xs");
        }
    };

    useEffect(() => {
        const update = () => handleResize();

        update();

        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return breakpoint;
}
