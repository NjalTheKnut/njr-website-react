import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import SlideShow from 'react-image-show';
import {Link} from 'react-router-dom';
import './index.css';

const noLineStyle={textDecoration: "none"};
const sliderImages = [
    'resources/CompTIA_Security+_ce_certificate.jpg',
    'resources/cert-1014-7239257.jpg',
    'resources/cert-1023-7239257.jpg',
    'resources/cert-1024-7239257.jpg',
    'resources/cert-1051-7239257.jpg',
    'resources/cert-1059-7239257.jpg',
    'resources/cert-1060-7239257.jpg',
    'resources/cert-1068-7239257.jpg',
    'resources/cert-1073-7239257.jpg',
    'resources/cert-1080-7239257.jpg',
    'resources/cert-1081-7239257.jpg'
];

class Home extends React.Component {
    render() {
        return ( 
            <div className="main">
                <ScrollUpButton/>
                {/* <!-- ++++++++++++ Page Content Goes Here ++++++++++++ --> */}
                <br/>
                <hr className="blue"/>
                <br/>
                {/* <img className="portrait" src="https://njaltheknut.github.io/NJR/Web/Portrait.png" alt="Could not load Neal's glorious visage!"/> */}
                <article className="text">
                <section>
                <header className="heading"><h1 className="centered">Neal J. Robison</h1></header>
                <p className="centered">
                A Software Engineer, Web Developer and Bachelor of Computer Science.  
                <br/>Analytical, inquisitive and skilled at learning new languages and technologies.  
                <br/>Has a very rententive memory with a talent for discovering patterns and connections.
                </p>
                </section>
                <br/>
                <hr className="blue"/>
                <br/>
                <section>
                <header><h1 className="heading">Profiles</h1></header>
                <div className="centered"><p className="text"><a style={noLineStyle} href="https://www.linkedin.com/in/neal-robison/" target="_blank" rel="noopener noreferrer">Neal Robison | LinkedIn</a></p></div>
                <div className="centered"><p className="text"><a style={noLineStyle} href="https://www.sololearn.com/Profile/7239257" target="_blank" rel="noopener noreferrer">Neal Robison | SoloLearn</a></p></div>
                <div className="centered"><p className="text"><a style={noLineStyle} href="https://github.com/NjalTheKnut" target="_blank" rel="noopener noreferrer">Neal Robison | GitHub</a></p></div>
                <div className="centered"><p className="text">Neal Robison | Codewars<br/>(Click Badge Below)<br/><a className="none" href="https://www.codewars.com/users/NjalTheKnut" target="_blank" rel="noopener noreferrer">
                <img className="linkImg" src="https://www.codewars.com/users/NjalTheKnut/badges/large" alt="Could not Load CodeWars Badge!"/></a></p></div>
                </section>
                <br/>
                <hr className="blue"/>
                <br/>
                <section>
                <header><h1 className="heading">Certificates</h1></header>
                <SlideShow 
                    images={sliderImages} 
                    width="920px"
                    imagesWidth="800px"
                    imagesHeight="450px"
                    imagesHeightMobile="56vw"
                    //thumbnailsWidth="920px"
                    //thumbnailsHeight="12vw"
                    //indicators 
                    //thumbnails 
                    fixedImagesHeight
                    infinite
                />
                </section>
                <br/>
                <hr className="blue"/>
                <br/>
                <section>
                <header><h1 className="heading">Neal's Skills</h1></header>
                
                <div className="centered"><ul className="square">
                    <li><a style={noLineStyle} href="resources/CompTIA_Security+_ce_certificate.pdf" target="_blank" rel="noopener noreferrer">CompTIA Security+ CE</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1014-7239257.pdf" target="_blank" rel="noopener noreferrer">HTML</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1023-7239257.pdf" target="_blank" rel="noopener noreferrer">CSS</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1024-7239257.pdf" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1051-7239257.pdf" target="_blank" rel="noopener noreferrer">C++</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1059-7239257.pdf" target="_blank" rel="noopener noreferrer">PHP</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1060-7239257.pdf" target="_blank" rel="noopener noreferrer">SQL</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1068-7239257.pdf" target="_blank" rel="noopener noreferrer">Java</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1073-7239257.pdf" target="_blank" rel="noopener noreferrer">Python</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1080-7239257.pdf" target="_blank" rel="noopener noreferrer">C#</a></li>
                    <li><a style={noLineStyle} href="resources/cert-1081-7239257.pdf" target="_blank" rel="noopener noreferrer">Ruby</a></li>
                    <li><Link style={noLineStyle} to="/ReactApp" target="_blank" rel="noopener noreferrer">React</Link></li>
                    {/* <!-- <li><a href=".pdf" target="_blank"></a></li> --> */}
                </ul>
                </div>
                </section>
                <br/>
                <hr className="blue"/>
                <br/>
                </article>
                </div>
                
        )
    }
}

export default Home;