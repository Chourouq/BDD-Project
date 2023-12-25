function Navbar() {
    const navElement = [
        {
            name:'Home',
            link:'#home'
        },
        {
            name:'Services',
            link:'#Services'
        },
        {
            name:'About Us',
            link:'#about'
        },
        {
            name:'Contact',
            link:'#Footer'
        },

    ]
    return (
        <div className='fixed top-0 right-0 left-0 shadow-xl bg-white z-[999]'>
            <div className={"flex flex-row  justify-between items items-center p-3"}>
                <div className='flex px-8 py-2 '>
                    <span className='flex items-center text-[#FF6C22]  font-bold'>PARK-<span className='text-black font-medium'>EASY</span></span>
                </div>
                <div className="flex flex-row ">
                    {navElement.map((element,index)=>(
                        <a className='flex flex-row px-8 py-2 text-gray-600 font-bold hover:text-[#FF6C22] duration-150 cursor-pointer'
                           key={index}
                        href={element.link}>
                            {element.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Navbar;