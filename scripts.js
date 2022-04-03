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
function fecharpedido() {
  let endereco=prompt("Qual o seu endereço?")
  document.querySelector(".conteudo").classList.add("blur");
  document.querySelector("header").classList.add("blur");
  document.querySelector(".barrafinal").classList.add("blur");
  document.querySelector(".confirmacao").classList.remove("hidden");
  calculofinal()
}
function calculofinal(){
  let comidapedida=document.querySelector(".pselecionado h2").innerText
  document.querySelector(".pedidocomida").innerText=comidapedida
  let bebidapedida=document.querySelector(".bselecionada h2").innerText
  document.querySelector(".pedidobebida").innerText=bebidapedida
  let sobremesapedida=document.querySelector(".sselecionada h2").innerText
  document.querySelector(".pedidosobremesa").innerText=sobremesapedida
  comidapedida=document.querySelector(".pselecionado h3").innerText
  document.querySelector(".precocomida").innerText=comidapedida
  bebidapedida=document.querySelector(".bselecionada h3").innerText
  document.querySelector(".precobebida").innerText=bebidapedida
  sobremesapedida=document.querySelector(".sselecionada h3").innerText
  document.querySelector(".precosobremesa").innerText=sobremesapedida
  let precocomidapedida=comidapedida.replace("R$ ","")
  let precobebidapedida=bebidapedida.replace("R$ ","")
  let precosobremesapedida=sobremesapedida.replace("R$ ","")
  preco1=parseFloat(precocomidapedida.replace(",","."))
  preco2=parseFloat(precobebidapedida.replace(",","."))
  preco3=parseFloat(precosobremesapedida.replace(",","."))
  let valortotal=preco1+preco2+preco3
  valortotal=valortotal.toFixed(2)
  valortotal=valortotal + ""
  valortotal=valortotal.replace(".",",")
  document.querySelector(".precototal").innerText="R$ "+valortotal
}