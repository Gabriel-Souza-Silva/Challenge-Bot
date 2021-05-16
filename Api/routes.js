const express = require('express');
const axios = require('axios');

const routes = express.Router();

routes.get('/repositories',(req, res) =>{
    axios.get('https://api.github.com/orgs/takenet/repos')
    .then((response) => {
        var repositories =  response.data.filter(repository => repository.language == 'C#');

        //console.log(repositories, typeof repositories)
        console.log(repositories)
        repositories.sort(
            function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            }
        );

        repositories = repositories.slice(0, 5)

        res.json(repositories)

        //res.json(response.data
        //.find(value => value.language == 'C#')    
        //.sort(
        //    function(a,b){
        //         return new Date(a.created_at) - new Date(b.created_at)
        //     }
        // )
        // .filter((index) => index < 5))
    });
});

module.exports = routes;