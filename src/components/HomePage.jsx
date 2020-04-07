import React,{useContext,useState} from 'react'
import DropZone from './DropZone.jsx' 
import context from '../Context/context'
import {postData} from '../Util/DataHandler'
// import jikanjs from 'jikanjs'


const App= (props) =>{

    const {setList} = useContext(context)
    const [postRes,setPostRes]= useState(true)
    const onSubmet = (List)=>{
        setList(List)
       postData(List,props.history.push).then(res=>{
        setPostRes(res)
       })
    }
  
    return(
<div className = 'logPage'>
    <div className = 'boxLayout'>
    <div className = 'boxLayout__box'>
    <h1 className ="boxLayout__title">My Anime list xml list viewer</h1>
    <p>just drag and drop or select the xml file you exported from your profile</p>
    {!postRes && <p>Can't connect to the sever </p> }
    <DropZone onSubmet={onSubmet} />
    </div>
    </div>
</div>
)}



export default App