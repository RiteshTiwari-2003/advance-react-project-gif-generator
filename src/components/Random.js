import React,{useState} from 'react'

const Random = () => {
    const [gif,setGif]=useState('');
    function clickHandler(){

    }
  return (
    <div classname="w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center">
      <h1>Random Gif</h1>
      <img src={gif} width="450"/>
      <button onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
