"use client";

import { useContext } from "react";
import ThemeContext from "@/context/theme";

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;
