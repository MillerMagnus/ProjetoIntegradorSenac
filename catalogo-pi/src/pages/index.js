export default function Home() {

  const Teste01 = () => {
    console.log("chegou aqui")
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://cdn-prod.mortalkombat.com/roster/liu-kang/body.png" className="card-img-top" alt="Liu Kang"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://cdn-prod.mortalkombat.com/roster/kung-lao/body.webp" className="card-img-top" alt="Kung Lao"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://cdn-prod.mortalkombat.com/roster/raiden/body.webp" className="card-img-top" alt="Raiden"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="https://cdn-prod.mortalkombat.com/roster/scorpion/body.webp" className="card-img-top" alt="Scorpion"/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

</div>
  );
}
