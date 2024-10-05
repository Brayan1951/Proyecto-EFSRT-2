import { useProductStore } from "../store/productsStore"




const productos=[]
// const productos=useProductStore((state)=>state.products)



export const findAllProducts=()=>{


    return productos


}


export const findByName=(name='')=>{
    
    return findAllProducts().filter(val=>val.nombre.toUpperCase().startsWith(name.toUpperCase()))
}
export const getByCodigo=(codigo='')=>{
    
    return findAllProducts().filter(val=>val.id===codigo)[0]
}

const getLength=()=>{
    return findAllProducts().length
}

export const getLastCodigo=()=>{
    return productos[getLength-1].id
}

