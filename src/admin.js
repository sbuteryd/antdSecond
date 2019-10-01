import React,{Component} from 'react'
import {Row,Col} from "antd";
import Header from './components/Header'
import Footer from './components/Footer'


class Admin  extends Component{
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        col-18 col-push-6
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