import Block from "../Block/Block";
import Team from "../Comunity/Team/Team";
import Details from "../Store/Details/Details";


export default function HomePage() {


  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Bienvenido, !</h1>
        <p>¿Qué hay de nuevo hoy?</p>
      </div>  
    <Block/>
   
    </div>
  );
}