const getData = ()=>{
    return fetch ('https://jsonplaceholder.typicode.com/posts')
}
   getData().then(response=>response.json())
   .then(data=>console.log(data))
   .catch(err=>console.log(err));