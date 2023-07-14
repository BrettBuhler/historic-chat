import './CharacterSelect.css'
import { characters } from '../../services/characterArray'

const CharacterSelect = () => {
    return (
        <div>
            <h1>HELLO</h1>
            {characters.map(character => (
                <div className='character-card-container'>
                    <div className='character-card' style={{backgroundImage: `url(${character.image})`}}>              
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CharacterSelect