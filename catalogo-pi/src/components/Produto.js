//import Image from "next/image";

export default function Produto(props) {
    return (
      <div className="col-sm-6 col-md-4 col-xl-3">
        <div className={`card h-100 shadow-sm ${ props.novidade == true?"novidade":""}`}>
          <div
            //style={{ width: "100%", height: 400 }}
          >
            <img src={props.imagem} className={`card-img-top ${props.disponivel == false?"indisponivel":""}`} />
        </div>
          <div className="card-body">
            <div className="card-body">
              <h2>{props.nome}</h2>
              <p className="card-text">
                {props.descricao}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                {
                  props.disponivel == false
                    ? <span className="badge text-bg-secondary">Indisponível</span>
                    : null
                }
                {
                  props.novidade == true
                    ? <span className="badge text-bg-success">Novidade</span>
                    : null
                }
               
              </div>
              <div className="text-end mt-6">
                <h3 className="text-body-secondary">
                  {props.preco}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }