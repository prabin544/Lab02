import React from 'react';
import HornedBeasts from './HornedBeasts'
import CardColumns from 'react-bootstrap/CardColumns';
import animalArray from '../data.json'


class Main extends React.Component{
    render () {
        return(
            <CardColumns>
                {animalArray.map(animal=>(
                    <HornedBeasts  
                        title = {animal.title} 
                        description = {animal.description}
                        imgUrl = {animal.image_url}
                        keyword={animal.keyword}
                        horns={animal.horns}
                    />
                ))}
            </CardColumns>
        )
    }
}

export default Main;