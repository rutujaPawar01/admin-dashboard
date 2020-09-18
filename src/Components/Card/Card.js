import React from 'react';
import {Card} from 'react-bootstrap';
import './Card.scss';

function UserCard () {
    return(
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className='card-title'>Active Users</Card.Title>
                        <Card.Text className='class-text'>
                            231
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard;