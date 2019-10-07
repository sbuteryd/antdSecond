import React from "react";
import { Modal, Button,Card} from 'antd';

import './index.less'



class Modals extends React.Component{
    state = {
        visible: false,
        second:false,
        third:false,
        frouth:false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    second = ()=>{
        this.setState({
            second:true
        })
    }



    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    secondCancel =(e)=>{
        this.setState({
            second:false
        })
    }

    third = ()=>{
        this.setState((preState)=>({
            third:preState.third =true
        }))
    }
    thirdCancle =()=>{
        this.setState((preState)=>({
            third:preState.third =false
        }))
    }
    frouth =()=>{
        this.setState((preState)=>({
            frouth:preState.frouth = true
        }))
    }
    frouthCancle =()=>{
        this.setState((preState)=>({
            frouth:preState.frouth = false
        }))
    }
    render() {
        return (
          <div>
              <Card title='基础模态框'>
                  <Button type="primary" onClick={this.showModal}>
                      打开
                  </Button>
                  <Modal
                      title="React"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                  >
                      <p>Some contents...</p>
                  </Modal>

                  <Button type="primary" onClick={this.second}>
                      自定义页脚
                  </Button>
                  <Modal
                      title="React"
                      visible={this.state.second}
                      onOk={this.handleOk}
                      onCancel={this.secondCancel}
                      okText='确认'
                      cancelText='取消'
                  >
                      <p>自定义页脚</p>
                  </Modal>

                  <Button type="primary" onClick={this.third}>
                      顶部20
                  </Button>
                  <Modal
                      style={{marginTop:-80}}
                      title="React"
                      visible={this.state.third}
                      onOk={this.handleOk}
                      onCancel={this.thirdCancle}
                      okText='确认'
                      cancelText='取消'
                  >
                      <p>自定义页脚</p>
                  </Modal>

                  <Button type="primary" onClick={this.frouth}>
                      水平垂直居中
                  </Button>
                  <Modal
                      style={{marginTop:-80}}
                      title="React"
                      visible={this.state.frouth}
                      onOk={this.handleOk}
                      onCancel={this.frouthCancle}
                      okText='确认'
                      cancelText='取消'
                      centered={true}
                  >
                      <p>水平垂直居中</p>
                  </Modal>

              </Card>
          </div>
        );
    }
}

export default Modals