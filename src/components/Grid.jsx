import React from 'react'
import '../styles/style.css';
const Grid = ({val,clickhandle}) => {
    return (
        <div className='grid'>
            {val.map((v,index)=>(
                <div className='box' key = {Math.random()} onClick={()=>{clickhandle(index)}}>{v}</div>
            ))}
        </div>
    )
}
export default Grid