"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

// Dynamic Font (Poppins)
const font = Poppins({
    weight: "700",
    subsets: ["latin"]
})

export const Navbar = () => {
    return (
        <div className="w-full z-50 flex justify-between items-center px-2 cursor-pointer pt-3 pb-1 fixed ">
            <div className="flex items-center">
                <Link href='/'>
                    <h1 className={cn(
                        "hidden md:block text-xl md:text-3xl font-bold text-primary", font.className
                    )}>
                        WebDev Roadmap
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Link href='/' className="text-primary">
                    Roadmap
                </Link>
                <ModeToggle />
            </div>
        </div>
    )
}