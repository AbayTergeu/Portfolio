import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboard, faCode } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return ( 
        <header> 
            <ul className="shadow" id="menu">
                <li><Link rel="nofollow" to="about" spy={true} smooth={true}><FontAwesomeIcon icon={faUser} /> Обо мне</Link></li>  
                <li><Link rel="nofollow" to="projects" spy={true} smooth={true}><FontAwesomeIcon icon={faCode} /> Операции</Link></li>
                <li><Link rel="nofollow" to="skills" spy={true} smooth={true}><FontAwesomeIcon icon={faClipboard} /> Достижения</Link></li>
            </ul>
        </header> 
    )
}

export default NavBar;