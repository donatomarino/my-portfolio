"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const items = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [selected, setSelected] = useState("Home");

  return (
    <nav aria-label="Main navigation" className="border-b border-foreground/10 px-5 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
        <span className="font-mono text-lg font-semibold tracking-tight sm:text-xl">
          &lt;donato<span className="text-secondary">dev</span> /&gt;
        </span>
        <div className="flex flex-wrap items-center gap-x-5 sm:gap-x-8">
          <ul className="flex flex-wrap items-center gap-x-5 sm:gap-x-8">
            {items.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  aria-pressed={selected === item}
                  className={`cursor-pointer border-b-2 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${
                    selected === item
                      ? "border-secondary text-foreground"
                      : "border-transparent text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-bg-primary text-foreground transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Change color theme"
            title="Change color theme"
          >
            <Sun className="theme-icon-dark" aria-hidden="true" size={20} />
            <Moon className="theme-icon-light" aria-hidden="true" size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}