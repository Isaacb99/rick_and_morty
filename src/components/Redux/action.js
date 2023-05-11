

export const addFav = (character)=>{
    return{type: "ADD_FAV", payload: character}
}

export const removeFav = (id)=>{
    return{type: "REMOVE_FAV", payload: id}
}





//--------EJEMPLO DE GET USERS DE UNA API
// export const getUsers = ()=>{
//     return function (dispatch){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => dispatch({type: GET_USERS, payload: data }))
//     }
// };