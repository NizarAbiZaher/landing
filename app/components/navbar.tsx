"use client";

import { cn } from "@/lib/utils";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, GanttChartSquare, Laptop } from 'lucide-react';
// Dynamic Font (Poppins)
const font = Poppins({
    weight: "500",
    subsets: ["latin"]
})

// Data

export const Navbar = () => {
    return (
        <div>
            <div className="hover:opacity:70 text-center pt-4 pb-4 border-b border-gray">
                <Link href='https://google.com' className="hover:opacity-70">
                    Subscribe for daily videos →
                </Link>
            </div>
            <div className="w-full z-50 flex justify-between items-center px-2 cursor-pointer pt-3 pb-4">
                <div className="flex items-center">
                    <Link href='/'>
                        <h1 className={cn(
                        "text-2xl md:text-3xl font-bold text-primary", font.className
                        )}>
                        Roadmap
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center gap-x-3 ">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href='/me' className="mr-3 hover:opacity-70">
                                    <GanttChartSquare />
                                </Link>
                            </TooltipTrigger>
                    <TooltipContent>
                            <p>Roadmap!</p>
                    </TooltipContent>
                </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href='https://calendly.com/nizabizaher' className="mr-1 hover:opacity-70">
                            <Laptop />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Coaching</p>
                    </TooltipContent>
                </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        
                            <ModeToggle />
                        
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Theme</p>
                    </TooltipContent>
                </Tooltip>
                    </TooltipProvider>
            
                <Button className="bg-transparent border-2 border-primary text-primary hover:bg-transparent videoBorder">
                    <Link href='https://youtube.com/@NizzyABI?si=vME-QfY52s7rHQhH'>
                        Account
                    </Link>
                </Button>
            </div>
            </div>  
        </div>
    )
}