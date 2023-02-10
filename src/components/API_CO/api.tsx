import axios from "axios";
import { useEffect } from "react";

export const Lien_image = (index : number) => {
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`;
    return lien;
}
export const Lien_artwork = (index : number) =>{
    const lien = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`;
    return lien;
}