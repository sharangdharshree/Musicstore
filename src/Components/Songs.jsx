import {Song} from "./Song"
export const Songs=({fn,allSongs})=>{
    //map(JS)
    //allSongs(data)--> convert-->JSX
    return(
        <>
         {allSongs.map((currentSong,index)=><Song fn={fn} key={index}song={currentSong}/>)}
    </>)
}