import React,{useState} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import HomePage from '../components/HomePage.jsx'
import ViewPage from '../components/ViewPage.jsx'
import context from '../Context/context'

const AppRouter = ()=>{
    const [list,setList] = useState({type:'',List:[]})

    return (
        <context.Provider value = {{list,setList}}>
        <BrowserRouter>
        <div>
        <Switch>
        <Route path ='/' component = {HomePage} exact = {true}/>
        <Route path ='/view/:id' component = {ViewPage}/>
        <Route component = {()=><p>404 you fuck</p>}/>
        </Switch>
        </div>
        </BrowserRouter>
        </context.Provider>
    )
}

export default AppRouter