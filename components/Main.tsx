"use client"

import React, { use } from 'react'
import TierColumn from './TierColumn'
import TierColumnHeader from './TierColumnHeader'
import { subhumans, t1Players, t2Players, t3Players, t4Players, t5Players } from '@/constants'
import PlayerBox from './PlayerBox'
import Link from 'next/link'
import { getUser } from '@/utils'
import { useState } from 'react'
import Player from './Player'

interface Main {
    profile: {
        username: string;
        region: string;
        rank: string;
        tier: string;
        reason: string;
    };
    setProfile: (a: any) => void;   
    view: boolean;
    setView: (a: boolean) => void;
}

const Main = ({profile, setProfile, view, setView}: Main) => {

  return (
    <div className='__columns__'>
        <TierColumn>
            <TierColumnHeader title="Tier 1" containerStyles='text-[#e5c890] hover:border-2 hover:border-[#e5c890] hover:bg-[#1e222c]'/>
            <div className='mt-[5rem] max-md:mt-[2rem]'>
            {
                t1Players.map((player, index) => (
                    <div onClick={() => {
                        setProfile({username: player.name, region: player.region, tier: "tier 1", rank: player.rank});
                        setView(true);
                        
                    }}>
                        <PlayerBox name={player.name} rank={player.rank} region={player.region} key={`${index} - ${player.name}`}/>
                    </div>
                ))
            }
            </div>
        </TierColumn>
        {/*  */}
        <TierColumn>
            <TierColumnHeader title="Tier 2" containerStyles='text-[#babbf1] hover:border-2 hover:border-[#babbf1] hover:bg-[#1e222c]'/>
            <div className='mt-[5rem] max-md:mt-[2rem]'>
            {
                t2Players.map((player, index) => (
                    <div onClick={() => {
                        setProfile({username: player.name, region: player.region, tier: "tier 2", rank: player.rank});
                        setView(true);
                    }}>
                        <PlayerBox name={player.name} rank={player.rank} region={player.region}  key={`${index} - ${player.name}`}/>
                    </div>
                ))
            }
            </div>
        </TierColumn>
        {/*  */}
        <TierColumn>
            <TierColumnHeader title="Tier 3" containerStyles='text-[#ef9f76] hover:border-2 hover:border-[#ef9f76] hover:bg-[#1e222c]'/>
            <div className='mt-[5rem] max-md:mt-[2rem]'>
            {
                t3Players.map((player, index) => (
                    <div onClick={() => {
                        setProfile({username: player.name, region: player.region, tier: "Tier 3", rank: player.rank});
                        setView(true);
                    }}>
                        <PlayerBox name={player.name} rank={player.rank} region={player.region} key={`${index} - ${player.name}`}/>
                    </div>
                ))
            }
            </div>
        </TierColumn>
        {/*  */}
        <TierColumn>
            <TierColumnHeader title="Tier 4" containerStyles='text-[#949cbb] hover:border-2 hover:border-[#949cbb] hover:bg-[#1e222c]'/>
            <div className='mt-[5rem] max-md:mt-[2rem]'>
            {
                t4Players.map((player, index) => (
                    <div onClick={() => {
                        setProfile({username: player.name, region: player.region, tier: "Tier 4", rank: player.rank});
                        setView(true);
                    }}>
                        <PlayerBox name={player.name} rank={player.rank} region={player.region} key={`${index} - ${player.name}`} />
                    </div>
                ))
            }
            </div>
        </TierColumn>
        {/*  */}
        <TierColumn>
            <TierColumnHeader title="Tier 5" containerStyles='text-[#737994] hover:border-2 hover:border-[#737994] hover:bg-[#1e222c]'/>
            <div className='mt-[5rem] max-md:mt-[2rem]'>
            {
                t5Players.map((player, index) => (
                    <div onClick={() => {
                        setProfile({username: player.name, region: player.region, tier: "Tier 5", rank: player.rank});
                        setView(true);
                    }}>
                        <PlayerBox name={player.name} rank={player.rank} region={player.region} key={`${index} - ${player.name}`}/>
                    </div>
                ))
            }
            </div>
        </TierColumn>
        {/*  */}
        {/*  */}
        <TierColumn>
            <TierColumnHeader title="Subhuman" containerStyles='text-white hover:border-2 hover:border-white hover:bg-[#1e222c]'/>
            <div className='mt-[5rem] max-md:mt-[2rem]'>
            {
                subhumans.map(player => (
                    <div onClick={() => {
                        setProfile({username: player.name, region: player.region, reason: player.reason});
                        setView(true);
                    }}>
                        <PlayerBox name={player.name} cheater={player.cheater} reason={player.reason} region={player.region} />
                    </div>
                ))
            }
            </div>
        </TierColumn>
        {
            view ? (
                <Player username={profile.username} region={profile.region} rank={profile.rank} tier={profile.tier} reason={profile.reason} setView={(e: any) => setView(e)}/>
            ) : (
                <></>
            )
        }
    </div>
  )
}
export default Main;
