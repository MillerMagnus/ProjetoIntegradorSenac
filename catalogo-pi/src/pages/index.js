import CustomCard from "@/components/CustomCard";
import Produto from "@/components/Produto";

export default function Home() {

  const Teste01 = () => {
    console.log("chegou aqui")
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <CustomCard id="liu-kang" titulo="Liu Kang" texto="texto" />
      <CustomCard id="kung-lao" titulo="Kung Lao" texto="texto" />
      <CustomCard id="raiden" titulo="Raiden" texto="texto" />
      <CustomCard id="scorpion" titulo="Scorpion" texto="texto" />
    </div>

axios
    .get()
    .then(())

    return (
      <div className="container-fluid mt-2">
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {
   <Produto 
   key={index}
   nome={dado.nome}
   descricao={dado.descricao}
   disponivel={dado.}disponivel
   novidade={dado.novidade}
   preco={dado.preco}
    />
  }
</div>
</div>

    );

  );
}
