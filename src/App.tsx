import { Routes, Route } from 'react-router-dom'
import CharacterSelect from './components/CharacterSelect/CharacterSelect'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element = {<CharacterSelect />}/>
                <Route path='/chat' element = {<h1>HELLO CHAT</h1>}/>
            </Routes>
        </div>
    )
}

export default App