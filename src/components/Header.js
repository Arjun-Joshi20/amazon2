import Image from 'next/image'
import {SearchIcon, MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline'
 
function Header() {
    return (
        <header>
            <div className="flex items-center bg-amazon_blue  p-1 flex-grow py-2">
                {/*Left*/}
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'> 
                    <Image 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                </div>
                {/*Search*/}
                <div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md cursor-pointer'>
                    <input type="text" className="p-2 w-96 flex-grow rounded-l-md outline-none"/>
                    <SearchIcon className='h-12 p-4'/>
                </div>
                {/*Right*/}
                <div> 
                    <div className='text-white flex items-center text-xs space-x-12  cursor-pointer ml-80 ' >
                        <div>
                            <p>Hello Arjun Joshi</p>
                            <p className='font-bold' >Account and Lists</p>
                        </div>
                        <div>
                            <p>Returns &</p>
                            <p className='font-bold'>Orders</p>
                            
                        </div>
                        <div className='relative flex items-center' >
                            <ShoppingCartIcon className='h-10 '/>
                            <p className='hidden md:inline' >Basket</p>
                        </div>
                        <div className='relative link flex items-center'>
                            <span className='absolute top-0 md:right-0 h-4 w-4 bg-yellow-400 rounded-full text-black-500'>0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center bg-amazon_blue-light text-white text-sm' >
                <p className=' mr-5 flex items-center' > 
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>
                <p className=' mr-5'>Prime Video</p>
                <p className='mr-5'>Amazon Business</p>
                <p className='mr-5'>Today's Deals</p>
                <p className='mr-5 hidden lg:inline-flex'>Prime</p>
                <p className='mr-5 hidden lg:inline-flex'>Buy Agaim</p>
                <p className='mr-5 hidden lg:inline-flex'>Shopping Toolkit</p>
                <p className='mr-5 hidden lg:inline-flex'>Shopping Toolkit</p>
                <p className=' mr-5 hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
