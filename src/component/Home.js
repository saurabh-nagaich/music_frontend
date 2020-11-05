import React from 'react'
import FirstScreen from './fisrtScreen/FirstScreen'

function Home() {
    return (
        <div>
            {/* if user is not logged in  */}
            <FirstScreen />
        </div>
    )
}

export default Home
