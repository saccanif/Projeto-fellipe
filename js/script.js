const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Escuro';
    }
});

const elementos = document.querySelectorAll('.animar');

function verificarScroll() {
    elementos.forEach(function(el) {
        const topo = el.getBoundingClientRect().top;
        const altura = window.innerHeight;

        if (topo < altura - 100) {
            el.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', verificarScroll);

verificarScroll();

const todosCards = document.querySelectorAll('#projetos .col-md-4');
const btnVerMais = document.getElementById('btnVerMais');

const quantidadeInicial = 3;

// Esconde cards além dos 3 iniciais
todosCards.forEach(function(card, index) {
    if (index >= quantidadeInicial) {
        card.style.display = 'none';
    }
});

// Só mostra o botão se tiver mais de 3 cards
if (todosCards.length <= quantidadeInicial) {
    btnVerMais.style.display = 'none';
}

var mostrandoTodos = false;

btnVerMais.addEventListener('click', function() {
    if (!mostrandoTodos) {
        todosCards.forEach(function(card) {
            card.style.display = 'block';
        });
        btnVerMais.textContent = '▲ Ver Menos';
        mostrandoTodos = true;
    } else {
        todosCards.forEach(function(card, index) {
            if (index >= quantidadeInicial) {
                card.style.display = 'none';
            }
        });
        btnVerMais.textContent = '▼ Ver Mais Projetos';
        mostrandoTodos = false;
    }
});