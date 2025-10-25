// Planos de Assinatura
const planos = document.querySelectorAll('.orcamento-produto input[type="radio"]');

function exibirDetalhesPlano(event) {
  const planoSelecionado = event.target.value;
  const todosDetalhes = document.querySelectorAll('.orcamento-detalhes');
  
  todosDetalhes.forEach(detalhe => {
    detalhe.style.display = 'none';
  });

  const detalheSelecionado = document.querySelector(`.orcamento-detalhes[data-plano="${planoSelecionado}"]`);
  if (detalheSelecionado) {
    detalheSelecionado.style.display = 'block';
  }
}

function iniciarPlanos() {
    const planoInicial = document.querySelector('.orcamento-produto input[type="radio"]:checked');
    if (planoInicial) {
        const detalheInicial = document.querySelector(`.orcamento-detalhes[data-plano="${planoInicial.value}"]`);
        if (detalheInicial) {
            detalheInicial.style.display = 'block';
        }
    } else {
        // Oculta todos se nenhum estiver selecionado inicialmente
        const todosDetalhes = document.querySelectorAll('.orcamento-detalhes');
        todosDetalhes.forEach(detalhe => {
            detalhe.style.display = 'none';
        });
    }
}

planos.forEach(plano => {
  plano.addEventListener('change', exibirDetalhesPlano);
});

// Inicia a visibilidade correta ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarPlanos);
