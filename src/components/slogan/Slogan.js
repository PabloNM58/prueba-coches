import "./slogan.css";

export default function Slogan() {
  return (
    <section className="slogan-container">
      <div className="empty-div"></div>
      <div className="slogan">
        <div className="title-container">
          <h1 className="title">Coches de segunda mano</h1>
          <h2 className="sub-title">
            Dale una segunda vida a los 80.000 coches de segunda mano o de
            ocasión que tenemos para ti
          </h2>
        </div>
        <img className="logo-image" src="./hero-img.png" alt="portada" />
      </div>
    </section>
  );
}
