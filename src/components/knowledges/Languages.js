import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
class Languages extends Component {
state ={
    languages: [
        {id: 1, value: "Javascript", xp:1.8},
        {id: 2, value: "HTML & CSS", xp:2},
        {id: 3, value: "C/C++", xp:1.5},
        {id: 4, value: "JAVA", xp:0.8}
    ],
    frameworks: [
        {id: 1, value: "React", xp:1.4},
        {id: 2, value: "Spring Boot", xp:0.9},
        {id: 3, value:  "Bootstrap", xp:0.9}   
    ]

    

}
    render()  { 
        let {languages, frameworks} = this.state;
        
    return ( 
        <div className='languagesFrameworks'>
            <ProgressBar
              languages={languages}
              className='languagesDisplay'
              title='languages'
            />
            <ProgressBar
              languages={frameworks}
              title='frameworks'
              className='frameworksDisplay'
            />
            
        </div>
    );
   }
};

export default Languages;