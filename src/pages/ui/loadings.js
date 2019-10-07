import React from "react";
import { Spin, Alert, Switch,Icon,Card } from 'antd';
import './index.less'



class Loadings extends React.Component{
    state = { loading: true };

    toggle = value => {
        this.setState({ loading: value });
    };
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        const container = (
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        );
        return (
            <div>
                <Card title='Sping 用法'>
                    <Spin size='small'/>
                    <Spin  style={{marginLeft:50}} size='default'/>
                    <Spin  style={{marginLeft:50}} size='large'/>
                    <Spin  style={{marginLeft:50}} indicator={antIcon} />
                </Card>


                <Card style={{marginTop:30}} title='内容遮罩'>
                    <div>
                        <Spin spinning={this.state.loading} delay={500}>
                            {container}
                        </Spin>
                        <Spin  spinning={false}>
                            {container}
                        </Spin>
                        <Spin tip='加载中'  spinning={this.state.loading} delay={500}>
                            {container}
                        </Spin>
                        <Spin spinning={this.state.loading} indicator={antIcon}>
                            {container}
                        </Spin>

                    </div>
                </Card>
            </div>
        );
    }
}

export default Loadings