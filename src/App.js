import React,{useState,useEffect} from 'react';
import Player from './components/player';
import 'bootstrap/dist/css/bootstrap.css';
import songs from './songs/song_list'

function App() {

  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex,setNextSongIndex]=useState(0);
  
  useEffect(()=>{
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="container text-center w-25 text-white">
      <Player songs={songs} 
      currentSongIndex={currentSongIndex} 
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex= {nextSongIndex}
       />
    </div>
  );
}

export default App;