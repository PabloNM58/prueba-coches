import "./slogan.css";

export default function Slogan() {
  return (
    <section className="slogan-container">
      <div className="slogan-container__empty"></div>
      <div className="slogan-container__slogan">
        <div>
          <h1 className="slogan-container__slogan--title">
            Coches de segunda mano
          </h1>
          <h2 className="slogan-container__slogan--subtitle">
            Dale una segunda vida a los 80.000 coches de segunda mano o de
            ocasión que tenemos para ti
          </h2>
        </div>
        <img
          className="slogan-container__slogan--logo--image"
          src="./hero-img.png"
          alt="portada"
        />
      </div>
    </section>
  );
}
