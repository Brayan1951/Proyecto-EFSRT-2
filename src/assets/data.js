export const Almacenes=[

    {
        id:20001,
        nombre:"Callao 01",
        direccion:"Ciudad del pescador, Mercado Jose Olaya puesto 402"
    },
    {
        id:20002,
        nombre:"Callao 02",
        direccion:"Ciudad del pescador, Mercado Jose Olaya puesto 501"
    },
    {
        id:20003,
        nombre:"Callao 03",
        direccion:"Ciudad del pescador,Minka puesto 103"
    }
]

// const Marcas=[
//     {
//         id:101,
//         nombre:"Gloria"
//     },
//     {
//         id:101,
//         nombre:"Laive"
//     },
//     {
//         id:103,
//         nombre:"Pacasmayo"
//     },
// ]


export const productos=[
    {
        id:10001,
        nombre:"Leche Gloria 1L",
        descripcion:"Leche Gloria 1Lt deslactosada",
        marcas:"Gloria"
        ,precio:12
    },
    {
        id:10002,
        nombre:"Leche Gloria 2.5L",
        descripcion:"Leche Gloria 2.5Lt deslactosada",
        marcas:"Gloria"
        ,precio:16
    },
    {
        id:10003,
        nombre:"Arroz 1k cacerita",
        descripcion:"Arroz cacerita 1K",
        marcas:"Cacerita"
        ,precio:8
        
    },
    {
        id:10004,
        nombre:"Arroz 1.5K pacasmayo",
        descripcion:"Arroz pacasmayo de 1.5 kilos",
        marcas:"Pacasmayo"
        ,precio:12
    },
    {
        id:10005,
        nombre:"Yogut 1L Vainilla",
        descripcion:"Yogurt vainilla de 1l de laive",
        marcas:"Laive"
        ,precio:7
    },
    {
        id:10006,
        nombre:"Yogut 1L Vainilla",
        descripcion:"Yogurt vainilla de 1l de Gloria",
        marcas:"Gloria"
        ,precio:7
    },
]




export const almacenes_productos=[
    {
        id_almacen:Almacenes[0].id,
        id_producto:productos[0].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[0].id,
        id_producto:productos[1].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[0].id,
        id_producto:productos[5].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[0].id,
        id_producto:productos[5].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[1].id,
        id_producto:productos[1].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[1].id,
        id_producto:productos[2].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[1].id,
        id_producto:productos[4].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[2].id,
        id_producto:productos[3].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[0].id,
        id_producto:productos[4].id,
        cantidad:5
    },
    {
        id_almacen:Almacenes[2].id,
        id_producto:productos[4].id,
        cantidad:5
    },
]