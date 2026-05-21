import express from 'express';

const app = express();

app.get('/', (request, response) => {
    response.json('Server del mio blog')


});

app.get('/bacheca', (request, response) => {
    response.json(
        
        [
            'post 1',
            'post 2',
            'post 3'
        ]);
    

});



app.listen(3000, (error) => {
    if (error){
        console.error(error);
    } else 
        console.log('Server in ascolto sulla porta 3000');
    
});


