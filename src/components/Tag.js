import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {

  // const [gif , setGif] = useState("");
  // const [loading , setLoading] = useState("false")
  const [tag , setTag] = useState("");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setLoading(false);
  //   setGif(imageSource);
  // }

  // useEffect( () => {
  //   fetchData();
  // },[])

  const {gif , loading , fetchData} = useGif(tag);

  function clickHandler() {
    fetchData(tag)
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 bg-blue-500 rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gif' width="450"/>)
      }

      <input
        className='w-10/12 text-lg py-2 rounded-lg text-center'
        onChange={changeHandler}
        value = {tag}/>

      <button 
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'
      onClick={clickHandler}> 
        Generate
      </button>
    </div>
  )
}

export default Tag