class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;         // Nome do herói
        this.idade = idade;       // Idade do herói
        this.tipo = tipo;         // Tipo do herói (guerreiro, mago, monge, ninja)
    }

    atacar() {
        // Estrutura de decisão para determinar o tipo de ataque
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque desconhecido';
                break;
        }

        // Mensagem de ataque formatada conforme as instruções
        return `O ${this.tipo} atacou ${ataque}!`;
    }
}

// Criando heróis e exibindo os ataques
const herois = [
    new Heroi("Gandalf", 100, "mago"),
    new Heroi("Conan", 30, "guerreiro"),
    new Heroi("Shifu", 50, "monge"),
    new Heroi("Naruto", 18, "ninja")
];

// Exibe a lista de ataques
console.log("Resultados dos Ataques:");
herois.forEach(heroi => {
    console.log(heroi.atacar());
});
