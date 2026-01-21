let categoriaAtual = "motivacional";

// Aqui coloquei 5 frases como exemplo, você pode expandir para 50
const categorias = {
  motivacional: {
    inicio: ["Acredite", "Nunca desista", "Tudo começa", "Não desista nunca", "O segredo é"],
    meio: ["em você", "com foco", "com coragem", "sem medo", "todos os dias"],
    fim: ["✨", "🔥", "🚀", "💪", "💯"]
  },
  fitness: {
    inicio: ["Treine", "Supere-se", "Disciplina", "Mova-se", "Coragem"],
    meio: ["todos os dias", "sem desculpas", "é o segredo", "para vencer", "na rotina"],
    fim: ["💪", "🏋️", "🔥", "⚡", "💯"]
  },
  negocios: {
    inicio: ["Negócios", "Sucesso", "Resultados", "Estratégia", "Crescimento"],
    meio: ["exigem ação", "vem com disciplina", "nasce da constância", "com dedicação", "com foco"],
    fim: ["📈", "💼", "🚀", "💡", "🏆"]
  },
  romantico: {
    inicio: ["Amor", "Você", "Meu coração", "Paixão", "Sentimento"],
    meio: ["é tudo", "bate por você", "me completa", "é infinito", "me inspira"],
    fim: ["❤️", "😍", "💖", "💕", "💞"]
  },
  engracado: {
    inicio: ["Quando eu acordo", "A vida", "Eu tentando", "Tentando ser adulto", "Sem café"],
    meio: ["não ajuda", "me confunde", "é complicado", "é engraçado", "me faz rir"],
    fim: ["😂", "🤣", "😅", "🤪", "😎"]
  },
  viagem: {
    inicio: ["Explorando", "Vivendo", "Descobrindo", "Viajando", "Conhecendo"],
    meio: ["novos lugares", "o mundo", "novas histórias", "novas culturas", "novas aventuras"],
    fim: ["✈️", "🌍", "🏖️", "🏔️", "🚢"]
  }
};

// Seleção de categoria
document.querySelectorAll(".catBtn").forEach(botao => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.cat;
    document.getElementById("resultado").innerText =
      `Categoria selecionada: ${botao.innerText}`;
  });
});

// Gerar legenda
function gerarLegenda() {
  const cat = categorias[categoriaAtual];
  const inicio = cat.inicio[Math.floor(Math.random() * cat.inicio.length)];
  const meio = cat.meio[Math.floor(Math.random() * cat.meio.length)];
  const fim = cat.fim[Math.floor(Math.random() * cat.fim.length)];

  document.getElementById("resultado").innerText =
    `${inicio} ${meio} ${fim}`;
}
