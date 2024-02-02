import { Fragment, useEffect, useState } from "react";
import DisplayCards from "../components/card/DisplayCards";
import CardModal from "../components/modal/CardModal";
import { API_URL } from "../constants";
import useGetDataFromApi from "../hooks/useGetDataFromApi";
import Loader from "../components/loader/Loader";

export default function Cards() {
  const { data, loading } = useGetDataFromApi(API_URL);
  const [cars, setCars] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  const onClickCard = (carInfo) => {
    setModalIsOpen(true);
    setModalInfo(carInfo);
  };

  const closeModal = () => {
    setModalInfo();
    setModalIsOpen(false);
  };

  useEffect(() => setCars(data), [data]);

  return (
    <Fragment>
      <main className="app-container">
        {loading ? (
          <Loader />
        ) : (
          <DisplayCards
            cars={cars}
            setCars={setCars}
            onClickCard={onClickCard}
          />
        )}
      </main>
      <CardModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalInfo={modalInfo}
      />
    </Fragment>
  );
}
