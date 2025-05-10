/**
 * Elementos del DOM.
 * @type {HTMLElement}
 */
const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

/**
 * Verifica si una cadena es un palíndromo y actualiza la interfaz.
 * Procesa la entrada ignorando puntuación, mayúsculas/minúsculas y espacios.
 * Muestra el resultado en el área designada.
 *
 * @param {string} input - El texto a verificar.
 * @returns {void}
 */
const checkForPalindrome = (input) => {
  const originalInput = input;

  // Si no se ingresa un texto, mostramos una alerta
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Limpiar el resultado previo
  resultDiv.replaceChildren();

  // Normalizar el texto: quitar caracteres no alfanuméricos y pasar a minúsculas
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

  // Determina el resultado comparando con la cadena invertida.
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome.`;

  // Crea y añade el elemento de resultado al DOM.
  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerText = resultMsg;
  resultDiv.appendChild(pTag);

  // Mostrar el resultado
  resultDiv.classList.remove("hidden");
};

/**
 * Evento que se activa al hacer clic en el botón de verificación.
 * @listens click
 * @returns {void}
 */
checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});

/**
 * Evento que se activa al presionar la tecla "Enter" en el campo de entrada.
 * @listens keydown
 * @param {KeyboardEvent} e - El evento de teclado.
 * @returns {void}
 */
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = ""; // Limpiar el campo de entrada
  }
});
