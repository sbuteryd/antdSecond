import React from "react";
import {Card,Button,Icon,Radio} from "antd";
import './index.less'
const ButtonGroup = Button.Group;
export default class ButtonExameple extends React.Component{
    state= {
        loading:true,
        size:'small'
    }
    onChange = e => {
        e.preventDefault()
        this.setState({
            size:e.target.value
        })
    };
    handleCloseLoading=()=>{
        this.setState({
                loading:false
        });
    }
    handleOpenLoading=()=>{
        this.setState({
            loading:true
        });
    }

    render() {
        return (
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>button</Button>
                    <Button type='danger'>Imooc</Button>
                    <Button type="link">Link</Button>
                    <Button type="dashed">Link</Button>
                    <Button disabled>Link</Button>
                </Card>
                <Card title='基础按钮'>
                    <Button type='plus' icon='plus'>创建</Button>
                    <Button icon='edit'>创建</Button>
                    <Button icon='delete'>删除</Button>
                    <Button type="default" color='white' shape="circle" icon="search" />
                    <Button type="primary" icon="search" >搜索</Button>
                    <Button type="primary" icon="download" >下载</Button>
                </Card>
                <Card title='Loading 按钮'>
                    <Button  loading={this.state.loading}>确定</Button>
                    <Button shape='circle'  loading={this.state.loading}/>
                    <Button loading={this.state.loading} onClick={this.handleOpenLoading} >点击加载</Button>
                    <Button type='default' shape='circle' loading={this.state.loading}/>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title='Loading 按钮'>
                    <ButtonGroup >
                        <Button  type="primary" size="large"><Icon type='left'/>返回</Button>
                        <Button  type="primary" size="large" >前进<Icon type='right'/></Button>
                    </ButtonGroup>
                </Card>
                <Card title='按钮尺寸'>
                    <Radio.Group  onChange={this.onChange}  name="radiogroup" defaultValue={1}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>button</Button>
                    <Button type='danger' size={this.state.size}>Imooc</Button>
                    <Button type='link' size={this.state.size}>Link</Button>
                </Card>
            </div>
        );
    }
}