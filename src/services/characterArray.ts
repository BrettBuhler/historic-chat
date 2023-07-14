import { Character } from "./character"
import al from '../images/al.jpg'
import lv from '../images/lv.jpg'
import ae from '../images/ae.jpg'
import qc from '../images/qc.jpg'
import nm from '../images/nm.jpg'
import mg from '../images/mg.jpg'

export const characters: Character[] = [
    new Character ('Abraham Lincoln', al),
    new Character ('Leonardo da Vinci', lv),
    new Character ('Albert Einstein', ae),
    new Character ('Cleopatra', qc),
    new Character ('Nelson Mandela', nm),
    new Character ('Mahatma Gandhi', mg)
]