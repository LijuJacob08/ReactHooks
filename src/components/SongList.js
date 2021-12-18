import React ,{useState} from 'react';
import  { v4 as uuidv4 }  from 'uuid';
import NewSongForm from './NewSongForm';

const Songlist = () => {
    const [songs,setSongs]=useState([
        {title:'Almost Home',id:1},
        {title:'Memory gospel',id:2},
        {title:'this while darkness',id:3},

    ]);
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
        </div>
     );
}
 
export default Songlist;