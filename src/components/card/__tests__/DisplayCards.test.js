import { render, screen } from "@testing-library/react";
import DisplayCards from "../DisplayCards";

describe("test DisplayCard component", function () {
  it("should render the correct number of cars", function () {
    const cars_mock = [
      {
        id: "1",
        price: 19990,
        make: "Peugeot",
        model: "Rifter",
        version: "1.2 Puretech Standard Access 110",
        fuel: "Gasolina",
        location: "Santa Cruz de Tenerife",
        year: 2019,
        kilometers: 115000,
        defaultphoto:
          "https://images.coches.com/_vo_/fotos/usados/2023/04/14/f/0385520813m_img_58_53796_1023043_1681372275.jpg?p=cc_vo_high",
        numberofphotos: 16,
        lastedited: {
          year: 2023,
          month: 4,
          day: 23,
          hour: 18,
          minute: 25,
          second: 43,
          timeZone: "ES/Madrid",
        },
        favorite: true,
      },
      {
        id: "2",
        price: 14990,
        make: "Renault",
        model: "Captur",
        version: "Tce Energy Zen 66kw",
        fuel: "Diésel",
        location: "Cádiz",
        year: 2017,
        kilometers: 51000,
        defaultphoto:
          "https://images.coches.com/_vo_/fotos/usados/2022/11/04/a/0358063191m_img_58_53860_967741_1667494007.jpg?p=cc_vo_high",
        numberofphotos: 23,
        lastedited: {
          year: 2023,
          month: 3,
          day: 23,
          hour: 18,
          minute: 25,
          second: 43,
          timeZone: "ES/Madrid",
        },
        favorite: true,
      },
      {
        id: "3",
        price: 12890,
        make: "Seat",
        model: "Ibiza",
        version: "1.0 Ecotsi S&s Style Dsg 110",
        fuel: "Eléctrico",
        location: "Gran Canaria",
        year: 2022,
        kilometers: 73000,
        defaultphoto:
          "https://images.coches.com/_vo_/fotos/usados/2023/04/13/7/5e058c7a49f6a491d8d8e6168df3a1bc.jpeg?p=cc_vo_high",
        numberofphotos: 8,
        lastedited: {
          year: 2023,
          month: 3,
          day: 2,
          hour: 18,
          minute: 25,
          second: 43,
          timeZone: "ES/Madrid",
        },
        favorite: true,
      },
    ];
    render(
      <DisplayCards
        cars={cars_mock}
        setCars={() => {}}
        onClickCard={() => {}}
      />
    );
    const cars = screen.getAllByTestId("card-item");
    expect(cars).toHaveLength(3);
  });
});
