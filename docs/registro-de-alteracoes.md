# Registro de alterações — Brasil Forte

Esta nota documenta cada tarefa concluída no desenvolvimento do site.

## Padrão de registro

Cada nova alteração deverá informar:

1. Data e nome da tarefa.
2. O que foi solicitado.
3. Como foi implementado.
4. Por que a solução foi escolhida.
5. Arquivos criados ou alterados.
6. Resultado final e próximos cuidados.

---

## 19 de agosto de 2026 — Estrutura inicial do site

### Solicitação

Criar um site institucional e comercial para a Brasil Forte usando HTML, CSS e JavaScript em arquivos separados.

### Como foi feito

Foi criada uma página única e responsiva com banner, indicadores, apresentação da empresa, serviços, resultados, obras, processo de atendimento, chamada comercial, formulário e rodapé. O comportamento do menu, comparadores, animações e formulário foi desenvolvido em JavaScript.

### Por que foi feito assim

A separação mantém o projeto simples, organizado e fácil de editar sem depender de frameworks.

### Arquivos principais

- `index.html`
- `css/style.css`
- `js/script.js`

### Resultado

Base completa e funcional pronta para refinamentos visuais e inserção dos dados reais da empresa.

---

## 19 de agosto de 2026 — Cabeçalho e navegação

### Solicitação

Deixar a barra superior mais transparente e destacar em amarelo a seção atual.

### Como foi feito

Foi aplicado fundo translúcido com desfoque no cabeçalho. O JavaScript passou a atualizar a classe ativa ao clicar e durante a rolagem.

### Por que foi feito assim

O efeito deixa o cabeçalho mais integrado ao banner, enquanto o amarelo ajuda o visitante a entender sua posição no site.

### Arquivos alterados

- `index.html`
- `css/menu.css`
- `js/script.js`

---

## 19 de agosto de 2026 — Banner principal

### Solicitação

Reduzir o título e corrigir o enquadramento do profissional.

### Como foi feito

O tamanho máximo do título foi reduzido e foram definidos enquadramentos específicos da imagem para desktop, tablet e celular.

### Por que foi feito assim

O título ganhou melhor proporção e o rosto do profissional permanece visível em diferentes tamanhos de tela.

### Arquivos alterados

- `css/menu.css`

---

## 19 de agosto de 2026 — Indicadores do banner

### Solicitação

Substituir os símbolos por instrumentos de medição e tornar o card mais transparente.

### Como foi feito

Foram desenhados em CSS quatro instrumentos diferentes: régua reta, esquadro, trena e régua dobrável. O fundo recebeu transparência e desfoque.

### Por que foi feito assim

Os instrumentos reforçam a identidade técnica da empresa sem depender de uma biblioteca externa de ícones.

### Arquivos alterados

- `index.html`
- `css/menu.css`

---

## 19 de agosto de 2026 — Seção Sobre nós

### Solicitação

Criar uma imagem com quatro profissionais trabalhando e aproximar a faixa de diferenciais da referência visual.

### Como foi feito

Foi gerada uma fotografia original de quatro profissionais trabalhando em uma laje. A faixa inferior recebeu azul-marinho/grafite, gradiente discreto, divisórias, ícones amarelos e tipografia ampliada.

### Por que foi feito assim

A imagem em atividade comunica experiência real. A faixa quase sólida preserva a leitura e reproduz a sensação premium da referência sem copiá-la literalmente.

### Arquivos criados ou alterados

- `assets/equipe-brasil-forte.png`
- `index.html`
- `css/menu.css`

---

## 19 de agosto de 2026 — Ilustrações dos serviços

### Solicitação

Criar uma ilustração para cada card da seção de serviços.

### Como foi feito

Foram produzidas seis imagens originais seguindo a mesma direção técnica, com tons grafite, azul e amarelo.

### Por que foi feito assim

Imagens próprias tornam os serviços mais fáceis de identificar e dão unidade visual à seção.

### Arquivos criados

- `assets/servico-lajes.png`
- `assets/servico-telhados.png`
- `assets/servico-piscinas.png`
- `assets/servico-banheiros.png`
- `assets/servico-reservatorios.png`
- `assets/servico-infiltracoes.png`

### Situação

As imagens estão salvas no cofre e integradas aos respectivos cards.

---

## 20 de agosto de 2026 — Integração das imagens aos serviços

### Solicitação

Dar continuidade ao projeto a partir da próxima etapa registrada: integrar as seis ilustrações à seção de serviços.

### Como foi feito

