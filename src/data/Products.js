import { productos } from "../assets/data"







export const findAllProducts=()=>{


    return productos


}


export const findByName=(name='')=>{
    
    return productos.filter(val=>val.nombre.toUpperCase().startsWith(name.toUpperCase()))
}
export const getByCodigo=(codigo='')=>{
    
    return productos.filter(val=>val.id===codigo)[0]
}

const getLength=()=>{
    return findAllProducts().length
}

export const getLastCodigo=()=>{
    return productos[getLength-1].id
}

