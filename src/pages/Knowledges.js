import React from 'react';
import Experiences from '../components/knowledges/Experiences';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import Navigation from '../components/Navigation';
import OtherSkills from '../components/knowledges/OtherSkills';
import { ParamKeyValuePair } from 'react-router-dom';
import Parcours from '../components/knowledges/Parcours';
const Knowledges = () => {
    return (
        <div className='knowledges'> 
        <Navigation/>
            <div className='knowledgesContents'>
                <Languages/>
                <Experiences/>
                <Parcours/>
                <OtherSkills/>
                <Hobbies/> 
            </div>
        </div>
    );
};

export default Knowledges;