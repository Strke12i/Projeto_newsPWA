const params={
    headers:{
        Accept:"application/json",
        'Content-Type':"application/json"
    }
}

const URL = "ahfahfafh" //colocar api depois...
const getNews=(subject)=>{
    return fetch(`${URL}/${subject}`, params).then(
        (response)=>response.json()
    ).catch((error)=>console.log(error));

}

const getNewsById=(subject,id)=>{
    return fetch(`${URL}/${subject}/${id}`, params)
    .then((response)=>response.json())
    .catch((error)=>console.log(error));
}

export default {getNews,getNewsById};