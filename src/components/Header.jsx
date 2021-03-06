import Image from 'next/image'
import { SearchIcon, MenuIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from "next-auth/react"
import {useRouter} from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)
    return (
        <header className="sticky top-0 z-50">

            {/*Top Nav*/}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={() => router.push('/')} 
                    src="https://links.papareact.com/f90"
                    alt="logo"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>
                {/*Search*/}
                
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer
                  bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="w-6 flex-grow h-full p-2 outline-none flex-shrink rounded-l-md focus:outline-none"/>
                    <SearchIcon className="h-12 p-4"/>
                </div>

                {/*Right*/}
                <div className="flex items-center text-white text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="link">
                    <p>{session ? `Hello, ${session.user.name}`: "SignIn"}</p>
                    <p className="font-extrabold md:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div onClick={() => router.push('/checkout')} className="relative link flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                    <ShoppingCartIcon className="hidden md:inline  h-10"/>
                    <p className="font-extrabold md:text-sm mt-2">Basket</p>
                </div>
                </div>
            </div>

             {/*Bottom Nav*/}
            <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Bisiness</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden xl:inline-flex">Electronics</p>
                <p className="link hidden xl:inline-flex">Food & Groceries</p>
                <p className="link hidden xl:inline-flex">Prime</p>
                <p className="link hidden xl:inline-flex">Buy again</p>
                <p className="link hidden xl:inline-flex">Shopper Toolkit</p>
                <p className="link hidden xl:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