Cada card recebeu sua imagem correspondente, texto alternativo descritivo e carregamento adiado. O layout ganhou área visual com proporção uniforme, número sobreposto, gradiente para legibilidade e uma aproximação discreta ao passar o cursor.

### Por que foi feito assim

A composição torna cada solução identificável de imediato, mantém os cards consistentes e evita distorções quando a tela muda de tamanho. O carregamento adiado reduz o trabalho inicial do navegador.

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/progresso-do-projeto.md`
- `docs/registro-de-alteracoes.md`

### Resultado

As seis imagens agora fazem parte da seção “Soluções completas em impermeabilização”, preservando o estilo técnico em azul, grafite e amarelo do restante do site.

---

## 20 de agosto de 2026 — Serviços em estilo silhueta

### Solicitação

Substituir as ilustrações dos serviços por imagens em estilo silhueta.

### Como foi feito

Foi criada uma nova coleção com seis cenas em silhueta, usando azul-marinho, grafite, azul metálico e detalhes amarelos. Cada cena representa visualmente um serviço: lajes, telhados, piscinas, banheiros, reservatórios e tratamento de infiltrações.

### Por que foi feito assim

O estilo de silhueta reduz o aspecto fotográfico, dá mais unidade aos cards e reforça a identidade técnica e industrial da Brasil Forte.

### Arquivos criados

- `assets/servico-lajes-silhueta.png`
- `assets/servico-telhados-silhueta.png`
- `assets/servico-piscinas-silhueta.png`
- `assets/servico-banheiros-silhueta.png`
- `assets/servico-reservatorios-silhueta.png`
- `assets/servico-infiltracoes-silhueta.png`

### Arquivos alterados

- `index.html`
- `docs/progresso-do-projeto.md`
- `docs/registro-de-alteracoes.md`

### Resultado

Todos os cards usam agora a nova coleção em silhueta. As ilustrações anteriores foram preservadas para permitir reversão.

---

## 20 de agosto de 2026 — Carrossel de resultados reais

### Solicitação

Adicionar setas à seção “Resultados que você pode ver”, exibir os resultados de dois em dois e substituir as imagens provisórias por comparações realistas de antes e depois.

### Como foi feito

Foi criado um carrossel com duas páginas e quatro resultados: laje, infiltração em parede, piscina e banheiro. Cada card mantém o controle arrastável de comparação. As setas avançam ou voltam dois resultados por vez e um contador informa a página atual.

Foram produzidas oito imagens finais a partir de quatro composições fotográficas alinhadas, separando cada caso em um arquivo de antes e outro de depois.

### Por que foi feito assim

Os pares usam o mesmo enquadramento para que a transformação seja compreendida sem mudanças bruscas de perspectiva. A paginação de dois em dois mantém a seção compacta e permite acrescentar novos resultados futuramente.

### Arquivos criados

- `assets/resultado-laje-antes.png`
- `assets/resultado-laje-depois.png`
- `assets/resultado-infiltracao-antes.png`
- `assets/resultado-infiltracao-depois.png`
- `assets/resultado-piscina-antes.png`
- `assets/resultado-piscina-depois.png`
- `assets/resultado-banheiro-antes.png`
- `assets/resultado-banheiro-depois.png`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `js/script.js`
- `docs/registro-de-alteracoes.md`

### Resultado

A seção agora apresenta quatro comparações fotográficas, duas por página, com navegação por setas e comparador interativo em cada card.

---

## 20 de agosto de 2026 — Obras prediais e novas localidades

### Solicitação

Atualizar a seção “Conheça alguns dos nossos trabalhos” com obras realizadas na Barra Funda, em Guarulhos e na Vila Maria, destacando a atuação em edifícios da construção civil e em diferentes alturas.

### Como foi feito

Os três cards passaram a apresentar as localidades reais informadas e descrições voltadas à impermeabilização predial: áreas técnicas, lajes, coberturas, pavimentos e pontos críticos das edificações. A obra da Vila Maria recebeu destaque como um dos maiores trabalhos da empresa.

### Por que foi feito assim

Os novos textos representam melhor o porte das obras e posicionam a Brasil Forte também para serviços prediais e trabalhos em altura.

### Arquivos alterados

- `index.html`
- `docs/progresso-do-projeto.md`
- `docs/registro-de-alteracoes.md`

### Próxima etapa

Criar uma seção exclusiva para impermeabilização predial e trabalhos em altura, com conteúdo técnico e imagens reais próprias desse segmento.

---

## 20 de agosto de 2026 — Fotografias dos trabalhos prediais

### Solicitação

Criar uma imagem específica para cada card da seção de trabalhos: uma construção de prédio, um colaborador impermeabilizando um apartamento e outra obra de construção predial.

### Como foi feito

Foram produzidas três fotografias realistas. A Barra Funda recebeu uma vista ampla de edifício em construção; Guarulhos mostra um colaborador aplicando impermeabilizante no interior de um apartamento; e a Vila Maria apresenta profissionais executando serviço na parte externa de um edifício em altura.

### Por que foi feito assim

As imagens agora correspondem diretamente ao texto de cada card e demonstram tanto o porte das construções quanto a execução prática da impermeabilização, incluindo o trabalho em altura com equipamentos de proteção.

### Arquivos criados

- `assets/obra-barra-funda.png`
- `assets/obra-guarulhos.png`
- `assets/obra-vila-maria.png`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/registro-de-alteracoes.md`

