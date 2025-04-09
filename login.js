document.addEventListener("DOMContentLoaded", () => {
    // SELECIONANDO ELEMENTOS
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email-login");
    const passwordInput = document.getElementById("password-login");

    // BASE DE DADOS PARA SIMULAÇÃO
    const usuarios = [
        { email: "gabriel@gmail.com", senha: "1234A" },
    ];

    function validaLogin(email, senha) {
        return usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
    }

    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const senha = passwordInput.value.trim();

        const usuario = validaLogin(email, senha);
        if (usuario) {
            alert("Login bem-sucedido!");
            window.location.href = "perfil.html";
        } else {
            alert("Credenciais incorretas. Tente novamente.");
        }
    };
});

document.addEventListener("DOMContentLoaded", () => {
    const editProfileForm = document.getElementById("editProfileForm");

    // Carregar dados do perfil se existirem
    if (localStorage.getItem("userProfile")) {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        document.getElementById("username").value = userProfile.username || '';
        document.getElementById("email").value = userProfile.email || '';
        document.getElementById("telefone").value = userProfile.telefone || '';
        document.getElementById("endereco").value = userProfile.endereco || '';
    }

    // Salvar dados do perfil
    editProfileForm.onsubmit = (e) => {
        e.preventDefault();
        const userProfile = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
        };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        alert("Perfil atualizado com sucesso!");
    };
});