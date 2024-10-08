import { create } from "zustand";
import { almacenes_productos } from "../assets/data";

export const useAlmacenStore = create((set) => ({
  almacen_producto: almacenes_productos,
  filterAlmacen: [],

  getbyAlmacen: (almacen, producto) =>
    set((state) => ({
      filterAlmacen: state.almacen_producto.filter((val) => {
        return (
          (producto ? val.id_producto === producto : true) &&
          (almacen != 0 ? val.id_almacen === almacen : true)
        );
      }),
    })),
  SalidaAlmacen: (id_producto, id_almacen_origen, cantidad) =>
    set((state) => {

      const updateAlmacen = state.almacen_producto
        .map((item) => {
          if (
            item.id_almacen === id_almacen_origen &&
            item.id_producto === id_producto
          ) {
            return {
              ...item,
              cantidad: item.cantidad - cantidad,
            };
          }
          return item;
        })
        .filter((item) => item.cantidad > 0);

      return { almacen_producto: updateAlmacen };
    }),
  IngresoAlmacen: (id_producto, id_almacen_destino, cantidad) =>
    set((state) => {
      console.log(id_producto, id_almacen_destino, cantidad);
      const updateAlmacen = state.almacen_producto;

      const productoDestino = updateAlmacen.find(
        (item) =>
          item.id_almacen === id_almacen_destino &&
          item.id_producto === id_producto
      );

      if (productoDestino) {
        updateAlmacen.forEach((item) => {
          if (
            item.id_almacen === id_almacen_destino &&
            item.id_producto === id_producto
          ) {
            item.cantidad += cantidad;
          }
        });
      } else {
        updateAlmacen.push({
          id_almacen: id_almacen_destino,
          id_producto,
          cantidad,
        });
      }

      return { almacen_producto: updateAlmacen };
    }),

  trasladoAlmacen: (
    id_producto,
    id_almacen_origen,
    id_almacen_destino,
    cantidad
  ) =>
    set((state) => {
      const updateAlmacen = state.almacen_producto
        .map((item) => {
          if (
            item.id_almacen === id_almacen_origen &&
            item.id_producto === id_producto
          ) {
            return {
              ...item,
              cantidad: item.cantidad - cantidad,
            };
          }
          return item;
        })
        .filter((item) => item.cantidad > 0);

      const productoDestino = updateAlmacen.find(
        (item) =>
          item.id_almacen === id_almacen_destino &&
          item.id_producto === id_producto
      );

      if (productoDestino) {
        updateAlmacen.forEach((item) => {
          if (
            item.id_almacen === id_almacen_destino &&
            item.id_producto === id_producto
          ) {
            item.cantidad += cantidad;
          }
        });
      } else {
        updateAlmacen.push({
          id_almacen: id_almacen_destino,
          id_producto,
          cantidad,
        });
      }

      return { almacen_producto: updateAlmacen };
    }),
}));
