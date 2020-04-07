import  React from 'react' 


const  ListItem = ({item,type})=>{

    const isAnime = type==='A'
    const Malurl = isAnime ? 'https://myanimelist.net/anime/' : 'https://myanimelist.net/manga/'


    return (

        
        <tr className = {item.title === 'Title' ? 'listhead' : 'listitem'}>

        <td className = "item__title">
        <div className ='titleCol'>
        {item.title}
         { !(item.title === 'Title') &&<a href ={Malurl+item.id} target ='blank'>Mal Page</a>}
        </div>
        </td>
        <td className = "item__score">{item.score}</td>
        <td className = "item__status">{item.status}</td>
        {isAnime?
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
        
    )
}

export default ListItem

