import { create } from "zustand";
import { almacenes_productos } from "../assets/data";

export const useAlmacenStore = create((set) => ({
  almacen_producto: almacenes_productos,
  filterAlmacen:[],

  getbyAlmacen:(almacen,producto)=>set(
    (state)=>({
      filterAlmacen:state.almacen_producto.filter((val)=>{
        
        return (producto?val.id_producto===producto:true)  && (almacen!=0 ? val.id_almacen===almacen : true)
      })
    })
  )


  
}));
