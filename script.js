
document.getElementById("contato").addEventListener("click", function() {
  var formContainer = document.getElementById("form-container");
  formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio real para fins de demonstração
  alert("Mensagem enviada com sucesso!");
  document.getElementById("form-container").style.display = "none";
}); 
document.getElementById("contato").addEventListener("click", function() {
  var formContainer = document.getElementById("form-container");
  formContainer.classList.toggle("show"); // Alterna a animação de entrada
});
