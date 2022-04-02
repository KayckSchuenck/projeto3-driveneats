function selecionarprato(elemento) {
    const item=document.querySelector(".pselecionado");
    if (item !== null) {
        item.classList.remove("pselecionado");
      }
      elemento.classList.add("pselecionado");
}
function selecionarbebida(elemento) {
  const item=document.querySelector(".bselecionada");
  if (item !== null) {
      item.classList.remove("bselecionada");
    }
    elemento.classList.add("bselecionada");
}
function selecionarsobremesa(elemento) {
  const item=document.querySelector(".sselecionada");
  if (item !== null) {
      item.classList.remove("sselecionada");
    }
    elemento.classList.add("sselecionada");
}

function botaofinal() {
  if (document.querySelector(".pselecionado")!=null && document.querySelector(".bselecionada")!=null && document.querySelector(".sselecionada")!=null) 
  {
  document.querySelector(".incompleto").classList.add("hidden");
  document.querySelector(".completo").classList.remove("hidden");
  }
}