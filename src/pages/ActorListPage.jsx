import React from 'react';
import ActorCard from './ActorCard';


export default function ActorListPage({ movies }){
    const uniqueActors = [];
    
    movies.forEach(movie => {
        movie.actors.forEach(actor => {
            if(!uniqueActors.includes(actor)) {
                uniqueActors.push(actor)
            }
        })
    })

    return (
        <div>
            <h1>Actors List</h1>
            <div>
                {uniqueActors.map(actor => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
            </div>
        </div>
    )
}