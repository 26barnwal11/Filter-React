import React, {Component} from 'react';
import Dog from './Dog';

function DogList(props){
    let dogs = props.dogs.map((dog) => {
        return <Dog name={dog.name} breed={dog.breed} />
    })
    return(
        <div>
            {dogs}
        </div>
    )
}
export default DogList;