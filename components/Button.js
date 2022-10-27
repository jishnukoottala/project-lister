import React from 'react'
import Link from "next/link";


export default function Button({ children, onClick, asLink = false , href }) {

    if(asLink){
        return (
            <Link href={href} className="hover:shadow-form hover:bg-[#0088d3] rounded-md bg-[#0067a0] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                {children}
            </Link>
        )
    }
  return (
    <button
    type="button"
    onClick={onClick}
      className="hover:shadow-form hover:bg-[#0088d3] rounded-md bg-[#0067a0] py-3 px-8 text-center text-base font-semibold text-white outline-none w-full"
    >
      {children}
    </button>
  )
}
