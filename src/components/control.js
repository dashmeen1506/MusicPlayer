import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'

function Control(props)
{
    return(
        <div className="playerControl">
            <button className="button button1 btn-lg" onClick={()=>props.prevSong()}>
                <FontAwesomeIcon icon={faStepBackward}></FontAwesomeIcon>
            </button>
            <button className="button button2 btn-lg" onClick={()=>props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying?faPause:faPlay}></FontAwesomeIcon>
            </button>
            <button className="button button3 btn-lg" onClick={()=>props.nextSong()}>
                <FontAwesomeIcon icon={faStepForward}></FontAwesomeIcon>
            </button>
        </div>
    )
}
export default Control;