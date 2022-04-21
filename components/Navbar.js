import Link from "next/link"
import Image from "next/image"

const Navbar = ()=>{
    return (
        <nav>
            <div className="flex justify-between border-b border-gray-200 mb-20">
                <div className="mt-4">
                <Image src="/Orx.svg" className="cursor-pointer" width={120} height={60} />
                </div>
                <div className=" flex justify-around w-64 text-lg items-end mb-2">
                <Link href='/'><a className="">Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/movs'><a>Mov Listing</a></Link>    
                </div>
            </div> 
        </nav>
    )
}
export default Navbar
