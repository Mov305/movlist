import Link from "next/link"
import { useEffect } from "react"
import {useRouter} from 'next/router'

function NotFound() {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    })
  return (
    <div className=" text-center  text-black">
        <h1 className=" text-3xl font-semibold m-6">Oooops...</h1>
        <h2 className=" text-2xl m-4 font-semibold">That page cannot be found.</h2>
        <p >Go Back to the 
            <Link  href="/"><a className=" text-blue-600 underline ml-2 ">Homepage</a></Link>
        </p>
    </div>
  )
}

export default NotFound