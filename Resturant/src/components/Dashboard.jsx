import React from 'react'
import {Link} from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
     <div>
        <div>Halwo <span>Hotel</span></div>
        <div>
            <nav>
                <ul className='gap-14  text-center justify-between'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Menu</Link>
                    <Link>Juce</Link>
                    <Link>Contact</Link>
                </ul>
            </nav>
        </div>
     </div>
    </>
  )
}

export default Dashboard