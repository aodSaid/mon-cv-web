import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='/media/said.jpg' alt='profil-pic'/>
                    <h3>DIALLO ELHADJ</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName='navActive'>
                            <i className='fas fa-home'></i>
                            <span>Acceil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/knowledges' activeClassName='navActive'>
                            <i className='fas fa-mountain'></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/portfolio' activeClassName='navActive'>
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>  
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName='navActive'>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">  
                             <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">  
                             <i className='fab fa-github'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">  
                             <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href='./media/certificats.pdf' target="_blank" rel="noopener noreferrer">  
                             <i className='fab fa-certificate'></i>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="signature">
               
            </div>

        </div>

      
    );
};

export default Navigation;