class Aluno {//Cria a classe Alunos e instancia os valores passados
    constructor(nome,nota1,nota2,nota3){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    media() {// calcula a media do aluno
        const mnota1 = parseInt(this.nota1);
        const mnota2 = parseInt(this.nota2);
        const mnota3 = parseInt(this.nota3);
        return (mnota1 + mnota2 + mnota3)/3;
    }
}

var mediaAlunos = [];//cria um array para salvar os alunos

function SalvarAlunos (nome,nota1,nota2,nota3) {//função que salva a media, as notas e o nome do aluno dentro do array mediaAlunos, e passa a media de volta
    mediaAlunos = new Aluno (nome,nota1,nota2,nota3);
    return mediaAlunos.media();
}

function LimparMediaAlunos () {//limpa o array mediaAlunos
    mediaAlunos = [];
}
