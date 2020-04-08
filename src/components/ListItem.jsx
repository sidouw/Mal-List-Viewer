import  React from 'react' 


const  ListItem = ({item,type,index})=>{

    const isAnime = type==='A'
    const Malurl = isAnime ? 'https://myanimelist.net/anime/' : 'https://myanimelist.net/manga/'


    return (

        <>
        <tr className = {item.title === 'Title' ? 'listhead deskvisible ' : 'listitem deskvisible'}>
        <td className = "item__inedx">{index}</td>
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

        <tr className = {item.title === 'Title' ? 'listhead  nonvisble' : 'listitem phonevisible'}>
        <td className = "item__inedx">{'#'+index}
         <p>title:  {item.title}</p>
         <p>score: {item.score}</p>
         <p>status: {item.status}</p>
         {isAnime?
            <>
            <p>episodes: {item.episodes}</p>
            <p>watched: {item.watched}</p>
             </>
             :
             <>
             <p>volumes: {item.volumes}</p>
             <p>chapters: {item.chapters}</p>
             <p>readvolumes: {item.readvolumes}</p>
             <p>readchapters: {item.readchapters}</p>
             </>
            
            }
            <a href ={Malurl+item.id} target ='blank'>Open Mal Page</a>
        </td>
        

        </tr>
        </>
    )
}

export default ListItem

