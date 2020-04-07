import  React from 'react' 


const  ListItem = ({item,type})=>{

    return (
        <tbody className = {item.title === 'Title'?'listtitle':'listitem'}>
        <tr className = {item.title === 'Title'?'listtitle':'listitem'}>
        <td className = "item__title">{item.title}</td>
        <td className = "item__score">{item.score}</td>
        <td className = "item__status">{item.status}</td>
        {type==='A'?
        <>
        <td className = "item__episodes">{item.episodes}</td>
        <td className = "item__watched">{item.watched}</td>
         </>
         :
         <>
         <td className = "item__volumes">{item.volumes}</td>
         <td className = "item__chapters">{item.chapters}</td>
         <td className = "item__readvolumes">{item.readvolumes}</td>
         <td className = "item__readchapters">{item.readchapters}</td>
         </>
        
        }
        </tr>
        </tbody>
        
    )
}

export default ListItem

