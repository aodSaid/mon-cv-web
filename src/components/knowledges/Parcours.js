import React from 'react';

const Parcours = () => {
    return (
        <div className='parcours'>
            <h3>FORMATION UNIVERSITAIRE</h3>
            <div className='licence1'>
                 <h4>Université de Bordeaux</h4>
                 <h5>Licence 3 MIAGE | 2021-2022</h5>
                 <p>Formation à double Compétences, en informatique d'une part et gestion d'autre part.</p>              
            </div>
            <div className='licence2'>
                 <h4>Université de Bordeaux</h4>
                 
                 <h5>Licence 2 Informatique | 2020-2021</h5> 
                 <p>Parcours informatique.</p> 
            </div>
            <div className='licence3'>
                 <h4>Université de Bourgogne</h4>
                 <h5>Licence 1 Informatique | 2019-2020</h5>
                 <p className='parcour'>Parcours informatique.</p>
            </div>
            
        </div>
    );
};

export default Parcours;