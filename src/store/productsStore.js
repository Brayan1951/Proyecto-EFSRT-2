import { create } from "zustand";
import { productos } from "../assets/data";




// const useBearStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//   }))


export const useProductStore=create((set)=>({
    products:productos,
    filterProduct:[].length,
    
    getByName:(name)=>set((state)=>({filterProduct:state.products.filter(val=>val.nombre.toUpperCase().startsWith(name.toUpperCase()))}))
    ,incrementProduct:(product)=>set((state)=>({products:[...state.products,{...product}]}))


}))