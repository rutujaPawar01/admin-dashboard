import React from 'react';
import {Card} from 'react-bootstrap';
import './Card.scss';

function UserCard (props) {
    return(
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                    <Card.Body className='cardBody'>
                        <Card.Title className='card-title'>
                            {props.userType}
                        </Card.Title>
                        <Card.Text className='class-text'>
                            {props.userCount}
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard;