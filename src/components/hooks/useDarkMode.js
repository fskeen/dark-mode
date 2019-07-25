import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage"

export function useDarkMode () {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)

    useEffect(() => {
        if (darkMode===false) {
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector("body").classList.remove("dark-mode")
        }
    }, [ darkMode ])

    return [darkMode, setDarkMode];
}
