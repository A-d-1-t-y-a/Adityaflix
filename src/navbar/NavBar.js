import { Link } from "react-router-dom"

export default function NavBar() {
  return (

    <header className='flex w-full text-white shadow-[0_35px_60px_15px_red]'>

          <div className='flex-1 w-full bg-black flex items-center'>
              <div className='mx-4 p-2 text-4xl'>Aflix</div>
          </div>

          <div className='flex text-xl bg-black'>

            <button className='px-5 flex items-center text-center bg-black shadow-inner hover:bg-red-500 transistion duration-300 delay-75 py-2 mx-1'><Link to="/">Home</Link></button>
            <button className='px-5 flex items-center text-center bg-black shadow-inner hover:bg-red-500 transistion duration-300 delay-75 py-2 mx-1'><Link to="/Apresenting">A presenting</Link></button>
            <button className='px-5 flex items-center text-center bg-black shadow-inner hover:bg-red-500 transistion duration-300 delay-75 py-2 mx-1'><Link to="/videos">Videos</Link></button>
            <button className='px-5 flex items-center text-center bg-black shadow-inner hover:bg-red-500 transistion duration-300 delay-75 py-2 mx-1'><Link to="/photos">Photos|Memes</Link></button>
            <button className='px-5 flex items-center text-center bg-black shadow-inner hover:bg-red-500 transistion duration-300 delay-75 py-2 mx-1'><Link to="/wishes">Wishes</Link></button>
          
          </div>

    </header>

  )
}
