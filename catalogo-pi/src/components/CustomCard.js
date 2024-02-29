export default function CustomCard(props) {
    return (

      //<div className={`col-${props.col} mb-3`}>
        //<input className="form-check-input" id={props.id} type="checkbox" />
        //<label className="form-check-label ms-1" htmlFor={props.id}></label>
      //</div>//

<div className="col">
  <div className="card h-100">
    <img src={`https://cdn-prod.mortalkombat.com/roster/${props.id}/body.webp`} className="card-img-top" alt={props.titulo} id={props.id}/>
    <div className="card-body">
      <h5 className="card-title">{props.titulo}</h5>
      <p className="card-text">{props.texto}</p>
    </div>
  </div>
</div>






    );
  }