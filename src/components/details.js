import React from 'react';

function Details(props)
{
    return(
        <div className="details">
            <div>
                <img src={props.songs.img_src } alt="" />   
            </div>
            <h3 className="font-weight-normal mt-4">{props.songs.title}</h3>
            <p>{props.songs.artist}</p>
        </div>
    )
}
export default Details;