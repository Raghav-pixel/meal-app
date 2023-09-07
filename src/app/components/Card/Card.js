"use client";

import { BsFillBagFill } from "react-icons/bs";
import { CartState } from "../../app/Context/Context";

const Card = ({ img, title }) => {
  const { state : { cart, favourite }, dispatch } = CartState();


  const handleClickAdd = () => {
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

  const handleClickAddFavourite = () => {
    dispatch({
      type: 'ADD_TO_FAVOURITE',
      payload: {
        img, title
      }
    })
  }

  const handleClickRemoveFavourite = () => {
    dispatch({
      type: 'REMOVE_FROM_FAVOURITE',
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
          <section className="btn-ctr">
            {
              favourite.some((c) => c.title === title) ? (
                <button 
                    onClick={handleClickRemoveFavourite} 
                    className="btn-remove"
                >
                    Remove from Favourites
                </button>
              ) : (
                <button 
                    onClick={() => handleClickAddFavourite()}
                    className="btn"
                >
                    Add to Favourites
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