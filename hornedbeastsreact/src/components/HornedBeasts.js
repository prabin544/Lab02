import React from 'react';
import { Card, CardDeck} from 'react-bootstrap';
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
            <CardDeck>
                <Card className='card'
                onClick={this.numOfClicks}>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <AiFillLike />  {this.state.favoriteBeasts}
                    </Card.Footer>
                </Card>
            </CardDeck>
        );
    }
}

export default HornedBeasts;