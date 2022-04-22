import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
           <Navigation/>
           <div className='homeContent'>
               <div className='content'>
                   <h2>Développeur fullstack</h2>
                   <div className='presentation'>
                        <p>Bonjour, <br/> Je suis étudiant en licence 3 méthodes informatiques appliquées à la gestion de l’entreprise  (MIAGE) à l’Université de Bordeaux Science et Technologie de Talence. Actuellement, je fais un stage en développement web pour  une durée de 3 mois au laboratoire Bordelais de recherche en informatique (Labri).<br/>  
                         Toujours soucieux de m’améliorer, et conscient de l'évolution rapide des technologies informatiques, en parallèle de mes cours Universitaires je me forme en permanence pour suivre la tendance. <br/> 
                         Je suis une personne responsable, motivée, qui apprend vite, avec un esprit de travail en équipe.  
                         </p>
                   </div>
                   <div className='pdf'>
                       <a href='./media/CV.pdf' target='_blank'>Télécharger CV</a>
                   </div>
               </div>

           </div>

        </div>
    );
};

export default Home;