### Resultado

Cada trabalho passou a ter uma fotografia própria, com enquadramento adaptado ao card e descrição acessível da cena.

---

## 20 de agosto de 2026 — Digitalização do logo oficial

### Solicitação

Criar um arquivo limpo do logo da empresa a partir de uma fotografia da marca impressa em tecido, para salvar e utilizar no site.

### Como foi feito

O símbolo arquitetônico, os arcos e os textos foram reconstruídos em formato vetorial, com linhas douradas e fundo realmente transparente. O cabeçalho passou a utilizar a nova marca no lugar do símbolo provisório “BF”.

### Por que foi feito assim

O formato SVG não perde qualidade ao ser ampliado, permanece nítido em telas de alta resolução e garante transparência verdadeira. A fotografia original foi usada apenas como referência visual.

### Arquivo criado

- `assets/logo-brasil-forte.svg`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/registro-de-alteracoes.md`

### Resultado

O projeto possui agora uma versão digital limpa do logo oficial, já aplicada ao cabeçalho e pronta para ser salva ou reutilizada.

---

## 20 de agosto de 2026 — Versão horizontal do logo no cabeçalho

### Solicitação

Corrigir a apresentação do logo no site após a versão completa ficar pequena e pouco legível no cabeçalho.

### Como foi feito

Foi criada uma versão compacta do símbolo oficial e o nome da empresa foi posicionado ao lado em formato horizontal. O arquivo completo do logo foi preservado para outros usos.

### Por que foi feito assim

O logo completo tem proporção quase quadrada e precisava ser muito reduzido para caber na barra de navegação. A assinatura horizontal aproveita melhor a largura disponível e mantém o nome legível em desktop e celular.

### Arquivo criado

- `assets/simbolo-brasil-forte.svg`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/registro-de-alteracoes.md`

### Resultado

O cabeçalho agora exibe o símbolo oficial em tamanho visível, acompanhado do nome da empresa, sem reduzir todo o conjunto a uma miniatura.

---

## 20 de agosto de 2026 — Correção do círculo do logo

### Solicitação

Corrigir as linhas externas do logo para que formassem um círculo regular e se encontrassem corretamente.

### Como foi feito

Os arcos independentes foram substituídos por círculos geométricos contínuos, centralizados e simétricos tanto no símbolo do cabeçalho quanto no logo completo.

### Arquivos alterados

- `assets/simbolo-brasil-forte.svg`
- `assets/logo-brasil-forte.svg`
- `docs/registro-de-alteracoes.md`

### Resultado

O contorno dourado agora fecha perfeitamente, sem desalinhamentos ou pontas desencontradas.

---

## 20 de agosto de 2026 — Logo no rodapé e ícone do WhatsApp

### Solicitação

Aplicar o novo logo também no rodapé e substituir o símbolo de telefone do botão flutuante pelo ícone de WhatsApp disponível na pasta de imagens.

### Como foi feito

O símbolo provisório “BF” do rodapé foi substituído pela assinatura horizontal da Brasil Forte. O arquivo `whatsapp (1).png` foi preservado e copiado como `whatsapp.png`, nome mais adequado para uso no código, passando a ser exibido dentro do botão flutuante.

### Arquivo criado

