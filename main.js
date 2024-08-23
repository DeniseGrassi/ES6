
// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "Denise", nota: 7 },
    { nome: "Lucas", nota: 3 },
    { nome: "Pietro", nota: 8 },
    { nome: "Beatriz", nota: 9 },
    { nome: "Mara", nota: 2 }
];

// Função que retorna alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chamada da função e exibição do resultado
const aprovados = alunosAprovados(alunos);
console.log(aprovados);