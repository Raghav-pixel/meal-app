"use client";

import { BsFillBagFill } from "react-icons/bs";
import { CartState } from "../../app/Context/Context";

const Card = ({ img, title }) => {
  const { state : { cart }, dispatch } = CartState();


  async function handleClickAdd() {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        img, title
      }
    })
  }

  const handleClickRemove = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { img, title }
    });
  }
  return (
    <>
      <section className="card">
        <div className="img-ctr">
          <img src={img} alt={title} className="card-img" />
        </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          {/* <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section> */}
          <section className="btn-ctr">
            {
              cart.some((c) => c.title === title) ? (
                <button 
                    onClick={handleClickRemove} 
                    className="btn-remove"
                >
                    Remove from Cart
                </button>
              ) : (
                <button 
                    onClick={() => handleClickAdd()}
                    className="btn"
                >
                    Add to Cart
                </button>
              )
            }
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;