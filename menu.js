document.addEventListener("DOMContentLoaded", function() {
  const menuHTML = `
    <nav class="main-nav">
      <div class="nav-logo">PPRS 2026</div>
      <div class="nav-links">
        <a href="index.html">🏠 Início</a>
        <a href="portugues.html">📖 Português</a>
        <a href="informatica.html">💻 Informática</a>
        <a href="rlm.html">🧠 Raciocínio Lógico</a>
        <a href="direitos humanos.html">⚖️ Direitos Humanos</a>
        <a href="direito constitucional e legislacao.html">🏛️ Direito</a>
        <a href="conhecimento geral relativo ao sistema prisional.html">🛡️ Sistema Prisional</a>
      </div>
    </nav>
  `;

  // Insere o menu dentro do espaço reservado
  const container = document.getElementById("menu-container");
  if (container) {
    container.innerHTML = menuHTML;
  }

  // Identifica a página atual (decodificando os espaços %20)
  let paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  paginaAtual = decodeURIComponent(paginaAtual); // <-- Essa é a linha mágica que resolve o problema!

  const links = document.querySelectorAll(".nav-links a");
  
  links.forEach(link => {
    // Agora a comparação vai funcionar perfeitamente
    if (link.getAttribute("href") === paginaAtual) {
      link.classList.add("ativo");
    }
  });
});