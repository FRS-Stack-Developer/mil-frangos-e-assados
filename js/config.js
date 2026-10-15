/* ==========================================================================
   CONFIGURAÇÕES DA LOJA
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   Aqui ficam: nome da loja, WhatsApp, Instagram, horários, preços,
   textos e imagens.

   Dicas rápidas:
   - Mantenha as aspas "..." em volta dos textos.
   - Não apague as vírgulas no fim das linhas.
   - Depois de salvar, atualize a página no navegador (F5) para ver.
   ========================================================================== */

window.CONFIG = {

  /* ------------------------------------------------------------------------
     1) LOJA
     ------------------------------------------------------------------------ */
  loja: {
    nome: "Mil Frangos e Assados",
    // Frase curta usada no rodapé e no topo do cardápio
    slogan: "Frango assado de verdade, só aos fins de semana.",
  },

  /* ------------------------------------------------------------------------
     2) CONTATO E REDES SOCIAIS
     ------------------------------------------------------------------------ */
  contato: {
    // Link do WhatsApp da loja (o mesmo do QR Code da conta comercial).
    // Todos os botões de WhatsApp do site abrem este link.
    linkWhatsapp: "https://wa.me/message/WJ3HN3EJOJ66M1",

    // Número do WhatsApp do jeito que o WhatsApp reconhece a conta. SÓ NÚMEROS.
    // ATENÇÃO: a conta da loja está registrada SEM o 9 da frente
    // (553175576178). Foi o próprio link do QR Code que mostrou isso.
    // Com o 9 (5531975576178) o link não encontra a conta.
    // Com o número preenchido, o pedido do carrinho já chega escrito na conversa.
    whatsapp: "553175576178",

    // Como o telefone aparece escrito no site (pode ter o 9 normalmente)
    telefoneExibicao: "(31) 97557-6178",

    // Mensagem que já aparece escrita ao clicar nos botões (só com o número)
    mensagemWhatsapp: "Olá! Vim pelo site e gostaria de fazer um pedido.",

    // Instagram: só o nome do perfil, sem o @ e sem o link.
    // Exemplo: para instagram.com/frangodofulano, escreva "frangodofulano"
    instagram: "mil_frangos",

    // Endereço (opcional). Se deixar vazio "", ele não aparece no site.
    endereco: "Rua Rio das Velhas, 1310, Santa Luzia",
    // Link do Google Maps (opcional). Se vazio, o endereço aparece sem link.
    linkMapa: "https://www.google.com/maps/search/?api=1&query=Rua%20Rio%20das%20Velhas%2C%201310%2C%20Santa%20Luzia%2C%20MG",
  },

  /* ------------------------------------------------------------------------
     3) FUNCIONAMENTO
     diaSemana: 0 = domingo, 1 = segunda ... 6 = sábado
     Horários no formato 24h "HH:MM".
     ------------------------------------------------------------------------ */
  funcionamento: {
    dias: "Sábados e domingos",
    horarios: [
      { dia: "Sábado",  diaSemana: 6, abre: "10:00", fecha: "14:00" },
      { dia: "Domingo", diaSemana: 0, abre: "10:00", fecha: "14:00" },
    ],
    // Fuso horário usado para mostrar "Aberto agora" / "Fechado agora"
    fusoHorario: "America/Sao_Paulo",
    // Recado que aparece na seção de horários
    aviso: "Faça seu pedido com antecedência pelo WhatsApp e garanta o seu frango quentinho.",
  },

  /* ------------------------------------------------------------------------
     4) PEDIDOS
     O cliente monta o pedido no site e a mensagem chega pronta no WhatsApp.
     Deixe true (sim) ou false (não) para cada forma de receber.
     ------------------------------------------------------------------------ */
  pedido: {
    entrega: true,    // o cliente pode pedir para entregar em casa
    retirada: true,   // o cliente pode buscar no local
    // Frase exibida abaixo do total (deixe "" para esconder)
    observacaoTotal: "Taxa de entrega, se houver, é combinada pelo WhatsApp.",
  },

  /* ------------------------------------------------------------------------
     5) TEXTOS PRINCIPAIS
     Coloque uma parte do texto entre *asteriscos* para destacá-la em dourado.
     ------------------------------------------------------------------------ */
  textos: {
    heroTitulo: "O sabor que deixa seu fim de semana *muito mais gostoso!*",
    heroSubtitulo: "Frango assado douradinho, crocante por fora e suculento por dentro, com batatas assadas no ponto. Do forno direto para a sua mesa.",

    cardapioTitulo: "Nosso Cardápio",
    cardapioSubtitulo: "Três opções caprichadas, todas com batata: frango com recheio de bacon e linguiça assada, galeto e o nosso frango com batata.",

    destaqueTitulo: "Frango assado, douradinho por fora, suculento por dentro e *cheio de sabor!*",
    destaqueTexto: "Temperado com carinho e assado sem pressa até a pele ficar dourada e crocante. Com batatas assadas do lado, é o almoço de fim de semana que a família inteira espera.",
    destaqueItens: [
      "Pele dourada e crocante",
      "Carne suculenta e macia",
      "Tempero caseiro da casa",
      "Batatas assadas no ponto",
    ],

    contatoTitulo: "Bateu a fome? *Chama a gente!*",
    contatoTexto: "Pedidos e informações pelo WhatsApp. Novidades, fotos e promoções do fim de semana no Instagram.",
  },

  /* ------------------------------------------------------------------------
     6) IMAGENS
     Pode usar um link da internet (https://...) ou um arquivo da pasta
     images/ (exemplo: "images/minha-foto.jpg").
     Fotos atuais: bancos gratuitos Unsplash e Pexels (créditos no README).
     O ideal é trocar por fotos reais dos seus frangos!
     ------------------------------------------------------------------------ */
  imagens: {
    topo:          "https://images.unsplash.com/photo-1615557960916-5f4791effe9d",
    destaque:      "https://images.unsplash.com/photo-1630564510761-a560db92a09b",
    destaqueExtra: "https://images.pexels.com/photos/29640883/pexels-photo-29640883.jpeg",
    funcionamento: "https://images.pexels.com/photos/13458086/pexels-photo-13458086.jpeg",
  },

  /* ------------------------------------------------------------------------
     7) CARDÁPIO
     preco: use número com PONTO, sem R$. Exemplo: 59.90
            Deixe null enquanto não tiver o preço (aparece "Consulte").
     etiqueta: texto pequeno que aparece em cima da foto
     recheio / batata / farinha: true (com) ou false (sem)
     selo: etiqueta opcional na foto (ou "" para nenhuma)
     foco: opcional, ajusta o enquadramento da foto (ex.: "50% 30%")
     ------------------------------------------------------------------------ */
  cardapio: [
    {
      id: "frango-recheio-batata-farinha",
      nome: "Frango com recheio, batata e farinha",
      descricao: "Frango assado recheado com bacon e linguiça assada, acompanhado de batata e farinha.",
      etiqueta: "Recheado",
      recheio: true, batata: true, farinha: true,
      preco: 69.00,
      imagem: "https://images.pexels.com/photos/10821324/pexels-photo-10821324.jpeg",
      selo: "Mais completo",
    },
    {
      id: "galeto-batata-farinha",
      nome: "Frango galeto com batata e farinha",
      descricao: "Galeto assado no tempero da casa, pele dourada e crocante, acompanhado de batata e farinha.",
      etiqueta: "Galeto",
      recheio: false, batata: true, farinha: true,
      preco: 39.00,
      imagem: "https://images.pexels.com/photos/5956831/pexels-photo-5956831.jpeg",
      selo: "",
      foco: "62% 58%",
    },
    {
      id: "frango-batata",
      nome: "Frango com batata",
      descricao: "Frango assado no tempero da casa, pele crocante e carne suculenta, acompanhado de batata.",
      etiqueta: "Tradicional",
      recheio: false, batata: true, farinha: false,
      preco: 50.00,
      imagem: "https://images.unsplash.com/photo-1742455259385-654d727825f1",
      selo: "",
    },
  ],
};
