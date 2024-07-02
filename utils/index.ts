import { subhumans, t1Players, t2Players, t3Players, t4Players, t5Players } from "@/constants"

export function getUser(username:string, region:string, rank?:string, tier?:string, reason?:string){
    return {username, region, rank, tier, reason}
}

export function getAllUsers(){
    const allPlayers = [...t1Players, ...t2Players, ...t3Players, ...t4Players, ...t5Players, ...subhumans];
    return allPlayers
}