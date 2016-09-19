import React, {Component} from 'react';
import update from 'react/lib/update';
import SortableItemWrapper from '../../components/SortableItemWrapper';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class SortableContainer extends Component {
    constructor(props) {
        super(props);
        this.onMove = this.onMove.bind(this);
        //TODO: remove
        this.state = {
            cards: [{
                id: 1,
                text: 'Write a cool JS library'
            }, {
                id: 2,
                text: 'Make it generic enough'
            }, {
                id: 3,
                text: 'Write README'
            }, {
                id: 4,
                text: 'Create some examples'
            }, {
                id: 5,
                text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
            }, {
                id: 6,
                text: '???'
            }, {
                id: 7,
                text: 'PROFIT'
            }]
        };
    }

    onMove(dragIndex, hoverIndex) {
        const {cards} = this.state;
        const dragCard = cards[dragIndex];
        //TODO: redux and immutable

        this.setState(update(this.state, {
            cards: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }

    render() {
        const {cards} = this.state;
        //TODO: wrap this.props.children with SortableItemWrapper

        return (
            <div>
                {cards.map((card, index) => {
                    return (
                        <SortableItemWrapper key={card.id}
                              index={index}
                              id={card.id}
                              text={card.text}
                              moveCard={this.onMove}/>
                    );
                })}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(SortableContainer)
