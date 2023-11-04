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
import { Input } from "@/components/ui/input"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faRoad, faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import TypewriterComponent from "typewriter-effect";

// Dynamic Font (Poppins)
const font = Poppins({
    weight: "500",
    subsets: ["latin"]
})

export const Navbar = () => {
    return (
        <div>
            <div className="w-full z-50 flex justify-between items-center px-2 cursor-pointer pt-3 pb-4 fixed">
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
                                <Link href='/' className="mr-3 hover:opacity-70">
                                    <FontAwesomeIcon icon={faRoad} />
                                </Link>
                            </TooltipTrigger>
                    <TooltipContent>
                        <p>Roadmap</p>
                    </TooltipContent>
                </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href='/' className="mr-1 hover:opacity-70">
                            <FontAwesomeIcon icon={faChalkboardUser} />
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
                        <Link href='/' className="pb-none">
                            <ModeToggle />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Theme</p>
                    </TooltipContent>
                </Tooltip>
                    </TooltipProvider>
            
                <Button className="bg-transparent border-2 border-primary text-primary hover:bg-transparent hover:opacity-70">
                    <Link href='https://youtube.com/@NizzyABI?si=vME-QfY52s7rHQhH'>
                        Videos
                    </Link>
                </Button>
            </div>
            </div>

            <div className="text-8xl font-extrabold text-center pt-24">
                <h1 className=""><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Learn. </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Build. </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">Grow.</span></h1>
            </div>

            <div className="pl-5 pr-5 text-center font-semibold text-xl pt-5">
                <p>The ultimate roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">learning</span> code, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">best</span> practices, and modern day <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">technologies.</span></p>
            </div>

            <div className="relative flex items-center justify-center pt-6">
                <Input type="email" placeholder="Enter email to begin" className="w-[500px]"/>
                <Button className="bg-transparent hover:bg-transparent text-primary ">
                    
                </Button>
                
                
            </div>
            
        </div>
    )
}