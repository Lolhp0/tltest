"use client"

import { getUser } from '@/utils'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useSkin } from '@/hooks/useSkin'; // Adjust the import path based on your project structure

const Player = ({ username, region, rank, tier, reason, setView }: any) => {
    const skinUrl = useSkin(username);

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-black/80 fixed top-0 left-0 right-0 bottom-0 z-[99999]' onClick={() => setView(false)}>
            <div className='w-[320px] h-fit rounded-lg bg-[#1b1c26] md:w-[400px] lg:scale-[1.5]' onClick={(e) => e.stopPropagation()}>
                <div className='w-full h-[80px] bg-[#171720] rounded-tr-lg rounded-tl-lg p-4 md:h-[100px]'>
                    <div className='w-[132px] h-[132px] p-4 bg-[#13131b] rounded-full relative overflow-hidden flex items-center justify-center md:w-[160px] md:h-[160px]'>
                        {skinUrl ? (
                            <>
                                <a href={`https://namemc.com/profile/${username}`} target='_blank'>
                                    <span className='text-[12px]'>Responding...</span>
                                    <Image src={skinUrl} width={120} height={120} priority alt={`${username}'s Minecraft Skin`} className='absolute top-1 left-2 z-[50] md:hidden'/>
                                    <Image src={skinUrl} width={140} height={140} priority alt={`${username}'s Minecraft Skin`} className='absolute top-1 left-2 z-[50] hidden md:block'/>
                                </a>
                            </>
                        ) : (
                            <div className='w-fit' role='status'>
                                <div className='w-8 h-8 border-4 border-slate-500 border-t-transparent rounded-full animate-spin'></div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-full h-fit p-2 text-right relative md:mb-4'>
                    <div className='z-[100] absolute -top-3 right-0 bg-[#171720] rounded-lg px-1 md:rounded-xl'>
                        <strong className='text-xl px-[0.1rem] md:px-[0.33rem] md:text-2xl'>{username}</strong>
                    </div>
                </div>
                <div className='w-full h-fit p-2 text-right'>
                    <strong className='text-xl'>Region: {
                        <span style={{ color: `${region === "eu" ? "#a6e3a1" : region === "na" ? "#e78284" : region === "as" ? "#ca9ee6" : region === "sa" ? "#fc9656" : region === "me" ? "#e5c890" : region === "af" ? "#9c6ad9" : region === "au" ? "#ef9f76" : ""}` }}>
                            {region.toUpperCase()}
                        </span>
                    }</strong>
                </div>
                <div className='w-full h-fit p-2 text-right'>
                    {
                        rank ? (
                            <strong className="text-xl">
                                {
                                    tier ? (
                                        <>
                                                                                    Tier: 
                                        <span className={`${tier.toLowerCase() === "Tier 1".toLowerCase() ? "text-[#e5c890]" : tier.toLowerCase() === "Tier 2".toLowerCase() ? "text-[#babbf1]" : tier.toLowerCase() === "Tier 3".toLowerCase() ? "text-[#ef9f76]" : tier.toLowerCase() === "Tier 4".toLowerCase() ? "text-[#949cbb]" : "text-[#737994]"}`}>
                                            {rank === "H" ? " High" : " Low"} {tier}
                                        </span>
                                        </>
                                    )  : (
                                        <div className='PROFILE_ERROR'>
                                            <h3 className='PROFILE_ERROR_CONTENT'>Unable to load data.</h3>
                                        </div>
                                    )
                                }
                            </strong>
                        ) : (
                            <>
                                <p className='text-xl'><strong>Tier</strong>: Cheater</p>
                                <strong className='text-xl'>Reason: {reason}</strong>
                            </>
                        )
                    }
                </div>

                <p className='p-2 text-right'>Visit On <a href={`https://namemc.com/profile/${username}`} target='_blank' className='underline font-extrabold'>NameMC</a></p>

                <button className='w-[96%] h-[32px] bg-slate-500 text-slate-200 my-5 mx-[0.35rem] rounded-xl md:w-[97%]' onClick={() => setView(false)}>Close Profile</button>
            </div>
        </div>
    )
}

export default Player;
