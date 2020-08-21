const livroDao = require('../infra/livro-dao');
const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app)=>{

    app.get('/',(req,resp)=>{
        resp.send("<h1>pagina home</h1>");
    }); 
    app.get('/livros',(req,resp)=>{ 
        const livroDado = new LivroDao(db);
        livroDado.lista()
                .then( (livros) =>{
                    resp.marko(
                        require('../views/livros/lista/lista.marko'),
                        {livros:livros}
                    )
                })
                .catch((erro)=>{
                    console.log(erro);
                })
    });  //dao = data, acess, object
    app.get('/livros/form',(req,resp)=>{
        resp.marko(
            require('../views/livros/form/form.marko')
        )
    });

    app.post('/livros',function(req,resp){
        console.log(req.body);
    
        const dao = new LivroDao(db);
         dao.cadastro(req.body)
        .then(
            resp.redirect('/livros')
        )
        .catch((erro)=>{ console.log(erro)})
    });




}   

