"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Mode = "production" | "config";

type ModeContextValue = {
    mode: Mode;
    isConfig: boolean;
    toggleMode: () => void;
    setMode: (m: Mode) => void;
};

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setModeState] = useState<Mode>("production");

    // Optional: persist across refresh
    useEffect(() => {
        const saved = window.localStorage.getItem("sw_mode");
        if (saved === "config" || saved === "production") setModeState(saved);
    }, []);

    // Apply to <html data-mode="...">
    useEffect(() => {
        const html = document.documentElement;
        if (mode === "config") html.setAttribute("data-mode", "config");
        else html.removeAttribute("data-mode");

        window.localStorage.setItem("sw_mode", mode);
    }, [mode]);

    const value = useMemo<ModeContextValue>(() => {
        return {
            mode,
            isConfig: mode === "config",
            toggleMode: () => setModeState((m) => (m === "config" ? "production" : "config")),
            setMode: (m) => setModeState(m),
        };
    }, [mode]);

    return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
    const ctx = useContext(ModeContext);
    if (!ctx) throw new Error("useMode must be used within ModeProvider");
    return ctx;
}
