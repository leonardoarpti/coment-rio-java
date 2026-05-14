document.addEventListener("DOMContentLoaded", function() {
  // Pega o nome da página atual (ex: "portugues.html") para não misturar as matérias
  let paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  paginaAtual = decodeURIComponent(paginaAtual);

  // Seleciona todos os checkboxes dentro da área de estudo
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

  checkboxes.forEach((checkbox, index) => {
    // Cria uma chave única para cada checkbox (ex: portugues.html_check_0)
    const chaveUnica = `${paginaAtual}_check_${index}`;

    // 1. CARREGAR ESTADO SALVO
    // Verifica se já estava marcado no LocalStorage quando a página abre
    const estadoSalvo = localStorage.getItem(chaveUnica);
    if (estadoSalvo === "true") {
      checkbox.checked = true;
      checkbox.parentElement.classList.add("concluido");
    }

    // 2. SALVAR MUDANÇAS
    // Escuta toda vez que você clicar no checkbox
    checkbox.addEventListener("change", function() {
      // Salva no navegador se está marcado ou desmarcado
      localStorage.setItem(chaveUnica, this.checked);

      // Adiciona ou remove o efeito de riscado
      if (this.checked) {
        this.parentElement.classList.add("concluido");
      } else {
        this.parentElement.classList.remove("concluido");
      }
    });
  });
});