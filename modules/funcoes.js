function converteMaisculas(text) {
  return text.toUpperCase();
}

function converteMinusculas(text) {
  return text.toLowerCase();
}

function formataMoeda(value) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
}

export { converteMaisculas, converteMinusculas, formataMoeda }