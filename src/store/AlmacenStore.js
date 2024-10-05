import { create } from "zustand";
import { almacenes_productos } from "../assets/data";

export const useAlmacenStore = create((set) => ({
  almacen_producto: almacenes_productos,
}));
