import React from 'react';
import ReactDOM from 'react-dom';


function Card(props)
{
 
return(
    <>
<div className="card">
    <div className="boximg">
        <img src={props.image} id="imgslide" alt="avengers"/>
    </div>
    <div className="title">
        <strong>{props.name}</strong>
    </div>
</div> 

</>
)

}

export default Card;