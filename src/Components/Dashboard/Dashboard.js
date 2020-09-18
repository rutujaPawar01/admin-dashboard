import React, { Component } from 'react';
import './Dashboard.scss';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import UserCard from '../Card/Card';


class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='navigation-container' md={2}>
                        <h2 className='nav-text'>Users</h2>
                            <ul className='navigation'>
                                <li className='nav-text'>
                                    <Link to = '/dashboard' >Dashboard</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to = '/dashboard' >Logs</Link>
                                </li>
                                <li className='nav-text'>
                                    <Link to = '/' >Sign Out</Link>
                                </li>
                            </ul>
                    </Col>
                    <Col md={10}>
                        <Row>
                            
                        </Row>
                        <Row className='card-container'>
                           <Col md={4}>
                            <UserCard />
                           </Col>
                           <Col md={4}>
                               hi
                           </Col>
                           <Col md={4}>
                               hi
                           </Col>
                        </Row>
                        <Row className='log-table'>
                           
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;