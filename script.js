let categoriaAtual = "motivacional";

const categorias = {
  motivacional: {
    inicio: [
      "Acredite", "Nunca desista", "Tudo começa", "Não desista nunca", "O segredo é",
      "Confie", "Sempre siga", "O poder está", "A chave é", "Nunca pare",
      "Mantenha a fé", "A jornada começa", "O sucesso vem", "Tenha coragem", "Levante-se",
      "A vida ensina", "Tudo é possível", "Comece agora", "Persista sempre", "Sonhe alto",
      "Não olhe para trás", "O caminho é", "A determinação", "Não tenha medo", "Siga firme",
      "O futuro espera", "Cada passo conta", "A mente é", "O foco transforma", "Tudo depende de você",
      "Acredite em você", "Não se limite", "O universo conspira", "Tenha paciência", "Siga seu coração",
      "O momento é agora", "A disciplina vence", "Mantenha o ritmo", "Tudo é aprendizado", "Levante e lute",
      "A persistência", "A força interior", "Cada dia importa", "A esperança", "A ação gera",
      "Nunca é tarde", "Seja ousado", "O desafio fortalece", "Transforme seu medo", "A cada amanhecer"
    ],
    meio: [
      "em você", "com foco", "com coragem", "sem medo", "todos os dias",
      "para vencer", "em cada passo", "com disciplina", "com determinação", "sem desculpas",
      "na direção certa", "com perseverança", "com amor próprio", "sem limites", "com confiança",
      "na jornada", "para crescer", "com energia", "em seus sonhos", "com paixão",
      "com determinação", "na caminhada", "com atitude", "com fé", "na sua missão",
      "com garra", "em cada desafio", "com vontade", "para conquistar", "com esforço",
      "na busca pelo melhor", "com foco total", "em cada objetivo", "com entusiasmo", "com disciplina diária",
      "com persistência", "em cada momento", "na vida", "com dedicação", "com esperança",
      "com ousadia", "para transformar", "com alegria", "em cada amanhecer", "com ação",
      "com visão", "em todos os caminhos", "com força interior", "com ousadia total", "na direção dos sonhos"
    ],
    fim: [
      "✨", "🔥", "🚀", "💪", "💯",
      "🌟", "🏆", "💥", "🎯", "🙌",
      "🎉", "🏅", "🌈", "🌞", "💎",
      "⚡", "🌺", "💫", "🎆", "💡",
      "🌻", "🍀", "💐", "🏹", "🦅",
      "💖", "🌊", "🔥🔥", "✨✨", "💪💪",
      "🚀🚀", "🌟🌟", "🎯🎯", "🏆🏆", "🎉🎉",
      "💎💎", "⚡⚡", "💫💫", "💡💡", "🌈🌈",
      "🏅🏅", "🙌🙌", "🌺🌺", "🍀🍀", "🌞🌞",
      "🦅🦅", "🏹🏹", "💐💐", "🌊🌊", "❤️"
    ]
  },

  // Exemplo da categoria Fitness (idem, 50 cada)
  fitness: {
    inicio: [
      "Treine", "Supere-se", "Disciplina", "Mova-se", "Coragem",
      "Resista", "Continue", "Avance", "Levante", "Fortaleça",
      "Persistência", "Atitude", "Ação", "Energia", "Foco total",
      "Motivação", "Determinação", "Conquiste", "Inspire-se", "Dedique-se",
      "Supere limites", "Transforme-se", "Rumo ao topo", "Sinta a força", "Quebre barreiras",
      "Empurre-se", "Progrida", "Execute", "Vença desafios", "Avance sempre",
      "Treino diário", "Disciplina constante", "Movimento é vida", "Força interior", "Desafie-se",
      "Construa seu corpo", "Movimente-se hoje", "Não pare", "Mantenha o ritmo", "Cada repetição conta",
      "Seja forte", "Cresça", "Eleve-se", "Desperte poder", "Treine com alegria",
      "Corpo e mente", "Avance com garra", "Dedicação total", "Superação", "Nunca desista"
    ],
    meio: [
      "todos os dias", "sem desculpas", "é o segredo", "para vencer", "na rotina",
      "com intensidade", "sem parar", "com disciplina", "na jornada", "em cada repetição",
      "para crescer", "com paixão", "com foco", "na direção certa", "para alcançar",
      "com energia", "com garra", "no caminho certo", "em cada treino", "para conquistar",
      "com persistência", "sem limites", "para transformar", "em cada desafio", "com determinação",
      "na busca pelo melhor", "com esforço", "para evoluir", "em cada dia", "com coragem",
      "para alcançar metas", "com dedicação", "em movimento", "com força", "no ritmo certo",
      "com ação", "na direção do sucesso", "com entusiasmo", "para se superar", "em cada objetivo",
      "com foco total", "em cada passo", "para chegar ao topo", "com constância", "na jornada diária",
      "com disciplina diária", "para evoluir sempre", "em cada momento", "com determinação total", "na caminhada"
    ],
    fim: [
      "💪", "🏋️", "🔥", "⚡", "💯",
      "🌟", "🏆", "🙌", "🎯", "🎉",
      "💎", "🌈", "🌞", "🎆", "💥",
      "💡", "✨", "🏅", "🌊", "🌺",
      "🦵", "🫀", "🫁", "🫂", "🥇",
      "🥊", "🤸", "🏃", "🏹", "🦅",
      "💫", "🔥🔥", "💪💪", "🏋️‍♂️", "🏋️‍♀️",
      "💯💯", "🌟🌟", "🎯🎯", "🏆🏆", "🎉🎉",
      "💎💎", "⚡⚡", "💫💫", "💡💡", "🌈🌈",
      "🏅🏅", "🙌🙌", "🌺🌺", "🌊🌊", "❤️"
    ]
  },

  // Outras categorias podem ser adicionadas da mesma forma
  romantico: { /* ...50 de cada */ },
  engracado: { /* ...50 de cada */ },
  negocios: { /* ...50 de cada */ },
  viagem: { /* ...50 de cada */ }
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