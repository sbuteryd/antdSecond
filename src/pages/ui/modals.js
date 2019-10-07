import React from "react";
import { Modal, Button,Card,Icon} from 'antd';

import './index.less'



class Modals extends React.Component{
    state = {
        visible: false,
        second:false,
        third:false,
        frouth:false
    };

    showOpen =(type)=>{
        this.setState((preState)=>({
            type:preState[type] = true
        }))
    }
    cancle =(type)=>{
        this.setState((preState)=>({
            type:preState[type] = false
        }))
    }

    handleConfirm =(type)=>{
        Modal[type]({
            title: 'This is a warning message',
            content: 'some messages...some messages...',
            okText:'关闭',
            mask:true
        })
    }
    render() {
        return (
          <div>
              <Card title='基础模态框'>
                  <Button type="primary" onClick={()=>this.showOpen('visible')}>打开</Button>
                  <Button type="primary" onClick={()=>this.showOpen('second')}>自定义页脚</Button>
                  <Button type="primary" onClick={()=>this.showOpen('third')}>顶部20</Button>
                  <Button type="primary" onClick={()=>this.showOpen('frouth')}>水平垂直居中</Button>
              </Card>
              <Card style={{marginTop:30}} title='信心确认框'>
                  <Button onClick={()=>this.handleConfirm('confirm')}>Info</Button>
                  <Button onClick={()=>this.handleConfirm('info')}>Success</Button>
                  <Button onClick={()=>this.handleConfirm('success')}>Error</Button>
                  <Button onClick={()=>this.handleConfirm('warning')}>Warning</Button>
              </Card>

              <Modal
                  style={{marginTop:-80}}
                  title="React"
                  visible={this.state.frouth}
                  onOk={this.handleOk}
                  onCancel={()=>this.cancle('frouth')}
                  okText='确认'
                  cancelText='取消'
                  centered={true}
              >
                  <p>水平垂直居中</p>
              </Modal>

              <Modal
                  style={{marginTop:-80}}
                  title="React"
                  visible={this.state.third}
                  onOk={this.handleOk}
                  onCancel={()=>this.cancle('third')}
                  okText='确认'
                  cancelText='取消'
              >
                  <p>顶部</p>
              </Modal>
              <Modal
                  title="React"
                  visible={this.state.second}
                  onOk={this.handleOk}
                  onCancel={()=>this.cancle('second')}
                  okText='确认'
                  cancelText='取消'
              >
                  <p>自定义页脚</p>
              </Modal>
              <Modal
                  title="React"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={()=>this.cancle('visible')}
              >
                  <p>Some contents...</p>
              </Modal>
          </div>
        );
    }
}

export default Modals