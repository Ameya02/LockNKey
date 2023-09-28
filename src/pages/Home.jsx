import React from 'react'
import homeLogo from '../assets/home.svg'

const Home = () => {
  return (
      <div className="absolute top-[0px] left-[0px] w-[1440px] flex flex-col items-center justify-center gap-[128px]">
       
        <div className="relative w-[1157px] h-[521px] z-[1] text-[21px] text-darkslategray-200 font-inter">
          <div className="absolute top-[calc(50%_-_151.5px)] left-[calc(50%_-_578.5px)] w-[629px] h-[302px]">
            <div className="absolute top-[0px] left-[0px] w-[612px] flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative tracking-[0.15px] leading-[22px] font-medium inline-block w-[612px]">
                    Innovate Your Security with
                  </div>
                  <b className="relative text-[60px] tracking-[0.5px] leading-[76px] inline-block font-montserrat w-[612px]">{`Lock And Key: Beyond Passwords `}</b>
                </div>
                <div className="relative text-xl tracking-[0.5px] leading-[32px] inline-block w-[612px]">{`Next-Gen Security: 4-in-1 Authentication for Total Protection. `}</div>
              </div>
              <div className="rounded-31xl bg-darkblue overflow-hidden flex flex-row items-center justify-center py-3 px-5 text-base text-oldlace">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Sign Up
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[636px] w-[521px] h-[521px] object-cover"
            alt="Home"
            src={homeLogo}
          />
        </div>
        <div className="absolute my-0 mx-[!important] top-[101.5px] left-[calc(50%_-_622.5px)] box-border w-[1245px] h-px z-[2] border-t-[1px] border-solid border-gray" />
      </div>
    
  )
}

export default Home