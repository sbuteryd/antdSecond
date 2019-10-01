import React from "react";
import './index.less'
import MenuConfig from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {

    UNSAFE_componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState(()=>({
            menuTreeNode
        }))
    }
    //使用循环菜单、以后根据权限来返回菜单
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
               return (
                   <SubMenu title={item.title} key={item.key}>
                       {this.renderMenu(item.children)}
                   </SubMenu>
               )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div>
                    {/*public这个目录不会在起服务器上显示*/}
                     <div className='logo'>
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <h1>Imooc Ms</h1>
                    </div>
                    <Menu theme={'dark'}>
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
        );
    }
}