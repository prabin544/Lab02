import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillLike } from 'react-icons/ai'

class HornedBeasts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            favoriteBeasts: 0
        }
    }

    numOfClicks = () => {
        this.setState({ favoriteBeasts: this.state.favoriteBeasts + 1 });
    }

    render () {
        return(
            <Card style={{ width: '30rem'}}>
                <Card.Img variant="top" src={this.props.imgUrl} style={{ width: '100%'}} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant="primary" onClick={this.numOfClicks}><AiFillLike />{this.state.favoriteBeasts}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeasts;