import React, { useState } from "react";
import './card.css';
import Tour from "./Tour";
import info from './info';

function Tours() {
    const [tours, setTourList] = useState(info);
    const [noToursLeft, setNotoursLeft] = useState(false);

    const handleDelete = (id) => {
        const updateTour = tours.filter((tour) => tour.id !== id);
        setTourList(updateTour);

        //Tüm turların silinme durumu
        if(updateTour.length === 0){
            setNotoursLeft(true);
        }
        
    };

    const refreshTour = () => {
        setTourList(info);
        setNotoursLeft(false);
    }

    return (
        <main>
            <section>
                <div className="title">
                    <h2>{noToursLeft ? "no tours left" : "our tours"}</h2>
                    {noToursLeft && (
                        <button className="btn" onClick={refreshTour}>refresh</button>
                    )}
                    {noToursLeft || <div className="underline"></div>}
                </div>
                <div className="tours">
                    {tours.map(
                        tour => (
                            <Tour key={tour.id} {...tour} onDelete={handleDelete} />
                        )
                    )}
                </div>
            </section>

        </main>
    )
}

export default Tours;
