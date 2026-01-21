// Categoria atual selecionada
let categoriaAtual = "motivacional";

// Todas as categorias com 50 frases cada
const categorias = {
  motivacional: {
    inicio: [
      "Acredite","Nunca desista","Tudo começa","Não desista nunca","O segredo é",
      "Confie","Sempre siga","O poder está","A chave é","Nunca pare",
      "Mantenha a fé","A jornada começa","O sucesso vem","Tenha coragem","Levante-se",
      "A vida ensina","Tudo é possível","Comece agora","Persista sempre","Sonhe alto",
      "Não olhe para trás","O caminho é","A determinação","Não tenha medo","Siga firme",
      "O futuro espera","Cada passo conta","A mente é","O foco transforma","Tudo depende de você",
      "Acredite em você","Não se limite","O universo conspira","Tenha paciência","Siga seu coração",
      "O momento é agora","A disciplina vence","Mantenha o ritmo","Tudo é aprendizado","Levante e lute",
      "A persistência","A força interior","Cada dia importa","A esperança","A ação gera",
      "Nunca é tarde","Seja ousado","O desafio fortalece","Transforme seu medo","A cada amanhecer"
    ],
    meio: [
      "em você","com foco","com coragem","sem medo","todos os dias",
      "para vencer","em cada passo","com disciplina","com determinação","sem desculpas",
      "na direção certa","com perseverança","com amor próprio","sem limites","com confiança",
      "na jornada","para crescer","com energia","em seus sonhos","com paixão",
      "com determinação","na caminhada","com atitude","com fé","na sua missão",
      "com garra","em cada desafio","com vontade","para conquistar","com esforço",
      "na busca pelo melhor","com foco total","em cada objetivo","com entusiasmo","com disciplina diária",
      "com persistência","em cada momento","na vida","com dedicação","com esperança",
      "com ousadia","para transformar","com alegria","em cada amanhecer","com ação",
      "com visão","em todos os caminhos","com força interior","com ousadia total","na direção dos sonhos"
    ],
    fim: [
      "✨","🔥","🚀","💪","💯","🌟","🏆","💥","🎯","🙌",
      "🎉","🏅","🌈","🌞","💎","⚡","🌺","💫","🎆","💡",
      "🌻","🍀","💐","🏹","🦅","💖","🌊","🔥🔥","✨✨","💪💪",
      "🚀🚀","🌟🌟","🎯🎯","🏆🏆","🎉🎉","💎💎","⚡⚡","💫💫","💡💡","🌈🌈",
      "🏅🏅","🙌🙌","🌺🌺","🌊🌊","❤️"
    ]
  },

  fitness: {
    inicio: [
      "Treine","Supere-se","Disciplina","Força","Determinação",
      "Persistência","Dedicação","Energia","Foco","Motivação",
      "Esforço","Resistência","Garota/Garoto fitness","Suor","Coragem",
      "Levante","Movimente-se","Não pare","Conquiste","Transforme-se",
      "Mantenha o ritmo","Compromisso","Disciplina diária","Atitude","Força interior",
      "Treino intenso","Vença seus limites","Corpo saudável","Energia positiva","Atitude positiva",
      "Disciplina total","Mantenha o foco","Esforce-se","Superação","Rotina saudável",
      "Treino constante","Respeite seu corpo","Vença desafios","Mantenha a disciplina","Suor e foco",
      "Treine com garra","Motivação diária","Transforme o corpo","Persistência diária","Atitude fitness",
      "Corpo e mente","Força e foco","Disciplina e dedicação","Treino diário","Superação constante"
    ],
    meio: [
      "todos os dias","sem desculpas","com disciplina","com determinação","na rotina",
      "para evoluir","em cada treino","com dedicação","para conquistar","com foco",
      "na saúde","com energia","para se superar","com constância","para alcançar metas",
      "com motivação","em cada exercício","com força","para melhorar","na jornada fitness",
      "com garra","em cada desafio","para transformar","com disciplina total","para atingir objetivos",
      "em cada repetição","com consistência","na busca pelo melhor","para fortalecer","com coragem",
      "em cada movimento","para resultados","com persistência","na prática","em cada meta",
      "com intensidade","para se desafiar","na rotina diária","para crescer","com determinação",
      "com paixão","para vencer limites","em cada conquista","com disciplina diária","para evoluir corpo e mente",
      "com foco absoluto","em cada atividade","com energia positiva","para transformar seu corpo","com força interior"
    ],
    fim: [
      "💪","🏋️","🔥","⚡","🏆","🌟","💥","🦾","🥇","🏅",
      "💯","💪💪","🔥🔥","🚀","✨","💪🔥","🏋️‍♂️","🏋️‍♀️","💥💥","💪⚡",
      "🏆🏆","🌟🌟","💪✨","🥇💪","🔥💪","⚡💪","💥🏋️","💪🏆","🏅💪","💪🌟",
      "💯💪","🏋️‍♂️💪","🏋️‍♀️💪","💪🔥","💪✨","💪⚡","💥💪","💪💥","💪🏆","💪🥇",
      "🔥💪","⚡💪","💪🌟","💪💯","🏆💪","💪🏅","💪🏋️","💪🏋️‍♂️","💪🏋️‍♀️","💪⚡💥"
    ]
  },

  negocios: {
    inicio: ["Negócios","Sucesso","Resultados","Estratégia","Crescimento","Empreenda","Invista","Inove","Planeje","Conquiste",
             "Lidere","Cresça","Foque","Realize","Avance","Construa","Acredite","Supere","Organize","Prospere",
             "Transforme","Ouse","Aprenda","Desenvolva","Rumo ao topo","Execute","Decida","Persista","Motivo","Empreendimento",
             "Oportunidade","Potencial","Visão","Meta","Planejamento","Habilidade","Disciplina","Foco total","Consistência","Resultado",
             "Compromisso","Dedicação","Energia","Determinação","Estratégia","Progresso","Crescimento","Conquista","Iniciativa","Sucesso garantido"],
    meio: ["exigem ação","vem com disciplina","nasce da constância","com dedicação","com foco",
           "é necessário esforço","para crescer","com planejamento","na prática","para vencer",
           "com persistência","na jornada","com estratégia","para conquistar","com motivação",
           "com coragem","na execução","em cada passo","com visão","com inovação",
           "com criatividade","para resultados","em cada desafio","com decisão","na liderança",
           "para alcançar metas","com consistência","na busca do sucesso","com energia","com atitude",
           "com disciplina","em cada projeto","para prosperar","com determinação","com comprometimento",
           "para evoluir","na ação","com paixão","com iniciativa","em cada oportunidade",
           "com esforço contínuo","para crescer","em cada meta","com inteligência","para realizar",
           "com estratégia inteligente","em cada objetivo","para avançar","com foco total","com ação"],
    fim: ["📈","💼","🚀","💡","🏆","📊","💰","🏅","✨","💥","📣","🎯","🔑","🏛️","📌",
          "💳","🗂️","📑","💹","🏢","💎","📋","📝","📎","🔝","🛠️","⚡","🎖️","🏔️","🌟",
          "💼💼","🏆🏆","🚀🚀","📈📈","💡💡","🎯🎯","🏅🏅","💥💥","💰💰","✨✨",
          "📊📊","📝📝","📌📌","🔑🔑","🛠️🛠️","💳💳","🏛️🏛️","📎📎","🗂️🗂️","💹💹"]
  },

  romantico: {
    inicio: ["Amor","Você","Meu coração","Paixão","Sentimento","Amizade","Afeto","Carinho","Desejo","Encanto",
             "Beleza","Amado(a)","Ternura","Sorriso","Amar","Sentir","Cuidado","Abraço","Emoção","Desejo profundo",
             "Carinho puro","Doce amor","Fascínio","Romance","Encanto do coração","Afeto sincero","Amor verdadeiro","Paixão intensa","Atração","Desejo ardente",
             "Sentimentos","Amor eterno","Amor bonito","Meu bem","Meu querido","Meu amor","Minha paixão","Meu tesouro","Minha luz","Meu tudo",
             "Coração apaixonado","Amor puro","Paixão verdadeira","Afeto intenso","Emoção forte","Amor sem fim","Meu encanto","Meu desejo","Meu abraço","Minha ternura"],
    meio: ["é tudo","bate por você","me completa","é infinito","me inspira","me faz sorrir","me encanta","me emociona","me envolve","me aquece",
           "me cativa","me seduz","me faz sonhar","me motiva","me ilumina","me faz feliz","me transforma","me apaixona","me conquista","me fascina",
           "me eleva","me faz vibrar","me toca","me envolve totalmente","me completa por inteiro","me faz amar","me faz sentir","me faz suspirar","me abraça","me abraça forte",
           "me enlouquece","me apaixona ainda mais","me faz sonhar alto","me deixa feliz","me inspira amor","me deixa leve","me dá alegria","me faz sorrir sempre","me aquece o coração","me faz desejar",
           "me fascina totalmente","me faz apaixonar","me envolve profundamente","me cativa sempre","me inspira ternura","me faz vibrar de emoção","me deixa feliz de verdade","me completa completamente","me encanta a cada dia","me apaixona intensamente"],
    fim: ["❤️","😍","💖","💕","💞","💓","💗","💘","💌","💟","💝","❣️","💛","💚","💙","💜","🧡","🤍","🤎","🖤",
          "💔","💟💟","❤️❤️","💖💖","💕💕","💞💞","💓💓","💗💗","💘💘","💌💌","💝💝","❣️❣️","💛💛","💚💚","💙💙","💜💜","🧡🧡","🤍🤍","🤎🤎","🖤🖤",
          "💔💔","❤️💖","💖💕","💕💞","💞💓","💓💗","💗💘","💘💌","💌💝","💝❣️"]
  },

  engracado: {
    inicio: ["Quando eu acordo","A vida","Eu tentando","Tentando ser adulto","Sem café","Hoje eu","Meu chefe","Meu amigo","A reunião","O despertador",
             "O trabalho","O trânsito","Minha vida","Meu cachorro","A dieta","Meu chefe disse","O professor","A escola","A aula","O notebook",
             "O celular","Minha preguiça","O fim de semana","O café da manhã","A internet","O Wi-Fi","O elevador","A fila","Meu time","O chefe de plantão",
             "Meu almoço","O horário","A dieta falhou","O banho","A academia","O videogame","O projeto","O chefe irritado","A segunda-feira","O chefe mandou",
             "O almoço atrasado","O colega","A reunião longa","O café frio","O trabalho atrasado","Meu celular tocou","A internet caiu","Meu time perdeu","Meu chefe gritou","A preguiça venceu"],
    meio: ["não ajuda","me confunde","é complicado","é engraçado","me faz rir","me deixa cansado","me faz dormir","me faz gritar","me irrita","me deixa louco",
           "me faz sorrir","me deixa confuso","me faz pensar","me faz reclamar","me deixa feliz","me faz chorar","me deixa nervoso","me faz esperar","me deixa animado","me faz rir alto",
           "me faz atrasar","me deixa bravo","me faz desistir","me deixa confuso","me deixa alegre","me faz surtar","me deixa cansado","me faz pular","me deixa irritado","me faz repetir",
           "me faz sonhar","me deixa animado","me faz tremer","me deixa feliz","me faz confundir","me deixa triste","me faz rir muito","me deixa surpreso","me faz perder","me deixa emocionado",
           "me faz esquecer","me deixa animado","me faz correr","me deixa pensativo","me faz dançar","me deixa alegre","me faz dormir","me deixa confuso","me faz rir demais","me deixa feliz"],
    fim: ["😂","🤣","😅","🤪","😎","🤣🤣","😂😂","😆","😹","😜","🙃","😝","🤭","😏","😛","😋","😬","🤐","🤔","😇",
          "🥳","🤩","😺","😸","😻","😼","😽","😹","😾","🙀","😿","😾😾","😹😹","😸😸","😻😻","😼😼","😽😽","🙀🙀","😿😿","🥴",
          "😝😝","🤪🤪","😅😅","😆😆","😎😎","🤣😂","😂🤣","😆😂","😜😜","🙃🙃"]
  },

  viagem: {
    inicio: ["Explorando","Vivendo","Descobrindo","Viajando","Conhecendo","Visitando","Passeando","Aventurando","Explorando o mundo","Conhecendo cidades",
             "Viajando sempre","Desbravando","Descobrindo culturas","Explorando novos lugares","Viajando sozinho","Aventura","Turismo","Excursão","Passeio incrível","Rumo ao desconhecido",
             "Descoberta","Exploração","Viagem dos sonhos","Conhecendo pessoas","Desfrutando","Em cada cidade","Na estrada","Com mochila","Descobrindo tesouros","Rumo à aventura",
             "No avião","No trem","No ônibus","Explorando praias","Explorando montanhas","Aventuras incríveis","Na natureza","Passeando pelo mundo","Descobrindo paisagens","Viajando com amigos",
             "Explorando cidades históricas","Conhecendo monumentos","Viajando e aprendendo","Descobrindo gastronomia","Explorando ilhas","Rumo ao desconhecido","Em cada trilha","Descobrindo segredos","Explorando aventuras","Descobrindo horizontes"],
    meio: ["novos lugares","o mundo","novas histórias","novas culturas","novas aventuras","paisagens incríveis","praias paradisíacas","montanhas altas","cidades históricas","culinária local",
           "experiências únicas","roteiros secretos","pessoas incríveis","trilhas maravilhosas","lugares exóticos","paisagens de tirar o fôlego","experiências inesquecíveis","destinos incríveis","viagens fantásticas","cidades encantadoras",
           "pontos turísticos","novos horizontes","aventuras emocionantes","descobertas incríveis","lugares deslumbrantes","experiências autênticas","novos sabores","viagem cultural","cidades vibrantes","exploração intensa",
           "roteiros inusitados","experiências locais","lugares icônicos","viagem relaxante","aventuras radicais","praias secretas","montanhas incríveis","viagem de sonho","experiências únicas","descobertas fantásticas",
           "roteiros incríveis","pontos históricos","destinos secretos","experiências memoráveis","paisagens sensacionais","viagem inesquecível","exploração cultural","aventuras pela natureza","roteiros imperdíveis","novos desafios"],
    fim: ["✈️","🌍","🏖️","🏔️","🚢","🏕️","🗺️","🌄","🌅","🌊","🌴","⛰️","🏜️","🏝️","🛳️","🏞️","🚶‍♂️","🚶‍♀️","🧭","🎒",
          "🏟️","🏰","🕌","⛩️","🏯","🗽","🏙️","🛶","🚵‍♂️","🚵‍♀️","🪂","🏄‍♂️","🏄‍♀️","🤿","⛷️","🏂","🛶","🛫","🛬","🛥️",
          "🏔️🏔️","🌊🌊","🏖️🏖️","🌍🌍","✈️✈️","🗺️🗺️","🎒🎒","🌴🌴","🚵🚵","🏞️🏞️"]
  }
};

// Seleção de categoria
