import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { GoServer } from "react-icons/go"
import {BsCodeSlash, BsPersonWorkspace } from 'react-icons/bs';
import {BiLogoCss3, BiLogoJavascript, BiLogoHtml5, BiLogoReact, BiLogoMongodb, BiLogoFirebase, BiLogoNodejs, BiGitBranch, BiGitCommit } from 'react-icons/bi';
import {TbBrandNextjs} from 'react-icons/tb';
import {GiComputing, GiRoad} from 'react-icons/gi';
import IconStrip from "./icon-strip";
import { Check } from "lucide-react";
import { DialogCloseButton } from "./alert";



export const Main = () => {

    // Data
    const roadmap = [
        {
            number: "01",
            title: "The Basics",
            text: "You’ll start your programming journey at the very beginning. In section 1, you'll learn the basics of code such as the different programming langauges, building your first website, data sturctures, algorithms, and modern day languages.",
            symbol: [
                <BsCodeSlash key="icon1"  className="mr-4 text-purple-400" />,
                <GiComputing key="icon44"  className="mr-4 text-green-500" />
            ]
        },
        
        {
            number: "02",
            title: "HTML, CSS, & JavaScript",
            text: "Now that you have some programming experience, it’s time to get your hands dirty & learn your first languages for the web! In section 3, you’ll know how to build responsive websites  & functional applications using HTML, CSS, & JavaScript which will be put on your resume.",
            symbol: [
            <BiLogoHtml5 key="icon2" className="mr-4 text-orange-500" />,
            <BiLogoCss3 key="icon3" className="mr-4 text-blue-600" />,
            <BiLogoJavascript key="icon4" className="mr-4 text-yellow-400" />,
        ]
        },
        {
            number: "03",
            title: "Frontend Frameworks",
            text: "Knowing frameworks is a must if you want to get a job in tech. Over 60% of developers use a framework to help them code! So in section 4, you’ll learn & build projects in popular frameworks such as React.JS & Next.JS that can be used in your resume!",
            symbol: [
                <BiLogoReact key="icon5" className="mr-4 text-blue-400" />,
                <TbBrandNextjs className="mr-4" key="icon6"/>
            ]
        },
        {
            number: "04",
            title: "Backend Languages",
            text: "Up to this point, you’ve only built ‘front-end’ applications (things that users can see). However, the backend is equally as important. IIt’s how we make accounts, store data, and create usernames & passwords.Thus, in section 5, you’ll learn about the backend languages (MongoDB, SQL & Firebase) so you can build apps that work.",
            symbol: [
                <BiLogoMongodb key="icon7" className="mr-4 text-green-500" />,
                <BiLogoFirebase key="icon22" className="mr-4 text-orange-300" />,
                <BiLogoNodejs key="icon25" className="mr-4 text-green-400" />,
                
            ],

        },
        {
            number: "05",
            title: "Fullstack Development",
            text: "Until now, you’ve built frontend & backend seperatly. Now it’s time to bring it all together with a ‘fullstack app’ (using frontend & backend together).  In section 6, you will build your first ever full stack app that can be put in your resume!",
            symbol: [
                <GoServer key="icon9" className="mr-4 text-teal-600" />
            ]
        },
        {
            number: "06",
            title: "Finishing Touches",
            text: "If you want to stand out to employers & be an above average developer, you’ll want to learn about github, software architecture, & design principles. That’s exactly what you will learn in section 7.",
            symbol: [
                <BiGitBranch className="mr-4 text-orange-500" key="icon10 0" />,
                <BiGitCommit className="mr-4 text-red-500" key="icon11"/>
            ]
        },
        {
            number: "07",
            title: "Land a Job",
            text: "Finally, it’s time to get a job! After all, you’ve worked hard to get to this point. In section 8, you will learn how to build a tech resume, display your projects, &  apply to jobs so that you can land your ideal job.",
            symbol: [
                <BsPersonWorkspace className="mr-4 text-purple-600" key="icon13"/>,
                
            ]
        },

    ]
    
    return (
        <div>
            <div className="text-8xl font-extrabold text-center">
                <h1 className=""><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Learn. </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Build. </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">Grow.</span></h1>
            </div>

            <div className="pl-5 pr-5 text-center font-semibold text-xl pt-5">
                <p>The ultimate roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">learning</span> code, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">best</span> practices, and modern day <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-700">technologies.</span></p>
            </div>

            <div className="relative flex items-center justify-center pt-6 pl-7">
                <Input type="email" placeholder="Enter email to begin" className="w-[500px] animated-border-and-shadow"/>
                <Button className="bg-transparent hover:bg-transparent text-primary ">
                    
                </Button>
                
                
            </div>

            <div className="text-center pt-5 pl-5 pr-5 lg:pl-24 lg:pr-24">
                <IconStrip />
                <h1 className="font-bold text-5xl pb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">How is this roadmap different?</h1>
                <p className="max-w-2xl mx-auto text-center text-lg font-semibold pt-2 pb-6">Unlike the many universities, bootcamps, & roadmaps out there, not only will you learn how to code, but will do so by building applicable projects for job applications, learning how code works behind the scenes, & truly understand how to be a modern day programmer.</p>
                
                <DialogCloseButton />
            </div>
            
            

            <div className="text-center pl-5 pr-5 pt-5">
                <div className="flex items-center justify-center text-6xl">
                    <GiRoad />
                </div>
                <h1 className="pb-5 pt-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">The Roadmap...</h1>
                {/* Map through & add symbols*/}
                <div className="space-y-2 max-w-2xl mx-auto animated-border-and-shadow p-5">
                    {roadmap.map((item) => (
                        <div key={item.number} className="bg-transparent mx-auto px-4 text-lg ">
                            <div className="text-xl font-bold"></div>
                            <p className="text-3xl flex items-center justify-center">
                                {item.symbol}
                            </p>
                            <h2 className="text-2xl font-semibold mt-2 mb-4"><span className="text-4xl text-gray-400">{item.number}</span> {item.title}</h2>
                            
                            <p className="pb-8">{item.text}</p>
                        </div>
                    ))}
                 </div>
            </div>

            <div>
                <p className="text-gray-400">Questions & Answers</p>

            </div>

        </div>
    )
}