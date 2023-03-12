import axios from "axios";

export const Lien_image = (index : number) => {
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
    return lien;
}
export const Lien_artwork = (index : number) =>{
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`;
    return lien;
}

export const Lien_back = (index : number) => {
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${index}.gif`
    return lien;
}

export const Lien_front = (index : number) => {
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`
    return lien;
}


export const Pokemon = (index : number) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then(res => {
        
        console.log(res.data.name)
    })
    .catch(error => console.error(error));
}