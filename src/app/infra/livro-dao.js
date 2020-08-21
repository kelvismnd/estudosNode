class LivroDao{
    constructor(db){
        this._db = db;
    }
    lista(){
        return new Promise((resolve,reject)=>{
            this._db.all(
                'SELECT * FROM livros',
                (erro,resultados)=>{
                    if(erro) {
                        return reject ('não foi possivel listar os livros !')
                    }else {
                        return resolve(resultados)
                    }
                }
            )
        });
    }

     cadastro(livro){
       
        return new Promise((resolve,reject)=>{
            this._db.run(`
                INSERT INTO livros(titulo,preco,descricao)
                values (?,?,?)`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function(err){
                    if(err){
                        console.log(err);
                        return reject('não foi possivel adicionar o livro');
                    }
                    resolve();
                }
                )
        });
    }

}
module.exports = LivroDao;