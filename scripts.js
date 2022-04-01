function selecionar(elemento) {
    const item=document.querySelector(".selecionado");
    if (item !== null) {
        item.classList.remove("selecionado");
      }
      elemento.classList.add("selecionado");
}