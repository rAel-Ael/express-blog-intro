import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.type (<h1>Server del mio blog</h1>   
)


});

app.get('/bacheca', (request, response) => {
    response.json(
        
        [
            'post 1',
            'post 2',
            'post 3'
        ]);
    

});



app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});


