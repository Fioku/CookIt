import Logo from '../assets/images/kitchen-helper.png'
import { CgDarkMode } from "react-icons/cg";
import { PiBowlFoodFill } from "react-icons/pi";

export default function Header(props) {
    function toggleMode() {
        props.setMode((prevMode) => (prevMode === '' ? 'dark' : ''));
    }

    return (
        <header className="sticky top-0 bg-[#fffefc] dark:bg-zinc-800 h-25 w-full flex justify-around items-center gap-30 border-b border-gray-200 dark:border-black/30 z-50">
            <div className='flex items-center gap-3'>                
                <PiBowlFoodFill className='text-5xl dark:text-gray-200 text-black'/>
                <h1 className='font-bold text-xl dark:text-gray-200 text-black select-none'>CookIt</h1>
            </div>
            <button><CgDarkMode className='w-8 h-8 cursor-pointer hover:text-gray-400 dark:text-gray-200 text-black' onClick={toggleMode}/></button>
        </header>
    )
} 