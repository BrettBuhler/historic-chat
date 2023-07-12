import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element = {<h1>HELLO</h1>}/>
                <Route path='/chat' element = {<h1>HELLO CHAT</h1>}/>
            </Routes>
        </div>
    )
}

export default App