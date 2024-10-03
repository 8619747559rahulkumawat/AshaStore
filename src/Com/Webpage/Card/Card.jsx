import React, { useState } from "react";
import "./Card.css";
import "./Modal.css"; // Make sure to import the modal CSS if needed
import "./CardRes.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import ReactImageMagnify from "react-image-magnify";
import { green } from "@mui/material/colors";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <CloseIcon className="close-button" />
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-6">
              <div className="modal-img">
                {/* <img src="img/item1.jpg" alt="item1" /> */}
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "item1",
                      isFluidWidth: true, // Makes the image responsive
                      src: "img/item1.jpg", // Required
                      width: 500, // Optional, not needed if isFluidWidth is true
                      height: 800, // Optional, not needed if isFluidWidth is true
                    },
                    largeImage: {
                      src: "img/item1.jpg", // Required
                      width: 200, // Required
                      height: 1600, // Required
                    },
                    isHintEnabled: true, // Enables hint on hover
                  }}
                />
              </div>
            </div>
            <div className="col-md-9 col-sm-9 ">
              <div className="modal-product-details-component">
                <h2>Round Neck T-Shirt</h2>
                <p className="Dis-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam unde, minus cum tempore modi ad, quo saepe a optio labore, eius consectetur debitis dolorem error vel nemo odit earum commodi exercitationem eligendi nulla. Accusantium tempora odio ipsam? Ratione doloremque quaerat tempore quasi sed inventore iusto voluptates est, quam, ea praesentium.</p>
                <p>
                  <span>Rs.430</span> <del>MRP - Rs.480</del>
                </p>
                <h3>category:- <span style={{color:'green'}}>Men</span></h3>
                <button>ADD TO CARD</button>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="CardComponent">
          <div className="Card_img_component">
            <img
              src="img/item1.jpg"
              alt="item1"
              onClick={handleOpenModal} // Open modal on image click
            />
            <button>10%</button>
            <ul>
              <li>
                <ShoppingBagOutlinedIcon className="Item-icons" />
              </li>
              <li>
                <FavoriteBorderIcon className="Item-icons" />
              </li>
            </ul>
          </div>
          <h3>Round Neck T-Shirt</h3>
          <p>
            <span>Rs.430</span> <del>MRP - Rs.480</del>
          </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Card;
