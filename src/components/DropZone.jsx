import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {parseAnimeXML,parseMangaXML} from '../Util/XmlParser'

const DropZone = ({onSubmet})=>{
let isValid = true


      const handelFile = file=>{
        
        let reader = new FileReader()

        reader.readAsText(file)
      
        reader.onloadend = ()=>{
          const parser = new DOMParser()
          const xml = parser.parseFromString(reader.result, 'text/xml')
            const isMangaList = xml.getElementsByTagName("manga")
            const isAnimeList = xml.getElementsByTagName("anime")
            
            if (isMangaList.length !==0) {

              const MangaList={type:'M',List:parseMangaXML(isMangaList)}
            
              onSubmet(MangaList)
            
            } else if(isAnimeList.length !==0) {

              const AnimeList = {type:'A',List:parseAnimeXML(isAnimeList)}
              onSubmet(AnimeList)
            } else {
              isValid = false
            }
            

        }
      }

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(file => {
          handelFile(file)
        });
      }
      , [])


      const {getRootProps, getInputProps, isDragActive,isDragAccept} = useDropzone({onDrop,multiple:false,accept: 'text/xml'})
    
      return (
        <div {...getRootProps({className :"Dropzone"})}>
          <input {...getInputProps()} />
          {
            isDragActive ?
            isDragAccept&&isValid ?
              <p>Drop the files here ...</p>:
              <p>Unsuported File Type please use a valid xml File ...</p>:
              
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      )
}

export {DropZone as default}