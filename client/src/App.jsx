import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { handleTheme } from './utils'
import { logo, logoInverted } from './assets'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    const handleThemeChange = () => {
        handleTheme(darkMode)
        setDarkMode(!darkMode)

    }

    return (
        <BrowserRouter>
            <header className='main-header w-full flex justify-between items-center px-4 sm:px-8 py-4 border-b'>
                <Link to='/'>
                    <img src={logoInverted} id="logo" className='w-28 object-contain' />
                </Link>
                <div className='flex gap-4 max-h-[40px] items-center'>
                    <button data-mode="light" className="theme-button flex items-center justify-center p-2 rounded-full" onClick={handleThemeChange}>
                        {darkMode ? 
                        <img id="theme-light" className="object-cover h-[1.5em]" src="/light.png"/>
                        :
                        <img id="theme-dark" className="object-cover h-[1.5em]" src="/dark.png"/>
                        }
                    </button>

                    <Link to='/create-post' className='px-4 py-2 text-white font-inter font-semibold bg-[#6469ff] rounded-md'>
                        Create
                    </Link>
                </div>
            </header>

            <main className='main-body sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-post' element={<CreatePost />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default App
