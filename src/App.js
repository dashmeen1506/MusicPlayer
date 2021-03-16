import React,{useState,useEffect} from 'react';
import Player from './components/player';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [songs] = useState([
    {
      title: "Closer",
      artist: "The Chainsmokers ft.Hasley",
      img_src: "./images/song-1.png", 
      src: "./music/Closer.mp3",
    },
    {
      title: "Not Afraid",
      artist: "Eminem",
      img_src: "./images/song-2.jpg", 
      src: "./music/not_afraid.mp3"
    },
    {
      title: "Rockstar",
      artist: "Post Malone Parody",
      img_src: "./images/song-3.jpg", 
      src: "./music/Rockstar.mp3"
    },
    {
      title: "Na Ja",
      artist: "Pav Dharia",
      img_src: "./images/song-4.jpg", 
      src: "./music/naja.mp3"
    },
    {
      title: "ROXANNE",
      artist: "Arizona Zervas",
      img_src: "./images/song-5.jpg", 
      src: "./music/ROXANNE.mp3"
    },
  ]);

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