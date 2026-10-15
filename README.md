# Mil Frangos e Assados

Página de divulgação (landing page) de uma loja de frango assado que funciona aos **sábados e domingos**.
Feita em HTML, CSS e JavaScript puros, sem banco de dados e sem servidor, pronta para o **GitHub Pages**.

O cliente consegue:

- ver as fotos e o cardápio (frango com recheio de bacon e linguiça, galeto e frango com batata);
- adicionar itens e enviar o **pedido pronto pelo WhatsApp** (itens, quantidades, total, entrega ou retirada);
- ver se a loja está **aberta agora** (calculado pelo horário de Brasília);
- abrir o Instagram e o endereço no Google Maps.

---

## Estrutura dos arquivos

```text
/
├── index.html            Página (estrutura)
├── css/
│   └── style.css         Visual: cores, fontes, layout e animações
├── js/
│   ├── config.js         >>> CONFIGURAÇÕES DA LOJA (edite aqui) <<<
│   └── script.js         Funcionamento (não precisa mexer)
├── images/               Logo, ícones e imagem reserva
├── fonts/                Fontes Fraunces e Plus Jakarta Sans (licença livre)
├── site.webmanifest      Ícone ao "adicionar à tela inicial" no celular
├── .nojekyll             Faz o GitHub Pages publicar os arquivos como estão
└── README.md             Este guia
```

---

## Como editar (tudo em `js/config.js`)

Abra `js/config.js` no Bloco de Notas, VS Code ou direto no GitHub (ícone de lápis).
Mantenha as aspas `"..."` e as vírgulas no fim das linhas. Salve e atualize a página (F5).

| O que trocar | Onde, no `config.js` | Exemplo |
|---|---|---|
| Nome da loja | `loja.nome` | `"Mil Frangos e Assados"` |
| Link do WhatsApp | `contato.linkWhatsapp` | `"https://wa.me/message/WJ3HN3EJOJ66M1"` (link do QR Code da conta comercial) |
| Número do WhatsApp | `contato.whatsapp` | `"553175576178"` (só números, do jeito que o WhatsApp reconhece a conta: a da loja é SEM o 9 da frente) |
| Telefone escrito no site | `contato.telefoneExibicao` | `"(31) 97557-6178"` |
| Mensagem inicial do WhatsApp | `contato.mensagemWhatsapp` | `"Olá! Vim pelo site..."` |
| Instagram | `contato.instagram` | `"frangodofulano"` (sem @ e sem link) |
| Endereço e mapa | `contato.endereco` e `contato.linkMapa` | deixe `""` para esconder |
| Dias e horários | `funcionamento.horarios` | `abre: "10:00", fecha: "14:00"` |
| Entrega e retirada | `pedido.entrega` e `pedido.retirada` | `true` ou `false` |
| Textos principais | `textos` | use `*asteriscos*` para destacar em dourado |
| Fotos do topo e do destaque | `imagens` | link `https://...` ou `"images/foto.jpg"` |
| Produtos, descrições e fotos | `cardapio` | um bloco `{ ... }` por produto |
| **Preços** | `preco` de cada produto | `59.90` (com ponto, sem R$) |

### Preços

Cada item tem o seu `preco`. Para mudar, troque o número (com ponto, sem R$). Se deixar `null`, o item aparece como **"Consulte"**:

```js
preco: 59.90,
```

Com os preços preenchidos, o site mostra os valores nos cards e calcula o total do pedido automaticamente.

### Horários

```js
horarios: [
  { dia: "Sábado",  diaSemana: 6, abre: "10:00", fecha: "14:00" },
  { dia: "Domingo", diaSemana: 0, abre: "10:00", fecha: "14:00" },
],
```

`diaSemana`: 0 = domingo, 1 = segunda ... 6 = sábado. Os selos "Aberto agora" e "Fechado agora" usam esses horários.

### Título e prévia do link (SEO)

O título da aba e o texto que aparece quando o link é compartilhado no WhatsApp ficam no topo do `index.html`
(linhas `<title>`, `description` e `og:...`). Se trocar o nome da loja, atualize lá também.

---

## Fotos

