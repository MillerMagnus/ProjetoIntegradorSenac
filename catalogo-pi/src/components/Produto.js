export default function Produto() {
    return (
        <div className="col-3">
            <div className="card shadow-sm">
            <div style={{width:"100%",height:200,backgroundColor:"gray"}}></div>
                <div className="card-body">
                    <h2>{props.Nome}</h2>
                    <p>{props.Descricao}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge text-bg-secondary">Disponível</span>
                        <span className="badge text-bg-sucess">Novidade</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        {
                            props.Disponivel == false
                            ? <span className="badge text-bg-secondary">Disponível</span>     
                            : null
                        }
                        {
                            props.Novidade == true
                            ? <span className="badge text-bg-sucess">Novidade</span>
                            : null
                        } 
                    </div>
                    <div className="text-end mt-3">
                        <h3 className="text-body-secondary">{props.Preco}</h3>
                    </div>
                </div>
            </div>
        </div>

    );
}