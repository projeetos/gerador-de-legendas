// Categoria atual selecionada
let categoriaAtual = "motivacional";

// Todas as categorias (resumidas para exemplo, você pode completar)
const categorias = {
  motivacional: {
    inicio: ["Acredite", "Nunca desista", "Tudo começa"],
    meio: ["em você", "com foco", "com coragem"],
    fim: ["✨","🔥","🚀"]
  },
  fitness: {
    inicio: ["Treine","Supere-se","Disciplina"],
    meio: ["todos os dias","sem desculpas","com determinação"],
    fim: ["💪","🏋️","🔥"]
  },
  negocios: {
    inicio: ["Negócios","Sucesso","Resultados"],
    meio: ["exigem ação","vem com disciplina","com estratégia"],
    fim: ["📈","💼","🚀"]
  },
  romantico: {
    inicio: ["Amor","Você","Meu coração"],
    meio: ["é tudo","me completa","me inspira"],
    fim: ["❤️","😍","💖"]
  },
  engracado: {
    inicio: ["Quando eu acordo","A vida","Eu tentando"],
    meio: ["não ajuda","me confunde","é engraçado"],
    fim: ["😂","🤣","😅"]
  },
  viagem: {
    inicio: ["Explorando","Vivendo","Descobrindo"],
    meio: ["novos lugares","o mundo","novas aventuras"],
    fim: ["✈️","🌍","🏖️"]
  }
};

// Seleção da categoria
document.querySelectorAll(".catBtn").forEach(botao => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.cat; // pega data-cat
    document.getElementById("resultado").innerText = `Categoria selecionada: ${botao.innerText}`;
  });
});

// Função para gerar legenda
function gerarLegenda() {
  const cat = categorias[categoriaAtual];
  if (!cat) {
    alert(`Categoria ${categoriaAtual} não encontrada!`);
    return;
  }
  const inicio = cat.inicio[Math.floor(Math.random() * cat.inicio.length)];
  const meio = cat.meio[Math.floor(Math.random() * cat.meio.length)];
  const fim = cat.fim[Math.floor(Math.random() * cat.fim.length)];

  document.getElementById("resultado").innerText = `${inicio} ${meio} ${fim}`;
}

// Copiar legenda
function copiarLegenda() {
  const texto = document.getElementById("resultado").innerText;
  if (texto === "" || texto.startsWith("Categoria")) return;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Legenda copiada!");
  });
}

// Enviar para WhatsApp
function enviarWhatsApp() {
  const texto = document.getElementById("resultado").innerText;
  if (texto === "" || texto.startsWith("Categoria")) return;
  const link = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(link, "_blank");
}
