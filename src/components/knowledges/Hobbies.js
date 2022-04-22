import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
        
            <h3>Interets</h3>
            <ul>
                <li className='hobby'><i className='fas fa-running'></i>
                     <span>Sport</span>
                </li>
                <li className='hobby'><i className='fab fa-btc'></i>
                     <span>Crypto</span>
                </li>
                <li className='hobby'><i className='fas fa-football-ball'></i>
                     <span>Football</span>
                </li>
                <li className='hobby'><i className='fab fa-avianex'></i>
                     <span>Voyage</span>
                </li>
            </ul>
            
        </div>
    );
};

export default Hobbies;