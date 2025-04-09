"use client";
import { useState } from "react";

export const useIsOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen((prev) => !prev);

    return { isOpen, handleOpen };
};
