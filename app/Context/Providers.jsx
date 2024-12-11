"use client";
import { CountProvider } from "./CountContext";
import { RightNavProvider } from "./RightNavContext";

export function Providers({ children }) {
  return (
    <CountProvider>
      <RightNavProvider>{children}</RightNavProvider>
    </CountProvider>
  );
}
