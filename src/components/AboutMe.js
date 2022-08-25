import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

function AboutMe() {
    return ( 
        <div id="about">
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="project-image">
                        <img alt="scu banner"  className='round' src={require('../images/porfolio.jpeg')} width="210" height="50%"/></div>
                        {/* <h2 className="heading"><FontAwesomeIcon  /> Обо мне</h2>  */}
                    </div>
                    <h2 className="heading"><FontAwesomeIcon  /> Обо мне</h2>
                    <div className="col-md-8" id="about-desc">
                        <p>Практикующий ангиохирург, с большим опытом сложнейших операций. Заведующий отделением сосудистой хирургии.</p>
                    </div>
                </div>
            </div>
        </div> 
    )  
}

export default AboutMe; 