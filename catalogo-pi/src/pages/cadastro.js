import BarraTitulo from "@/components/BarraTitulo";
import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomImputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import axios from "axios";
import { useState } from "react";

export default function cadastro(){

    const [dadosProduto, setDadosProduto] = useState({})

    function handleSalvar(){
        //aqui enviaremos o post pra API
        axios.post("https://localhost:7282/api/Produto", dadosProduto)
            .then(res => console.log(res))
    }
    return (
        <>
        <BarraTitulo nome="MarKet"/>
            <div className="container-fluid mt-2">
                <div className="row">
                    <CustomInputLabel id="nome" texto="Nome" col="8" />
                    <CustomInputLabel id="preco" texto="Preço" col="4" />
                    <CustomTextAreaLabel id="descricao" texto="Descrição" col="12" />
                    <CustomInputLabel id="imagem" texto="Imagem" col="12" />
                    <CustomCheckboxLabel id="novidade" texto="Novidade" col="6"/>
                    <CustomCheckboxLabel id="disponivel" texto="Disponível" col="6"/>
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