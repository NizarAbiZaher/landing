
import {BiCodeCurly, BiBoltCircle, BiCodeBlock, BiLogoCodepen, BiCode, BiBarcode} from 'react-icons/bi';

const CodeIcon = () => {
    return (
        <div className='overflow-hidden whitespace-nowrap text-2xl '>
            <div className='animate-scroll-strip flex text-6xl justify-center items-center pb-3 space-x-2 pt-4'>
                <BiCode className="text-primary"/>
                
                <BiCodeBlock className="text-blue-400"/>
                
                <BiBoltCircle className="text-red-500"/>
                <BiLogoCodepen className="text-purple-400"/>
                <BiCodeCurly className="text-yellow-300"/>
                <BiBarcode className="text-gray-600"/>
            </div>
        </div>
    )
}

export default CodeIcon;