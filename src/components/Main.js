import React from 'react';
import HornedBeasts from './HornedBeasts'
import CardDeck from 'react-bootstrap/CardDeck';
import animalArray from '../data.json'


class Main extends React.Component{
    render () {
        return(
            <CardDeck>
                {animalArray.map(animal=>(
                    <HornedBeasts  
                        title = {animal.title} 
                        description = {animal.description}
                        imgUrl = {animal.image_url}
                        keyword={animal.keyword}
                        horns={animal.horns}
                    />
                ))}
                
            </CardDeck>
        )
    }
}

export default Main;