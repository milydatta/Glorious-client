import React from 'react';
import Event from '../Event/Event';

const events = [
    {
        name: 'Child Support',
        img:'childSupport.png'
    },
    {
        name: 'Animal Shelter',
        img:'animalShelter.png'
    },
    {
        name: 'Bird House',
        img:'birdHouse.png'
    },
    {
        name: 'Good Student',
        img:'goodEducation.png'
    },
    {
        name: 'Library',
        img:'libraryBooks.png'
    },
    {
        name: 'Clean River',
        img:'riverClean.png'
    },
    {
        name: 'Refuge Shelter',
        img:'refuseShelter.png'
    },
    {
        name: 'Music Class',
        img:'musicLessons.png'
    },
    {
        name: 'Baby Sit',
        img:'babySit.png'
    },
    {
        name: 'Clean Water',
        img:'cleanWater.png'
    },
    {
        name: 'Study Group',
        img:'studyGroup.png'
    },
    {
        name: 'Clean Park',
        img:'clearnPark.png'
    }
]

const Home = () => {
    return (
        <div className="container">
        <div className="row">
            {
                events.map(event => <Event key={event} event={event}></Event>)
            }
        </div>
        </div>
    );
};

export default Home;