import { Link } from "react-router-dom";

const CarCard = (props) => {
  return (
    <div className="cardTable">
      <div className="bungkusLemper">
        {!!props.mobil.length ? (
          props.mobil.map((item) => {
            return (
              <div className="cardView">
                <div className="carCard">
                  <div className="containerImg">
                    <img src={item.image} />
                  </div>
                  <div className="containerTxt">
                  <h6>{item.name}</h6>
                  <h4>Rp.{item.price} / hari</h4>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </h5>
                  <div className="buttonCont">
                    <Link to={`/mobilterbaru/${item.id}`}>
                      <button> Cari Mobil </button>
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>gagal</p>
        )}
      </div>
    </div>
  );
};

export default CarCard;
