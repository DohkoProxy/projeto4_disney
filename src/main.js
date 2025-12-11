document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabSelected = botao.target.dataset.tabButton;

            // 1. Esconde todas as abas
            hideAllTabs();

            // 2. Remove a classe active de todos os botões
            removeActiveButton();

            // 3. Ativa a aba correspondente
            const tab = document.querySelector(`[data-tab-id="${tabSelected}"]`);
            if (tab) {
                tab.classList.add('show__list--is-active');
            }

            // 4. Ativa visualmente o botão clicado
            botao.target.classList.add('show__tabs__button--is-active');
        });
    }

    // Função para esconder todas as abas
    function hideAllTabs() {
        const tabs = document.querySelectorAll('[data-tab-id]');
        tabs.forEach(tab => {
            tab.classList.remove('show__list--is-active');
        });
    }

    // Função para remover a classe active de todos os botões
    function removeActiveButton() {
        buttons.forEach(btn => {
            btn.classList.remove('show__tabs__button--is-active');
        });
    }
});