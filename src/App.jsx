import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Lavender")

  return (
  
    <div className='w-full h-screen'
      style={{backgroundColor:color}} 
      >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

     <button onClick={()=>setColor("red")}className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"red"}}>Red</button>

     <button onClick={()=>setColor("pink")} className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"pink"}}>Pink</button>

     <button onClick={()=>setColor("orange")} className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"orange"}}>Orange</button>

     <button onClick={()=>setColor("blue")} className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"blue"}}>Blue</button>

     <button  onClick={()=>setColor("yellow")} className='outline-none py-1 px-4 rounded-2xl text-black shadow-xl ' style={{backgroundColor:"yellow"}}>Yellow</button>

     <button onClick={()=>setColor("purple")} className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"purple"}}>Purple</button>

     <button button onClick={()=>setColor("white")}className='outline-none py-1 px-4 rounded-2xl text-black shadow-xl ' style={{backgroundColor:"white"}}>White</button>

     <button onClick={()=>setColor("black")} className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"Black"}}>Black</button>

     <button onClick={()=>setColor("gray")} className='outline-none py-1 px-4 rounded-2xl text-white shadow-xl ' style={{backgroundColor:"gray"}}>Gray</button>

     <button onClick={()=>setColor("lavender")} className='outline-none py-1 px-4 rounded-2xl text-black shadow-xl ' style={{backgroundColor:"lavender"}}>Lavender</button>
      </div>
      </div>
    </div>
    
  )
}

export default App



