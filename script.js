/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("form");
const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

// Função para validar o formulário

document.addEventListener("submit", function validarFormulario(evento) {
  evento.preventDefault();
  var nome = document.getElementById("nome").value;
  var endereco = document.getElementById("endereco").value;
  var telefone = document.getElementById("telefone").value;
  var item = document.getElementById("item").value;
  var quantidade = document.getElementById("quantidade").value;
  var formaPagamento = document.getElementById("forma-pagamento").value;

  // Verifica se os campos obrigatórios estão preenchidos
  if (
    nome === "" ||
    endereco === "" ||
    telefone === "" ||
    item === "" ||
    quantidade === "" ||
    formaPagamento === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Verifica se a quantidade é um número positivo

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("A quantidade deve ser um número positivo.");
    return;
  }

  // Se a validação passar, o formulário será enviado
  alert("Recebemos o seu pedido. Agradecemos a sua preferência!");
  form.reset();
  
});
