import React from 'react';

const BeerDetail = ({ beer, returnToFridge }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <figure className="media-left is-48x48">
            <img
              src={beer.image_url}
              alt="beer thumbnail"
              className="beer-img"
            />
          </figure>
          <div className="media-content">
            <p className="title is-3">{beer.name}</p>
            <p className="subtitle is-6">{beer.tagline}</p>
            <p className="subtitle is-6">
              First brewed:
              <span className="space-right">{beer.first_brewed}</span>
            </p>
          </div>
        </div>
        <div className="content">
          <p className="subtitle is-6">{beer.description}</p>
        </div>
        <div className="card-footer">
          <button className="button card-footer-item" onClick={returnToFridge}>
            Back to Fridge
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerDetail;
