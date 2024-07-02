"use client"

import { Header, Main, Overall } from "@/components";
import { t1Players } from "@/constants";
import { getAllUsers } from "@/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    };

    observer.current = new IntersectionObserver(callback);

    if (lastElement.current) {
      observer.current.observe(lastElement.current);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (observer.current && lastElement.current) {
        observer.current.unobserve(lastElement.current);
      }
    };
  }, []);

  const [profile, setProfile] = useState<any>({
    username: "",
    region: "",
    rank: "",
    tier: "",
    reason: "",
})
const [view, setView] = useState(false);

  const [searchValue, setSearchValue] = useState<string>("");
  

  const searchForPlayer = (value: string) => {
    const user = getAllUsers().find((person) => person.name.toLowerCase() === value.toLowerCase());
    if(user == undefined){
      console.log("no user found by the match: " + `'${value}'`);
    } else {
      // console.log(user)
      console.log("user found! " + user?.name);
      setProfile({
        username: user.name,
        region: user.region,
        rank: user.rank,
      })
      setView(true);
    }
  }

  return (
    <div className="w-[inherit] bg-gradient-to-b from-[#1a1c2c] to-[#2d3047] max-md:w-full">
      <div className="w-[inherit] min-h-dvh m-auto font-nunito">
        <Header value={searchValue} setValue={(arg: string) => setSearchValue(arg)} searchPlayer={(name: string) => searchForPlayer(name)}/>
        {/* <Main profile={profile} setProfile={setProfile} view={view} setView={setView}/> */}
        <Overall profile={profile} setProfile={setProfile} view={view} setView={setView} />

        <div ref={lastElement} className="h-[200px] w-full"></div>
        <div className={`hidden w-24 h-24 fixed bottom-0 left-0 ${isIntersecting ? "!flex" : ""} z-[99999] items-center justify-center`}>
            <a href="#">
              <Image src="/up.png" width={32} height={32} alt="Scroll Up"/>
            </a>
        </div>
      </div>
    </div>
  );
}
