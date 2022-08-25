import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
    return ( 
        <div className="background-alt" id="projects">
            <h2 className="heading"><FontAwesomeIcon icon={faCode} /> Операции</h2>
            <div className="container">
            <div className="row">
                <div className="shadow-large project">
                <div className="project-image"><img alt="scu banner" draggable="false" src={require('../images/sh1.jpg')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Протезирвание сосудов</h3>
                    <p>Специалист протезирует сосуды, которые были травмированы или повреждены в ходе оперативного вмешательства, удаляет врожденные патологические сосудистые образования. </p>{/* {/* <FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/scu-discord-bot" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /> */}{/* <a aria-label="website" draggable="false" href="https://JAVAB3ANS.github.io/scu-discord-bot" target="_blank" rel="noopener noreferrer"> View Project Site</a> } */}
                </div>
                </div>
                <div className="shadow-large project"> 
                <div className="project-image"><img alt="scu double dips" draggable="false" src={require('../images/sh2.jpg')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Реконструктивные операции</h3>
                    <p>реконструктивные сосудистые операции при стенозирующих и окклюзирующих поражениях магистральных артерий (атеросклероз, аорто-артериит);.</p>{/* <FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/scu-double-dips" target="_blank" rel="noopener noreferrer"> Github Repo</a> */}
                </div>
                </div>
                <div className="shadow-large project">
                <div className="project-image"><img alt="san jose state university campus" draggable="false" src={require('../images/sh3.jpg')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Склеротерапия</h3>
                    <p>процедура, которая используется для лечения заболеваний сосудистой и лимфатической системы, а также сосудистых новообразований.</p>{/* <FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/sjsu-ei" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://javab3ans.github.io/sjsu-ei/" target="_blank" rel="noopener noreferrer"> View Project Site</a> */}
                </div>
                </div>
                <div className="shadow-large project">
                <div className="project-image"><img alt="last.fm album scrobbler to github readme" draggable="false" src={require('../images/sh4.jpg')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Варикозном расширении вен</h3>
                    <p>оперативные вмешательства при варикозном расширении вен;</p>{/* <FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/lastfm-to-markdown" target="_blank" rel="noopener noreferrer"> Github Repo</a> */}
                </div>
                </div>
                </div>
                {/* <div className="shadow-large project">
                <div className="project-image"><img alt="educord" draggable="false" src={require('../images/educord.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Reddit Comment Scraper</h3>
                    <p>Developed Reddit comment scraper using RESTful APIs and natural language processsing libraries in JS for sentiment analysis on behalf of the SCU Media Research Lab - Data Science Team.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/Santa-Clara-Media-Lab/student-research-lab-robot" target="_blank" rel="noopener noreferrer"> Github Repo</a>
                </div>
                </div> 
                <div className="shadow-large project">
                <div className="project-image"><img alt="digedogesj crypto pool" draggable="false" src={require('../images/digdoge.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Crypto Pool Currency Conversion Calculator</h3>
                    <p>Pair-programmed cryptocurrency website which gives live information about the pool balance (e.g. elon, shiba, doge), price of each coin, and synthesizes to give the value of the pools in USD using the unMineable API and Coin Gecko API.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/dotimothy/digdogesj" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://timothydo.me/DigDogeSJ/" target="_blank" rel="noopener noreferrer"> View Project Site</a>
                </div>
                </div>
                <div className="shadow-large project">
                <div className="project-image"><img alt="gratition" draggable="false" src={require('../images/gratition.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Gratition: Easing Mental Health</h3>
                    <p>Made with HTML/CSS/JS with Google Speech Synthesis API to voice summarized results of a user's mental health check-in experience and aims to brighten their day.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/dotimothy/gratition" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://dotimothy.github.io/gratition" target="_blank" rel="noopener noreferrer"> View Project Site</a>
                </div>
                </div>
            </div>
            <div className="shadow-large project">
                <div className="project-image"><img alt="scu complex fires" draggable="false" src={require('../images/scu-lightning-complex.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                <h3>SCU Bay Area Complex Fires Webpage</h3>
                <p>Lightweight info website for Bay Area Complex Fires with an energy-efficient dark mode function. Exceeded benchmarks: average session duration (2:12 min.); number of sessions per user (2.63); 461 sessions; and 757 page views.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/dotimothy/scucomplexfires" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="website" draggable="false" href="https://dotimothy.github.io/scucomplexfires" target="_blank" rel="noopener noreferrer"> View Project Site</a>
                </div>
            </div>
            <div className="shadow-large project">
                <div className="project-image"><img alt="data structures" draggable="false" src={require('../images/data-structures.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                <h3>Data Structures and Types</h3>
                <p>Implemented various data structures (stacks, queues, trees, and arrays) and algorithms (quicksort and selection sort) with C programming language.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/coen-12-lab" target="_blank" rel="noopener noreferrer"> Github Repo</a> | <FontAwesomeIcon icon={faDesktop} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/space-time-complexity" target="_blank" rel="noopener noreferrer"> More Like This!</a>
                </div>
            </div>
            <div className="shadow-large project">
                <div className="project-image"><img alt="digital logic design" draggable="false" src={require('../images/digital-logic-design.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                <h3>Digital Logic Design</h3>
                <p>Completed lab write-ups where I utilized Verilog to simulate digital logic schematics via waveforms amongst other models.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/coen-21-lab" target="_blank" rel="noopener noreferrer"> Github Repo</a>
                </div>
            </div>
            <div className="shadow-large project">
                <div className="project-image"><img alt="java programming language" draggable="false" src={require('../images/java.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                <h3>Java Program Structures</h3>
                <p>This was my introduction to computer science using Java, an object-oriented programming language where I wrote computer programs that included control structures, iteration, methods and argument passing, and classes.</p><FontAwesomeIcon icon={faGithub} /><a aria-label="github" draggable="false" href="https://github.com/JAVAB3ANS/EVC_Summer2020_COMSC075" target="_blank" rel="noopener noreferrer"> Github Repo</a>
                </div>
            </div>*/}
            </div> 
        </div> 
    )
}

export default Projects;