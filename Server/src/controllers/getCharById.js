const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios")


const getCharById = async (req, res)=>{

    try {
        const {id} = req.params
        const {data} = await axios.get(`${URL}/${id}`)
        
        let character = {
                        id: data.id,
                        name: data.name,
                        gender: data.gender,
                        species: data.species,
                        origin: data.origin,
                        image: data.image,
                        status: data.status
        }
        
        return character.name? res.status(200).json(character) : res.status(400).send("Problema con el servidor")

    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    getCharById
}























// const axios = require("axios")

// const getCharById = (res, id)=>{
    
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {const char={
//                             id: data.id,
//                             name: data.name,
//                             gender: data.gender,
//                             species: data.species,
//                             origin: data.origin,
//                             image: data.image,
//                             status: data.status
//                             }

//         return res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(char))
//                     })
    
//     .catch((error) => res.writeHead(500, {"Content-type": "text/plain"}).end(JSON.stringify(error.message)))
    
    
// }

// module.exports = {
//     getCharById
// };