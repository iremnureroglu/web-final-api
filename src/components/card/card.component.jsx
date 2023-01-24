import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {name,image} = this.props.monster;
            return (
                <div className='card-container'>
                    <img src={image} alt={`monster `} />
                    <h2>{name}</h2>
                </div>
            );
    }
}

export default Card;