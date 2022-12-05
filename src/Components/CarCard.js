import { Link } from "react-router-dom";

const CarCard = (props) => {
  return (
    <div className="cardTable">
      <div className="bungkusLemper">
        {!!props.mobil.length ? (
          props.mobil.map((item) => {
            return (
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
                  <span> </span>
                  <div className="buttonCont">
                    <Link to={`/detailmobil/${item.id}`}>
                      <button> Cari Mobil </button>
                    </Link>
                  </div>
                </div>
                </div>
            );
          })
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  );
};

export default CarCard;
