import React ,{useState,useEffect} from 'react';
import  { v4 as uuidv4 }  from 'uuid';
import NewSongForm from './NewSongForm';

const Songlist = () => {
    const [songs,setSongs]=useState([
        {title:'Almost Home',id:1},
        {title:'Memory gospel',id:2},
        {title:'this while darkness',id:3},

    ]);
    const [age,setAge] =useState(20);
    useEffect(()=>{
        console.log("useEffect hook ran",songs);
    },[songs]);
    useEffect(()=>{
        console.log("useEffect hook ran",age);
    },[age]);
    const addSong=(title)=>{
        setSongs([...songs,{title, id :uuidv4()}]);   }
    return ( 
        <div className="song-list">
            <ul>
          {songs.map(song=>{
              return (
                  <li key={song.id} >{song.title}</li>
              )
          }     )}     
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>setAge(age +1)}>Add 1 to age:{age}</button>
        </div>
     );
}
 
export default Songlist;