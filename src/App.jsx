import React from 'react';
import { useState } from 'react';
import  './styles/style.css';
import History from './components/History';
import DarkVeil from './components/DarkVeil';
import { useEffect } from "react";
import Grid from './components/Grid';
const App = () => {
	const [val ,setVal]=useState(Array(9).fill(null)); 
	const [winner ,setwinner]=useState(0);
	const [curr ,setCurr]=useState(0);
	const [history,setHistory]=useState([val]);
	let turn =curr%2;
	const decideWinner=(val1)=>{
		let x=0;
		for(let i=0;i<3;i++){
			if(val1[i]===val1[i+3]&&val1[i+3]===val1[i+6]){
				if(val1[i]==='O'){
					x=1;
				}
				else if(val1[i]==='X'){
					x=2;
				}
			}
		}
		for(let i=0;i<9;i+=3){
			if(val1[i]===val1[i+1]&&val1[i+1]===val1[i+2]){
				if(val1[i]==='O'){
					x=1;
				}
				else if(val1[i]==='X'){
					x=2;
				}
			}
		}
		if(val1[0]===val1[4]&&val1[4]===val1[8]){
			if(val1[4]==='O'){
				x=1;
			}
			else if(val1[4]==='X'){
				x=2;
			}
		}
		if(val1[2]===val1[4]&&val1[4]===val1[6]){
			if(val1[4]==='O'){
				x=1;
			}
			else if(val1[4]==='X'){
				x=2;
			}
		}
		setwinner(x);
	}
	const updateHistory=(v)=>{
		setHistory([...history,v])
	}
	const clickhandle=(index)=>{
		if(val[index]!==null||winner!=0)return;
		let char='';
		turn =curr%2;
		if(turn ==1){
			char='X';
		}else{
			char='O';
		}
		let v=val.map((values,ind)=>{
			if(index==ind){
				return char;
			}else{
				return values;
			}
		})
		setVal(val.map((values,ind)=>{
			if(index==ind){
				return char;
			}else{
				return values;
			}
		}))
		setCurr(curr+1);
		updateHistory(v)
		decideWinner(v);
	}
	const backtrack=(index)=>{
		setCurr(index)
		setVal(history[index]);
		turn=index%2;
		decideWinner(history[index]);
		setHistory(history.filter((e, ind)=>ind<=index))
	}
	useEffect(() => {
  	const favicon = document.querySelector("link[rel='icon']");
		favicon.href = "./public/icon.png";
	}, []);
	return (
		<>	

			<div className='body'>
				<DarkVeil className='background'/>
				<div className='content no-select'>
					<div className='heading'>
						<h1>{turn==1?"X":"O"}'s Turn</h1>
						<h1>{winner==1?"O Won 🥳":(winner==2?"X Won 🥳":"Result:🧐")}</h1>
					</div>
					<div><Grid val={val} clickhandle={(i)=>clickhandle(i)}/></div>
					<History history={history} backtrack={(index)=>backtrack(index)} curr={curr} />
				</div>
			</div>
		</>
	)
}

export default App