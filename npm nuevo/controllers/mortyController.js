const axios = require('axios');

exports.readMorty = async (req, res) => {
    try{
        const uri = 'https://rickandmortyapi.com/api/character';
        const response = await axios.get(uri);
        res.json(response.data.results);
        //console.log(response);
    }catch(error){
        res.status(500).send(error);
    }
}

exports.readMortyById = async (req, res) => {
    try{
        const idPersMorty = req.params.id;
        console.log(idPersMorty);
        const uri = 'https://rickandmortyapi.com/api/character'+ idPersMorty;
        const response = await axios.get(uri);
        res.json(response.data);
        //console.log(response);
    }catch(error){
        res.status(500).send(error);
    }
}