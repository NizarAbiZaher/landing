import {BiLogoJavascript, BiLogoTypescript, BiLogoNodejs, BiLogoPython, BiLogoReact, BiLogoMongodb } from 'react-icons/bi';

const IconStrip = () => {
    return (
        <div className='overflow-hidden whitespace-nowrap text-2xl '>
            <div className='animate-scroll-strip flex space-x-[70px] text-6xl justify-center items-center pb-3 '>
                <BiLogoJavascript className="text-yellow-400"/>
                
                <BiLogoMongodb className="text-green-400"/>
                
                <BiLogoPython className="text-blue-500"/>
                <BiLogoNodejs className="text-green-400"/>
                <BiLogoReact className="text-blue-300"/>
                <BiLogoTypescript className="text-blue-600"/>
            </div>
        </div>
    )
}

export default IconStrip;