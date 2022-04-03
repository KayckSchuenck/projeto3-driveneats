let nome;
let endereco;
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
  endereco=prompt("Qual o seu endereço?")
  nome=prompt("Qual o seu nome?")
  document.querySelector(".conteudo").classList.add("blur");
  document.querySelector("header").classList.add("blur");
  document.querySelector(".barrafinal").classList.add("blur");
  document.querySelector(".confirmacao").classList.remove("hidden");
  calculofinal()
}
function calculofinal(){
  document.querySelector(".pedidocomida").innerText=document.querySelector(".pselecionado h2").innerText
  document.querySelector(".pedidobebida").innerText=document.querySelector(".bselecionada h2").innerText
  document.querySelector(".pedidosobremesa").innerText=document.querySelector(".sselecionada h2").innerText
  let comidapedida=document.querySelector(".pselecionado h3").innerText
  document.querySelector(".precocomida").innerText=comidapedida
  let bebidapedida=document.querySelector(".bselecionada h3").innerText
  document.querySelector(".precobebida").innerText=bebidapedida
  let sobremesapedida=document.querySelector(".sselecionada h3").innerText
  document.querySelector(".precosobremesa").innerText=sobremesapedida
  let preco1=comidapedida.replace("R$ ","")
  preco1=parseFloat(preco1.replace(",","."))
  let preco2=bebidapedida.replace("R$ ","")
  preco2=parseFloat(preco2.replace(",","."))
  let preco3=sobremesapedida.replace("R$ ","")
  preco3=parseFloat(preco3.replace(",","."))
  let valortotal=preco1+preco2+preco3
  valortotal=valortotal.toFixed(2)
  valortotal=valortotal + ""
  valortotal=valortotal.replace(".",",")
  document.querySelector(".precototal").innerText="R$ "+valortotal
}
function retornar(){
  document.querySelector(".conteudo").classList.remove("blur");
  document.querySelector("header").classList.remove("blur");
  document.querySelector(".barrafinal").classList.remove("blur");
  document.querySelector(".confirmacao").classList.add("hidden");
}
function chamarWhatsApp(){
  let mensagemenviada=`Olá, gostaria de fazer o pedido
  - Prato: ${document.querySelector(".pedidocomida").innerText}
  - Bebida: ${document.querySelector(".pedidobebida").innerText}
  - Sobremesa: ${document.querySelector(".pedidosobremesa").innerText}
  Total: ${document.querySelector(".precototal").innerText}
  
  Nome: ${nome}
  Endereço: ${endereco}`
  mensagemenviada=window.encodeURIComponent(mensagemenviada)
  window.open("https://wa.me/5532984278365?text=" + mensagemenviada)
}