import BarraTitulo from "@/components/BarraTitulo";
import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomImputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function cadastro(){
    const router = useRouter();
    const [dadosProduto, setDadosProduto] = useState({
                                                        id: 0,
                                                        nome : "",
                                                        descricao : "",
                                                        preco : 0,
                                                        novidade : false,
                                                        disponivel : false, 
    })

    

    function handleSalvar(){

        // Verificar se os campos obrigatórios estão preenchidos
    if (!dadosProduto.nome || !dadosProduto.descricao || !dadosProduto.preco) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // Impede o envio dos dados se algum campo estiver em branco
    }

        //trocar virgulas por ponto antes do insert
        dadosProduto.preco = dadosProduto.preco.replace(".", "");
        dadosProduto.preco = dadosProduto.preco.replace(",", ".");
        //aqui enviaremos o post pra API
        axios.post("https://localhost:7282/api/Produto", dadosProduto)
        .then((res) => {
            console.log(res);
            alert("Produto salvo com sucesso!");
            // Resetar os dados do produto para o estado inicial
            //router.reload();
            router.push('/');
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao salvar o produto.");
        });
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
            <div className="container-fluid mt-2 corpo2">
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