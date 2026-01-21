let categoriaAtual = "";

const categorias = {
  motivacional: {
    inicio: ["Acredite","Nunca desista","Tudo começa","Confie","Sempre siga"],
    meio: ["em você","com foco","com coragem","sem medo","todos os dias"],
    fim: ["✨","🔥","🚀","💪","💯"]
  },
  fitness: {
    inicio: ["Treine","Supere-se","Disciplina","Força","Determinação"],
    meio: ["todos os dias","sem desculpas","com disciplina","com determinação","na rotina"],
    fim: ["💪","🏋️","🔥","⚡","🏆"]
  },
  negocios: {
    inicio: ["Negócios","Sucesso","Resultados","Estratégia","Crescimento"],
    meio: ["exigem ação","vem com disciplina","nasce da constância","com dedicação","com foco"],
    fim: ["📈","💼","🚀","💡","🏆"]
  },
  romantico: {
    inicio: ["Amor","Você","Meu coração","Paixão","Sentimento"],
    meio: ["é tudo","me completa","me inspira","me faz sorrir","me encanta"],
    fim: ["❤️","😍","💖","💕","💞"]
  },
  engracado: {
    inicio: ["Quando eu acordo","A vida","Eu tentando","Tentando ser adulto","Sem café"],
    meio: ["não ajuda","me confunde","é engraçado","me faz rir","me deixa cansado"],
    fim: ["😂","🤣","😅","🤪","😎"]
  },
  viagem: {
    inicio: ["Explorando","Vivendo","Descobrindo","Viajando","Conhecendo"],
    meio: ["novos lugares","o mundo","novas histórias","novas culturas","novas aventuras"],
    fim: ["✈️","🌍","🏖️","🏔️","🚢"]
  }
};

// Seleção da categoria
document.querySelectorAll(".catBtn").forEach(botao => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.cat;
    document.getElementById("resultado").innerText = `Categoria selecionada: ${botao.innerText}`;
  });
});

// Gerar legenda
document.querySelector(".gerar").addEventListener("click", () => {
  if(!categoriaAtual){
    alert("Selecione uma categoria primeiro!");
    return;
  }
  const cat = categorias[categoriaAtual];
  const inicio = cat.inicio[Math.floor(Math.random() * cat.inicio.length)];
  const meio = cat.meio[Math.floor(Math.random() * cat.meio.length)];
  const fim = cat.fim[Math.floor(Math.random() * cat.fim.length)];

  document.getElementById("resultado").innerText = `${inicio} ${meio} ${fim}`;
});

// Copiar legenda
document.querySelector(".copiar").addEventListener("click", () => {
  const texto = document.getElementById("resultado").innerText;
  if(texto === "" || texto.startsWith("Categoria")) return;
  navigator.clipboard.writeText(texto).then(() => alert("Legenda copiada!"));
});

// Compartilhar WhatsApp
document.querySelector(".whatsapp").addEventListener("click", () => {
  const texto = document.getElementById("resultado").innerText;
  if(texto === "" || texto.startsWith("Categoria")) return;
  const link = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(link, "_blank");
});
