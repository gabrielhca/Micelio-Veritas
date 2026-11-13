# Micelio Veritas

Site estático de uma marca fictícia de cogumelos gourmet vendidos por assinatura, com página inicial, planos e contato.

## Como rodar

Não precisa instalar nada. Clone o repositório e abra o `index.html` no navegador.

Se preferir usar um servidor local:

```bash
python3 -m http.server
```

e acesse `http://localhost:8000`.

Os formulários de assinatura e contato são demonstrativos: o site não tem servidor, então ao enviar aparece um aviso e nenhum dado sai do navegador.

## Tecnologias

- HTML
- CSS (CSS Grid, Flexbox, variáveis CSS e media queries, um arquivo por seção)
- JavaScript puro (menu mobile, troca de plano e aviso dos formulários)
- Google Fonts (Playfair Display e Inter)

## O que aprendi

- A montar um layout responsivo com Grid e Flexbox, ajustando o espaçamento do container para cada tamanho de tela.
- A separar o CSS por seção da página, o que facilitou achar e mexer em cada parte.
- A fazer um menu mobile acessível, atualizando `aria-expanded` e `aria-label` quando ele abre e fecha.
- A usar `input type="radio"` com `label` para escolher o plano e mostrar os detalhes certos com JavaScript.
- Que o peso das imagens faz muita diferença: trocar PNG por WebP reduziu as fotos de cerca de 7 MB para 0,6 MB sem perda visível.

## Estado atual

Concluído.
