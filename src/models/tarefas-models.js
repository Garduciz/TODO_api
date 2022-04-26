var id = 0;

class Tarefas{
    constructor(titulo, descricao, status){
        this.id = id++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.data = new Date();
    }

}
module.exports = Tarefas;