document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login realizado com sucesso:", userCredential.user);

            // Carregar conteúdo da mentoria.html
            fetch("https://feliperodrigues.net.br/mentoria")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Erro ao carregar a mentoria.");
                    }
                    return response.text();
                })
                .then(html => {
                    // Insere o conteúdo no elemento com ID "app-content"
                    const appContent = document.getElementById("app-content");
                    appContent.innerHTML = html;

                    // Exibe o conteúdo e oculta a tela de login
                    document.getElementById("login-screen").style.display = "none";
                    appContent.style.display = "block";
                })
                .catch(error => {
                    console.error("Erro ao carregar mentoria:", error);
                    alert(`Erro ao carregar mentoria: ${error.message}`);
                });
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error);

            // Exibe uma mensagem de erro com alert
            alert("Erro ao fazer login: E-mail e/ou senha incorretos. Por favor, tente novamente.");
        });
});
