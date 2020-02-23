import React from 'react';
import './fridge-styles.scss';

export default function Fridge({ beers, grabBeer, returnToFridge }) {
  return (
    <section className="container">
      <div className="shelf">
        {beers.map(beer => (
          <div className="card" key={beer.id}>
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
                  <p className="subtitle is-3">{beer.name}</p>
                  <p className="subtitle is-6">{beer.tagline}</p>
                  <button
                    className="button is-text"
                    onClick={() => grabBeer(beer.id)}
                  >
                    Grab Beer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
