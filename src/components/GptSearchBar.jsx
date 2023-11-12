import React, { useRef } from 'react'
import lang from '../../utils/LanguageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const changeLang = useSelector((store) => store.config.lang)
  const searchText = useRef(null)
  const handlerGptSearchClick = () => {
    console.log(searchText.current.value);
  }
  return (
      <div className=' pt-[10%] flex justify-center'>
      <from className="w-1/2 bg-black grid grid-cols-12 "
         onSubmit={(e)=>e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
                  className=' p-4 m-4  col-span-9'
                  placeholder={lang[changeLang].gptSearchPlaceHolder}
              />
        <button className='col-span-3 bg-red-700 text-white text-2xl py-2 px-4 m-4 rounded-lg'
          onClick={ handlerGptSearchClick}>
                {lang[changeLang].search}
              </button>
          </from>
    </div>
  )
}

export default GptSearchBar;