import React from 'react';
import Navigation from '../components/Navigation';


const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                        <i className='fas fa-map-marked-alt'></i>
                             <span>Bordeaux</span>
                        </li>
                        <li>
                        <i className='fas fa-mobile-alt'></i>
                             <span>06 05 59 43 67</span>
                        </li>
                        <li>
                        <i className='fas fa-envelope'></i>
                             <span>elhadj-saidou.diallo@etu.u-bordeaux.fr</span>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">  
                                <h4>LinkedIn</h4>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">  
                                <h4>GitHub</h4>
                                <i className='fab fa-github'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">  
                                <h4>Twitter</h4>
                                <i className='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='./media/certificats.pdf' target="_blank" rel="noopener noreferrer">  
                                <h4>Certificats</h4>
                                <i className='fab fa-certificate'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;