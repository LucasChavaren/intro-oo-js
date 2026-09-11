const user = {
    nome: "Lucas",
    email: "lucas@lucas.com",
    nascimento: "2009/05/28",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()

const exibir = function(){
    console.log(this)
}

exibir()