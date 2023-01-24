import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { logo } from './assets'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <header className='w-full flex justify-between items-center bg-white px-4 sm:px-8 py-4 border-b border-b-[#e6ebf4]'>
                <Link to='/'>
                    <img src={logo} className='w-28 object-contain' />
                </Link>

                <Link to='/create-post' className='px-4 py-2 text-white font-inter font-semibold bg-[#6469ff] rounded-md'>
                    Create
                </Link>
            </header>

            <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-post' element={<CreatePost />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
