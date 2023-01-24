import React from 'react'
import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, name, photo, prompt }) => {
    return (
        // <div className='flex flex-col p-3 rounded-md bg-[#6a69ff] gap-2'>
        //     <img src={photo} alt={prompt} />
        //     <h2><span className="font-bold">Author:</span> {name}</h2>
        //     <p className="leading-5"><span className="font-bold truncate">Prompt:</span> {prompt}</p>
        // </div>

        <div className='card rounded-md group relative shadow-card hover:shadow-cardhover bg-[#6a69ff] '>
            <img src={photo} alt={prompt}
                className="w-full h-auto object-cover rounded-md" />
            <div className="text-white group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
                <p className="leading-5 overflow-y-auto prompt">{prompt}</p>

                <div className='mt-3 flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#6469ff] w-7 h-7 object-cover flex justify-center items-center text-white font-bold rounded-full'>{name[0]}</div>
                        <h2>{name}</h2>
                    </div>
                    <div>
                        <button className="w-7 h-7 rounded-full bg-green-500" onClick={() => downloadImage(_id, photo)}><img className="w-full object-cover" src={download} alt="download" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card