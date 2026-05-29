document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CAMBIO DE HOJA DE ESTILOS (TEMA)
    const btnTheme = document.createElement('button');
    btnTheme.id = "theme-toggle";
    btnTheme.innerText = "Modo Claro"; 
    
    // Estilos del botón flotante
    btnTheme.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:1000; padding:10px 20px; background:#adff2f; color:#000; border:none; border-radius:25px; font-weight:bold; cursor:pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: all 0.3s ease;";
    document.body.appendChild(btnTheme);

    const themeLink = document.querySelector('link[href="style.css"]');

    btnTheme.addEventListener('click', () => {
        if (themeLink && themeLink.getAttribute('href') === 'style.css') {
            themeLink.setAttribute('href', 'style-light.css');
            btnTheme.innerText = "Modo Oscuro"; 
            btnTheme.style.background = "#333";
            btnTheme.style.color = "#fff";
        } else if (themeLink) {
            themeLink.setAttribute('href', 'style.css');
            btnTheme.innerText = "Modo Claro"; 
            btnTheme.style.background = "#adff2f";
            btnTheme.style.color = "#000";
        }
    });

    // 2. EFECTOS VISUALES AL PASAR EL RATÓN (HOVER)

    const cards = document.querySelectorAll('.news-card, .small-card, .main__feature');
    cards.forEach(card => {
        card.style.transition = "outline 0.1s ease, transform 0.3s ease";
        card.addEventListener('mouseenter', () => {
            card.style.outline = "2px solid greenyellow";
        });
        card.addEventListener('mouseleave', () => {
            card.style.outline = "none";
        });
    });

    // 3. BUSCADOR INTERACTIVO EN TIEMPO REAL (UNIFICADO)

    const searchInput = document.querySelector('.search__container input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            const allCards = document.querySelectorAll('.news-card, .small-card');
            
            allCards.forEach(card => {
                const cardText = card.innerText.toLowerCase();
                
                if (cardText.includes(searchTerm)) {
                    const displayType = card.classList.contains('small-card') ? 'flex' : 'block';
                    card.style.setProperty('display', displayType, 'important');
                } else {
                    card.style.setProperty('display', 'none', 'important');
                }
            });
        });
    }
});