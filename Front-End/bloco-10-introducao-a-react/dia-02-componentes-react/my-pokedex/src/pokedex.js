import react from "react";
import pokemons from "./data";
import Pokemon from "./pokemons";

class Pokedex extends react.Component {
    render() {

        const allpokemons = pokemons.map((pokemon) => {
            return(<Pokemon test={pokemon} ></Pokemon>)
        })

        return(
            <section id='pokedex'>
                {allpokemons}
            </section>
        )
    }
}

export default Pokedex;