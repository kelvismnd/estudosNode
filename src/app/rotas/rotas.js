module.exports = (app)=>{

    app.get('/',(req,resp)=>{
        resp.send("<h1>pagina home</h1>");
    }); 
    app.get('/livros',(req,resp)=>{
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    }); 
    
}   

