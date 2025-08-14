import React from 'react'
import StarBorder from './StarBorder';
import '../styles/style.css'
const History = ({history,backtrack,curr}) => {
  let list=[];
  for(let i=0;i<curr;i++){
    list.push(<StarBorder as="button"
                    className="custom-class"
                    color="magenta"
                    thickness="1"
                    speed="5s"
                    key = {i} onClick={()=>{backtrack(i)}}>go to move {i}</StarBorder>);
  }
  return (
    <div className='history'>{list}</div>
  )
}

export default History