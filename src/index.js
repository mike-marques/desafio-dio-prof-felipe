// # 1️⃣ Desafio Classificador de nível de Herói

let nivel;
let heroi;

let herois = [
    { nome: "Lucas", experiencia: 999 },
    { nome: "Mike", experiencia: 2000 },
    { nome: "Jonas", experiencia: 3500 },
    { nome: "Geovana", experiencia: 6030 },
    { nome: "Laura", experiencia: 7999 },
    { nome: "Rian", experiencia: 9000 },
    { nome: "Beatriz", experiencia: 9001 },
    { nome: "Luck", experiencia: 10001 }
];

for (let i = 0; i < herois.length; i++) {
    heroi = herois[i];

    if (heroi.experiencia <= 1000) {
        nivel = "Ferro";
    } else if (heroi.experiencia <= 2000) {
        nivel = "Bronze";
    } else if (heroi.experiencia <= 5000) {
        nivel = "Prata";
    } else if (heroi.experiencia <= 7000) {
        nivel = "Ouro";
    } else if (heroi.experiencia <= 8000) {
        nivel = "Platina";
    } else if (heroi.experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`)
}