- `assets/whatsapp.png`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/registro-de-alteracoes.md`

### Resultado

Cabeçalho e rodapé utilizam a mesma identidade visual, e o acesso flutuante ao atendimento agora apresenta o ícone correto do WhatsApp.

---

## 20 de agosto de 2026 — Seção de impermeabilização predial e grandes obras

### Solicitação

Criar uma área específica para apresentar os serviços realizados em edifícios de grande porte.

### Como foi feito

Foi adicionada uma seção após “Nossos serviços” com fotografia de execução em altura, explicação do atendimento a edifícios e empreendimentos em construção, lista de aplicações, diferenciais de planejamento, segurança e escala, além de um botão para solicitar avaliação técnica.

### Por que foi feito assim

Grandes obras possuem necessidades, público e complexidade diferentes dos serviços residenciais. A seção própria comunica essa especialização para construtoras, condomínios e administradoras sem sobrecarregar os cards gerais de serviços.

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/progresso-do-projeto.md`
- `docs/registro-de-alteracoes.md`

### Resultado

O site agora apresenta claramente que a Brasil Forte possui estrutura para impermeabilização predial, serviços em altura e obras de grande porte.

---

## 20 de agosto de 2026 — Escopo completo para construção civil

### Solicitação

Alterar o título da seção para “Construção Civil” e deixar claro que a Brasil Forte pode executar toda a impermeabilização de um empreendimento.

### Como foi feito

O texto passou a informar que a empresa pode assumir o escopo completo da obra, atendendo todos os pavimentos e apartamentos. A lista detalha banheiros, cozinhas, varandas, áreas de serviço, lajes, coberturas, fachadas, áreas técnicas, reservatórios, piscinas, juntas e fundações.

### Por que foi feito assim

A nova comunicação demonstra que o serviço não se limita a pontos isolados: a Brasil Forte pode acompanhar as etapas da construção e atender integralmente às necessidades de impermeabilização do empreendimento.

### Arquivos alterados

- `index.html`
- `docs/progresso-do-projeto.md`
- `docs/registro-de-alteracoes.md`

### Resultado

A seção posiciona a empresa como fornecedora de impermeabilização completa para grandes obras da construção civil.

---

## 20 de agosto de 2026 — Páginas individuais das obras

### Solicitação

Fazer cada card de “Conheça alguns dos nossos trabalhos” abrir uma página própria, começando pela Barra Funda com detalhes de como a obra está sendo executada.

### Como foi feito

Os três cards foram transformados em links e receberam páginas individuais. A página da Barra Funda descreve planejamento, preparação, tratamento dos pontos críticos, aplicação do sistema e inspeção. Guarulhos apresenta o trabalho nos apartamentos e Vila Maria destaca a execução externa em altura.

### Arquivos criados

- `obras/barra-funda.html`
- `obras/guarulhos.html`
- `obras/vila-maria.html`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `docs/registro-de-alteracoes.md`

### Resultado

Cada obra agora possui um endereço próprio, botão de retorno para a página principal e chamada para solicitar avaliação técnica.

---

## 20 de agosto de 2026 — Evolução ilustrativa da obra Barra Funda

### Solicitação

Acrescentar imagens para mostrar como o trabalho está sendo desenvolvido na página detalhada da Barra Funda.

### Como foi feito

Foram criadas três imagens realistas para representar preparação da superfície, aplicação do sistema impermeabilizante e finalização com inspeção. A página identifica expressamente o material como ilustrativo das etapas técnicas.

### Arquivos criados

- `assets/barra-funda-etapa-preparacao.png`
- `assets/barra-funda-etapa-aplicacao.png`
- `assets/barra-funda-etapa-inspecao.png`

### Arquivos alterados

- `obras/barra-funda.html`
- `css/style.css`
- `docs/registro-de-alteracoes.md`

### Resultado

A página da Barra Funda agora apresenta uma sequência visual responsiva que ajuda o visitante a entender a evolução do serviço.

---

## 19 de agosto de 2026 — Migração para o cofre real do Obsidian

### Solicitação

Migrar todo o projeto para o cofre que está efetivamente aberto no aplicativo Obsidian.

### Como foi feito

O projeto completo foi copiado para a pasta `Projeto do site` dentro do cofre real. A configuração `.obsidian` e as notas que já existiam no cofre foram preservadas. A quantidade de arquivos foi conferida após a cópia.

### Por que foi feito assim

A pasta usada anteriormente tinha o nome do projeto, mas não possuía a configuração `.obsidian`. A cópia preserva a versão original como segurança até que o projeto migrado seja aberto e confirmado no editor.

### Destino principal

`D:\DOCUMENTOS\SISTEMAS\Imperbeabilizadora brasil forte\Cofre brasil forte\Brasil forte\Projeto do site`

### Resultado

Os 18 arquivos do projeto foram copiados e verificados dentro do cofre real.
