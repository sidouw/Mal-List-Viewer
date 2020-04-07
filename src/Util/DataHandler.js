


const postData = ( data = {},push)=> {

//http://127.0.1.1:1919
    return fetch('/endpoint', {
      
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      .then( (data)=> {
        data.json().then(json=>{
            push(`/view/${json.id}`)                
        })
        return true
      })
      .catch(function (error) {
        // console.log('Request failed', error);
        return false
      })
  }


  const getData = (id)=>{
    //http://127.0.1.1:1919
    return fetch(`/endpoint/${id}`).then(data=>data.json()).then((data)=>{
        return data
    })
    
}
  
  export {postData,getData}