import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-lavender w-[1440px]  overflow-hidden shrink-0 flex flex-row items-center justify-between py-2 px-[98px] box-border z-[0]">
    <div className="relative w-[130.18px] h-6">
    <b className="absolute top-[0px] left-[0px] tracking-[0.15px] leading-[24px] inline-block w-[130.18px]">{`Lock & Key`}</b>
    </div>
    <div className="flex flex-row items-center justify-start gap-[48px] text-center text-base font-inter">
      <b className="relative tracking-[0.5px] leading-[24px]" onClick={navigate("/")}>Home</b>
      <div
        className="relative tracking-[0.5px] leading-[24px] cursor-pointer"
      >
        About Us
      </div>
      <div className="relative tracking-[0.5px] leading-[24px]">
        Contact
      </div>
      <div
        className="rounded-31xl bg-darkblue overflow-hidden flex flex-row items-center justify-center py-3 px-5 cursor-pointer text-left text-lavender border-[1px] border-solid border-neutral-10"
      >
        <div className="relative tracking-[0.5px] leading-[24px]" onClick={navigate("/signup")}>
          Sign up
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar