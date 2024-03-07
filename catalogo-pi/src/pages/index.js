//import CustomCard from "@/components/CustomCard";
import BarraTitulo from "@/components/BarraTitulo";
import Produto from "@/components/Produto";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const Teste01 = () => {
    console.log("chegou aqui")
  }

//  return (//    <div className="row row-cols-1 row-cols-md-3 g-4">//      <CustomCard id="liu-kang" titulo="Liu Kang" texto="texto" />//      <CustomCard id="kung-lao" titulo="Kung Lao" texto="texto" />//      <CustomCard id="raiden" titulo="Raiden" texto="texto" />//      <CustomCard id="scorpion" titulo="Scorpion" texto="texto" />//    </div>

const [listaProduto, setListaProduto]= useState ([]);
const [listaProdutoFiltrado, setListaProdutoFiltrado]= useState ([]);

useEffect(() => {
  axios.get('https://localhost:7282/api/Produto').then(res =>{
    setListaProduto(res.data);
    setListaProdutoFiltrado(res.data);
    console.log(res, listaProduto);
  } )
},[]);

function handlePesquisar(filtro){
  const valorFiltro = filtro.target.value
  const filtrado = listaProduto.filter((dado)=> dado.nome.toLowerCase().includes(valorFiltro.toLowerCase()) )

  setListaProdutoFiltrado(filtrado)
  
  
  console.log(filtro)
}

//"row row-cols-1 roW-cols-sm-2 row-cols-md-3 g-3"
return (
  <>
  <BarraTitulo nome="MarKet" pesquisar={handlePesquisar}/>

  <div className="container-fluid mt-2">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        listaProdutoFiltrado.map((dado, index) => <Produto key={index}
        nome={dado.nome}
        descricao={dado.descricao}
        disponivel={dado.disponivel}
        novidade={dado.novidade}
        imagem={dado.imagem}
        preco={dado.preco} />)
      }
    </div>
  </div>
  </>
);
}
