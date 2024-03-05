const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listas = [alunos, medias];
 
function exibir (aluno)  {
    if(listas[0].includes(aluno)) {
        const [alunos, medias] = listas;
        const indice =alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log (`${aluno} tem a media ${mediaAluno}`);
    } else {
        console.log('estudante nao existe na lista');
    }
}

exibir('Juliana');
exibir('juli');