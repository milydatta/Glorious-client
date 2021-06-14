import React from 'react';

const Event = ({event}) => {
    return (
        <div className="col-md-3 p-5 m-5">
            <img style={{height: '300px'}} src={require(`../../images/${event.img}`)} alt=""/>
            <h3>{event.name}</h3>
        </div>
    );
};

export default Event;