document.addEventListener('DOMContentLoaded', function() {
    // Alternar entre formulários de login e cadastro
    document.getElementById('to-signup').addEventListener('click', function() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    });

    document.getElementById('to-login').addEventListener('click', function() {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });
});

function irParaRestaurantes() {
    window.location.href = "Restaurantes.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('menu'); // Pegando pelo ID correto

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    } else {
        console.error('Elemento com ID "hamburger" ou "menu" não encontrado.');
    }
});