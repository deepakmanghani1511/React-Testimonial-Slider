import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return (
   
   <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
      <Testimonial reviews={reviews}/>
      {/* We can write the entrie code of testimonail instead of writing testimonial component since on clicking button only the index of actual data shifts left and right */}
    </div>

   </div>
  
  )
};

export default App;

// import React from 'react'
// import reviews from './data'; 
// import Testimonial from './components/Testimonial'

// const App = () => {
//   return (

//    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

//     <div className="text-center">
//       <h1 className="text-4xl font-bold">Our Testimonials</h1>
//       <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
//       <Testimonial reviews={reviews}/>
//     </div>

//    </div>
  
//   )
// }

// export default App