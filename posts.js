const posts = [
    {
        titulo: "A importância da tecnologia",
        texto: "A tecnologia está presente em nosso dia a dia e facilita diversas tarefas."
    },
    {
        titulo: "Aprendendo programação",
        texto: "Aprender programação desenvolve o raciocínio lógico e abre novas oportunidades."
    },
    {
        titulo: "Desenvolvimento Web",
        texto: "HTML, CSS e JavaScript são tecnologias fundamentais para criar páginas web."
    },
    {
        titulo: "A importância do CSS",
        texto: "O CSS permite criar páginas mais bonitas, organizadas e agradáveis para os usuários."
    },
    {
        titulo: "Conhecendo o Flexbox",
        texto: "O Flexbox ajuda a organizar os elementos de uma página de forma simples e responsiva."
    },
    {
        titulo: "Projetos na programação",
        texto: "Criar projetos é uma ótima maneira de praticar programação e desenvolver novas habilidades."
    }
];

const containerPosts = document.getElementById("posts");

posts.forEach((post) => {
    const article = document.createElement("article");

    article.innerHTML = `
        <h2>${post.titulo}</h2>
        <p>${post.texto}</p>
    `;

    containerPosts.appendChild(article);
});


const botaoTema = document.getElementById("btnTema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀️ Tema claro";
    } else {
        botaoTema.textContent = "🌙 Tema escuro";
    }
});