As fotos atuais são **ilustrativas**, de bancos gratuitos (Unsplash e Pexels), carregadas direto dos servidores deles.
O ideal é trocar por **fotos reais dos seus frangos**: o cliente confia mais e recebe exatamente o que viu.

Para usar suas fotos:

1. Coloque o arquivo na pasta `images/` (ex.: `images/frango-inteiro.jpg`).
2. No `config.js`, troque o link da foto pelo caminho: `imagem: "images/frango-inteiro.jpg",`
3. Tamanhos recomendados: topo 1200 x 1200 px (quadrada), destaque 1000 x 1250 px (em pé), cardápio 1000 x 750 px.
4. Para deixar leve, comprima antes em [squoosh.app](https://squoosh.app) (formato WebP ou JPG, qualidade 75).

Se alguma foto não carregar, o site mostra automaticamente uma imagem reserva (`images/sem-foto.svg`).

---

## Testar no computador

Dê dois cliques no `index.html`. Ele abre no navegador e funciona normalmente (as fotos precisam de internet).

---

## Publicar no GitHub Pages (grátis)

1. Crie uma conta em [github.com](https://github.com) (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `mil-frangos-e-assados`), deixe **Public** e clique em **Create repository**.
3. Na tela do repositório, clique em **uploading an existing file**.
4. Arraste **todo o conteúdo desta pasta** (o `index.html` e as pastas `css`, `js`, `images`, `fonts`, além dos demais arquivos).
   O `index.html` precisa ficar na raiz, não dentro de outra pasta.
5. Clique em **Commit changes**.
6. Vá em **Settings > Pages**. Em **Build and deployment**, escolha **Source: Deploy from a branch**,
   depois **Branch: main** e pasta **/ (root)**. Clique em **Save**.
7. Aguarde 1 ou 2 minutos. O endereço aparece no topo dessa mesma tela, no formato:
   `https://SEU-USUARIO.github.io/mil-frangos-e-assados/`

Para atualizar depois: edite o arquivo no próprio GitHub (lápis) ou envie de novo pelo **Add file > Upload files**.
As mudanças entram no ar em cerca de 1 minuto.

Opcional: em **Settings > Pages > Custom domain** dá para usar um domínio próprio (ex.: `www.milfrangoseassados.com.br`).

---

## Checklist antes de divulgar

- [x] Link do WhatsApp em `contato.linkWhatsapp`
- [x] Número do WhatsApp em `contato.whatsapp`
- [x] Perfil do Instagram em `contato.instagram`
- [x] Preços em cada item do `cardapio`
- [ ] Horários conferidos em `funcionamento.horarios`
- [ ] Endereço e link do mapa conferidos
- [ ] Fotos reais (recomendado)
- [ ] Título e descrição no topo do `index.html`
- [ ] Teste um pedido pelo celular até chegar no WhatsApp

---

## Privacidade

O site não guarda nenhum dado. Nome, endereço e observações digitados no pedido vão apenas
na mensagem que o próprio cliente envia pelo WhatsApp.

---

## Créditos

**Fontes** (licença SIL Open Font License, arquivos em `fonts/`): Fraunces e Plus Jakarta Sans.

**Ícones**: [Bootstrap Icons](https://icons.getbootstrap.com) (licença MIT). WhatsApp e Instagram são marcas de seus donos
e aparecem apenas para indicar os links.

**Fotos** (uso gratuito pelas licenças [Unsplash](https://unsplash.com/license) e [Pexels](https://www.pexels.com/license/)):

| Uso no site | Autor / link |
|---|---|
| Topo | Cisco Lin, [Unsplash](https://unsplash.com/photos/YMkX5NjURhk) |
| Destaque | Amanda Lim, [Unsplash](https://unsplash.com/photos/e_A-SFvqV08) |
| Batatas do destaque | [Pexels 29640883](https://www.pexels.com/photo/29640883/) |
| Seção de horários | [Pexels 13458086](https://www.pexels.com/photo/13458086/) |
| Frango com recheio, batata e farinha | [Pexels 10821324](https://www.pexels.com/photo/10821324/) |
| Frango galeto com batata e farinha | [Pexels 5956831](https://www.pexels.com/photo/5956831/) |
| Frango com batata | chaewon you, [Unsplash](https://unsplash.com/photos/o56vOzhRzUY) |
