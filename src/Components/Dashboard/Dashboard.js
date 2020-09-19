import React, { Component } from 'react';
import './Dashboard.scss';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import UserCard from '../Card/Card';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class Dashboard extends Component {
    render() {
        const {activeUsers, inactiveUsers, userLogs} = this.props.data;
        const tableHeader = ['#','First Name', 'Last Name', 'Phone Number', 'Address'];
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
                                <UserCard 
                                userType = {"Active Users"}
                                userCount = {activeUsers}
                                />
                           </Col>
                           <Col md={4}>
                           <UserCard 
                                userType = {"Inactive Users"}
                                userCount = {inactiveUsers}
                                />
                           </Col>
                           <Col md={4}>
                                
                           </Col>
                        </Row>
                        <Row className='log-table'>
                        <Table >
                            <thead>
                                <tr>
                                    {tableHeader.map((header)=><th>{header}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {userLogs && userLogs.length && userLogs.map((row, index)=>{
                                        return <tr>
                                                <td>{index+1}</td>
                                                {Object.keys(row).map((columnKey)=>{
                                                    return <td>{row[columnKey]}</td>
                                            })}</tr>
                                })}
                            </tbody>
                            </Table>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;