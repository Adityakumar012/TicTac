import React from 'react'
import StarBorder from './StarBorder';
import '../styles/style.css'
const History = ({history,backtrack}) => {
  return (
    <div className='history'>
        {
            history.map((a,index)=>(
                <StarBorder as="button"
                    className="custom-class"
                    color="magenta"
                    thickness="1"
                    speed="5s"
                    key = {Math.random()} onClick={()=>{backtrack(index)}}>go to move {index}</StarBorder>
                // <button key = {Math.random()} onClick={()=>{backtrack(index)}}>go to move {index}</button>
            ))
        }
    </div>
  )
}

export default History