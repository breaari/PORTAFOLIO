import 'boxicons'

export const Expertise = ()=>{
    return (
        <div id="expertise" className="z-0 bg-azuloscuro h-auto w-full text-celesteclaro  flex flex-col px-12">
           <a className="font-bold text-[30px] flex items-center justify-center py-10">Expertise en Tecnología</a>
           <div className='flex flex-row justify-around '>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon name='javascript' type='logo' size='150px' color='#A4B9E4'></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>Javascript</a>
                </div>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon type='logo' name='html5' size='150px' color='#A4B9E4'></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>HTML</a>
                </div>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon name='css3' type='logo' size='150px' color='#A4B9E4' ></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>CSS</a>
                </div>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon type='logo' name='react' size='150px' color='#A4B9E4'></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>React</a>
                </div>
            </div>
            <div className='flex flex-row justify-around py-12'>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon name='nodejs' type='logo' size='150px' color='#A4B9E4' ></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>Node.js</a>
                </div>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon name='postgresql' type='logo' size='150px' color='#A4B9E4'></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>PostgreSQL</a>
                </div>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon name='tailwind-css' type='logo'size='150px' color='#A4B9E4' ></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>Tailwind CSS</a>
                </div>
                <div className='flex flex-col bg-[#00000080] p-2 rounded-[20px] shadow-md transition duration-300 hover:scale-110'>
                    <box-icon type='logo' name='redux' size='150px' color='#A4B9E4'></box-icon>
                    <a className='font-semibold flex items-center justify-center py-2'>Redux</a>
                </div>
            </div>
        </div>
    )
}