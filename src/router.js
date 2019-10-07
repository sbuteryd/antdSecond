import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from "./admin";
import Login from "./pages/login";
import Button from './pages/ui/button'
import  Nomatch from './pages/nomatch'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
export default class IRouter extends React.Component{
    render() {
        return (
            <div>
                <HashRouter>
                    <App>
                        <Route  path='/login' component={Login}/>
                        <Route    path='/' render={()=>
                            <Admin>
                                <Switch>
                                    <Route  path='/ui/buttons' component={Button}/>
                                    <Route  path='/ui/modals' component={Modals}/>
                                    <Route  path='/ui/loadings' component={Loadings}/>
                                    <Route component={Nomatch}></Route>
                                </Switch>
                            </Admin>
                                }/>
                        <Route path='/order/detail' component={Login}/>
                    </App>
                </HashRouter>
            </div>
        );
    }
}