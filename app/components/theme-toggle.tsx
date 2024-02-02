"use client";
import * as React from "react";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ToggleLeft, ToggleRight } from "lucide-react";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-none hover:bg-transparent"
      onClick={toggleTheme}
    >
      <ToggleRight className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 bg-transparent" />
      <ToggleLeft className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 bg-transparent" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
