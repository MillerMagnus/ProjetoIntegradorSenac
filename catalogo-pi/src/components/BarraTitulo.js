import Link from "next/link";

export default function BarraTitulo(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary barra">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#">Market</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/cadastro">Cadastro</Link></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Pesquisa" 
        aria-label="Search" 
        onChange={props.pesquisar} />
      </form>
    </div>
  </div>
</nav>
        </>
    );
  }