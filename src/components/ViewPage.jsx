import React,{useEffect,useContext,useState} from 'react'
import Header from './Header.jsx'
import List from './List.jsx'
import context from '../Context/context'
import {getData} from '../Util/DataHandler'


const ViewPage = (props)=>{

    const {list,setList} = useContext(context)
    const [dataloaded,setdataloaded]= useState(false)
  

    useEffect(() => {

        if(props.history.action === 'POP'){
            getData(props.match.params.id).then(data=>{
                setList(data)
                setdataloaded(true)
            }).catch(e=>{
                setdataloaded(true)
                console.log('no Data Boi')
                
            })
        }else{
            setdataloaded(true)
        }

        
    },[])

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = window.location.href;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };
   return ( 
    <div>
    <Header/>
    <div className = "container"> 
        {dataloaded &&(!!list.type ?
            <div>
            <button className ="shareBtn" onClick = {copyToClipboard}>Share</button>
            <List/>
            </div>
             :
             <h2 className = 'errormsg'>Wrong or expired Link</h2>)
            }

    </div>
    </div>
)}

export default ViewPage