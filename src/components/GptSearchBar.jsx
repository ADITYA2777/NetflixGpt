import React from 'react'
import lang from '../../utils/LanguageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const changeLang = useSelector((store)=>store.config.lang)
  return (
      <div className=' pt-[10%] flex justify-center'>
          <from className="w-1/2 bg-black grid grid-cols-12 ">
              <input type="text"
                  className=' p-4 m-4 text-white col-span-9'
                  placeholder={lang[changeLang].gptSearchPlaceHolder}
              />
              <button className='col-span-3 bg-red-700 text-white text-2xl py-2 px-4 m-4 rounded-lg '>
                {lang[changeLang].search}
              </button>
          </from>
    </div>
  )
}

export default GptSearchBar;