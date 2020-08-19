const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log(`servidor rodando na porta 3000`);
});

app.get('/',(req,resp)=>{
    resp.send("<h1>pagina home</h1>");
}); 
app.get('/livros',(req,resp)=>{
    resp.send("<h1>pagina Livros</h1>");
}); 