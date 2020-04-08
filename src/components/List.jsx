import React,{useContext} from 'react'
import context from '../Context/context'
import ListItem from './ListItem.jsx'

const List = ()=>{
    const {list} = useContext(context)
    const itemlist = list.List
    const itemlisttype=list.type
    const isManga =itemlisttype==='M'

    const titles = {
        title:'Title',
        volumes:'Volumes',
        episodes:'Episodes',
        watched:'Watched',
        chapters:'Chapters',
        readvolumes:'Readvolumes',
        readchapters:'Readchapters',
        score:'Score',
        status:'Status'
    }

    return (

        <div className ='list'>
        
        <h1 className = 'ListTitle'>{isManga? 'Manga List' : 'Anime List'}</h1>

        <table className = "table">
        
        <tbody >
            <ListItem  item={titles} type = {itemlisttype} index = '#' />
            {itemlist.map((item,index)=>{
                return <ListItem key = {item.id} item={item} type = {itemlisttype } index = {index}/>
            })}
        </tbody>

        </table>
        </div>

    )
}

export default List

