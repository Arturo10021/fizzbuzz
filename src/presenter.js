import generarFizzbuzz from "./fizzbuzz";

const numero1 = document.querySelector("#numero1");
const form = document.querySelector("#generarFizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroUsuario = Number.parseInt(numero1.value);
  div.innerHTML = "<p>" + generarFizzbuzz(numeroUsuario) + "</p>";
});
