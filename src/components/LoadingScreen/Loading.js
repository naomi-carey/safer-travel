import React from 'react';
import {BeatLoader} from 'react-spinners';
import './Loading.css'

function Loading(){
    return(
        <div className='loading-div'>
            <h1 className='loading-header'>One Moment Please. Finding Your Next Flight</h1>
            <BeatLoader className='loading' size={122} color='green' />

        </div>
    )
}

export default Loading; 


