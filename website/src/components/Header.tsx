import logo from './../assets/pae.png';
import menu from './../assets/menu.png';
import close from './../assets/close.png';
import githubLogo from './../assets/github.png';
import { useState } from 'react';



function NavBar(){

    const [open,toggleopen] = useState(false);

    function toggleMenu(){
        const menu = document.querySelector('#menu')
        const close = document.querySelector('#close-btn')
        const openbtn = document.querySelector('#open-btn')
        if(!open){
            menu?.classList.remove('hidden');
            close?.classList.remove('hidden');
            openbtn?.classList.add('hidden');
            toggleopen(true);
        }
        else{
            menu?.classList.add('hidden');
            close?.classList.add('hidden');
            openbtn?.classList.remove('hidden');
            toggleopen(false)
        }
    }
    

    return(
        <nav className='flex flex-row gap-4 justify-between align-baseline'>
            <a className='hidden md:block' href="/">Home</a>
            <a className='hidden md:block' href="/emoji">Emojis</a>
            <a className='hidden md:block' href="/pixilart">Pixilart Emojis</a>
            <button onClick={toggleMenu}>
                <img src={menu} alt="menu"  className='w-8 h-8  md:hidden' id='open-btn' />
                <img src={close} alt="menu"  className='w-6 h-6 hidden md:hidden' id='close-btn'/>
            </button>
            <button>
            </button>
            <div className="hidden absolute top-20 right-10 bg-grey p-3" id='menu'>
                <div className="flex flex-col">
                    <a className='' href="/">Home</a>
                    <a className='' href="/emoji">Emojis</a>
                    <a className='' href="/pixilart">Pixilart Emojis</a>
                </div>
            </div>
        </nav>
    )
}


function Header(){


    return(
        <header className="flex flex-row bg-gold align-baseline p-2 justify-between">
            <a href="/">
                <div className="flex flex-row align-baseline gap-2 ">
                    <img src={logo} alt="heading image" className='w-32'/>
                    
                </div>
            </a>
            <div className="flex flex-row gap-4">
                <NavBar/>
                <a href="https://github.com/iamBijoyKar/emojis-pixel-art">
                    <img src={githubLogo} alt="github" className='w-12' />
                </a>
            </div>
        </header>
    )
}
export default Header;