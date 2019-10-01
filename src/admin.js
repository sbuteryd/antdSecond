import React,{Component} from 'react'
import {Row,Col} from "antd";
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'


class Admin  extends Component{
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <NavLeft/>
                    </Col>
                    <Col span={20}>
                        <Header>Header</Header>
                        <Row>
                            Content
                        </Row>
                        <Footer>Footer</Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin