import React, { lazy, Suspense} from "react";
import {Skeleton} from 'antd'
import MasterLayout from "../components/MasterLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const Login = lazy(()=> import('../views/loginPage/index'));
const MainPage = lazy(()=> import('../views/todopage/index'));

const RootRouter = () => {
    return(
        <MasterLayout>
        <Router>
            <Suspense fallback={<Skeleton active/>}>
                <Switch>
            <Route  path="/login">
            <Login/>
            </Route>
            <Route path="/">
            <MainPage />
            </Route> 
        </Switch>
        </Suspense>
        </Router>
        </MasterLayout>
    )
}
export default RootRouter