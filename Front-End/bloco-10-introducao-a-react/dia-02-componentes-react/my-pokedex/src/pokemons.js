import react from "react";
import pokemons from "./data";

class Pokemon extends react.Component {
    render(){
        const pokemon = this.props.test;
        const pokemonWeight = `Average weight: ${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`

        return(
           <div className='pokemon-card'>
                <img src={pokemon.image} width='150px' alt={pokemon.name} />
                <p className='pokemon-id'>{`#0${pokemon.id}`}</p>
                <h4 className='pokemon-name'>{pokemon.name}</h4>
                <p className='pokemon-type'>{pokemon.type}</p>
                <p className='pokemon-weight'>{pokemonWeight}</p>
           </div>
        )

    }


}

export default Pokemon;