// import React from 'react';
// import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

// const Card = (props) => {

//     let review = props.review;

//     return (
//         <div className='flex flex-col md:relative rounded-md'>
            
//             <div className="absolute top-[-7rem] z-[10] mx-auto">
//                 <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" alt="" src={review.image}/>
//                 <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] -z-[20]'></div>
//             </div>

//             <div className='text-center mt-7'>
//                 <p className="text-2xl tracking-wider font-bold capitalize">{review.name}</p>
//                 <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
//             </div>

//             <div className='mx-auto mt-5'>
//                 <FaQuoteLeft className='text-violet-400'/>
//             </div>

//             <div className='text-center mt-4 text-slate-500'>
//                 {review.text}
//             </div>

//             <div className='mx-auto mt-5'>
//                 <FaQuoteRight className='text-violet-400'/>
//             </div>
            
//         </div>
//     )
// }

// export default Card


import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Card = (props) => {

  let review = props.review;

  return (
    <div className='flex flex-col md:relative rounded-md'>
      
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" alt="" src={review.image}/>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] -z-[20]'></div>
      </div>
      
      <div className='text-center mt-7'>
                <p className="text-2xl tracking-wider font-bold capitalize">{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='mx-auto mt-5'>
          <FaQuoteLeft className='text-violet-400'/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
          {review.text}
      </div>

      <div className='mx-auto mt-5'>
          <FaQuoteRight className='text-violet-400'/>
      </div>

    </div>
  )
}

export default Card
