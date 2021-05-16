const express = require('express');
const axios = require('axios');

const routes = express.Router();

routes.get('/repositories',(req, res) =>{
    axios.get('https://api.github.com/orgs/takenet/repos')
    .then((response) => {
        var repositories =  response.data.filter(repository => repository.language == 'C#');
        
        repositories.sort(
            function(a, b) {
                var c = new Date(a.created_at);
                var d = new Date(b.created_at);
                return c-d;
            }
        );

        repositories = repositories.slice(0, 5);

        res.json(repositories)
    });
});

module.exports = routes;