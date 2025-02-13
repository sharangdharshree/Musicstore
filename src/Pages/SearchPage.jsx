import {useEffect,useState} from "react";
import { Player } from "../Components/Player";
import {Search} from "../Components/Search"
import{Songs} from "../Components/Songs"
import { getSongs } from "../services/api-client";
export const SearchPage=()=>{
   const [allSongs,setSongs]=useState([]);
   //Component Life Cycle
   const[flag,setFlag]=useState(false);
   
   const[song,setPlayerSong]=useState(null);
   const loadSongs=async()=>{
      setSongs(await getSongs('Latest'));
   }
   useEffect(()=>{
      loadSongs();
   },[])
   const togglePlayer=(flag,songarg)=>{
      setPlayerSong(songarg);
      setFlag(flag);
   }
   const getArtistName=async(artistName)=>{
      console.log('Rec Artist name',artistName);
      setSongs(await getSongs(artistName));
   }
   const jsx=<>
    <Search fn={getArtistName}/>
      <Songs fn={togglePlayer}allSongs={allSongs}/>
   </>
   return(
   <div className="container">
      <h1 className="alert alert-info text-center">Music Store</h1>
      
      {flag?<Player fn={togglePlayer} song={song}/>:jsx}
     
   </div>);
   
}