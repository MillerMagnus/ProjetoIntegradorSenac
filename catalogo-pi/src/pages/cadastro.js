import BarraTitulo from "@/components/BarraTitulo";
import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomImputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import axios from "axios";
import { useState } from "react";

export default function cadastro(){
    
    const [dadosProduto, setDadosProduto] = useState({
                                                        id: 0,
                                                        nome : "",
                                                        descricao : "",
                                                        preco : 0,
                                                        novidade : false,
                                                        disponivel : false, 
    })

    function handleSalvar(){
        //aqui enviaremos o post pra API
        axios.post("https://localhost:7282/api/Produto", dadosProduto)
            .then(res => console.log(res))     
    }

    function handleChange(e){
        //console.log(e.target.id, e.target.value)

        if (e.target.type == "checkbox")
        {
            dadosProduto[e.target.id] = e.target.checked
        } else {
            dadosProduto[e.target.id] = e.target.value
        }

        setDadosProduto(dadosProduto)

        console.log(dadosProduto)
    }

    return (
        <>
        <BarraTitulo nome="MarKet"/>
            <div className="container-fluid mt-2">
                <div className="row">
                    <CustomInputLabel id="nome" onChange={handleChange} texto="Nome" col="8" />
                    <CustomInputLabel id="preco" onChange={handleChange} texto="Preço" col="4" />
                    <CustomTextAreaLabel id="descricao" onChange={handleChange} texto="Descrição" col="12" />
                    <CustomInputLabel id="imagem" onChange={handleChange} texto="Imagem" col="12" />
                    <CustomCheckboxLabel id="novidade" onChange={handleChange} texto="Novidade" col="6"/>
                    <CustomCheckboxLabel id="disponivel" onChange={handleChange} texto="Disponível" col="6"/>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>

                    </div>
                </div>
            </div>
        </>
        
    )
}