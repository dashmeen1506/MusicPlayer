import React,{useState,useEffect,useRef} from 'react';
import Details from './details';
import Control from './control';
import 'bootstrap/dist/css/bootstrap.css';

function Player(props)
{
    const audioRef = useRef(null);
    const [IsPlaying, setIsPlaying] = useState(false);
    useEffect(()=>{
        if(IsPlaying)
        {
            audioRef.current.play();
        }
        else
        {
            audioRef.current.pause();
        }
    })
    const nextSong = ()=>{
        props.setCurrentSongIndex(()=>{
            let index=props.currentSongIndex;
            index++;
            if(index > props.songs.length - 1)
                index = 0;
            return index;
        });
    }
    const prevSong = ()=>{
        props.setCurrentSongIndex(()=>{
            let index = props.currentSongIndex;
            index--;
            if(index<0)
                index = props.songs.length - 1;
            return index;
        })
    }
    return(
        <div className="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioRef}></audio>
            <h4>Playing now</h4>
            <Details songs={props.songs[props.currentSongIndex]} />
            <Control 
                isPlaying={IsPlaying} 
                setIsPlaying={setIsPlaying}
                nextSong={nextSong}
                prevSong={prevSong}
            />
            
            <p>Next Song : <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}
export default Player;