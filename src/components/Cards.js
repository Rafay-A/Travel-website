import React from 'react';
import CardItems from './CardItems';
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItems 
                        src="/images/img-9.jpg" 
                        text="Explore the hidden waterfall deep inside the amazon jungle!" 
                        label="Adventure" 
                        path="/services">
                        </CardItems>

                        <CardItems 
                        src="/images/img-2.jpg" 
                        text="Travel through islands of Bali in private Cruise!" 
                        label="Luxury" 
                        path="/services">
                        </CardItems>
                    </ul>
                    <ul className="cards_items">
                        <CardItems 
                        src="/images/img-3.jpg" 
                        text="Explore the deep blue seas of Atlantis!" 
                        label="Adventure" 
                        path="/services">
                        </CardItems>

                        <CardItems 
                        src="/images/img-4.jpg" 
                        text="Unusual football matches!" 
                        label="Adventure" 
                        path="/services">
                        </CardItems>

                        <CardItems 
                        src="/images/img-5.jpg" 
                        text="Hotel like no others!" 
                        label="Adventure" 
                        path="/services">
                        </CardItems>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards
