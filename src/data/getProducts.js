const products = [
    {
        id: 1,
        nombre: "Caja de 6 Alfajores Havanna Chocolate",
        descripcion: "Caja de 6 alfajores de chocolate rellenos de dulce de leche, marca Havanna.",
        imagen: "/src/assets/images-products/alfajor-havanna-chocolate.png",
        precio: 3000,
        stock: 50,
        category: "alfajores"
    },
    {
        id: 2,
        nombre: "Caja de 6 Alfajores Havanna Merengue",
        descripcion: "Caja de 6 alfajores de merengue rellenos de dulce de leche, marca Havanna.",
        imagen: "/src/assets/images-products/alfajor-havanna-merengue.png",
        precio: 3500,
        stock: 40,
        category: "alfajores"
    },
    {
        id: 3,
        nombre: "Caja de 6 Alfajores Havanna Mixto",
        descripcion: "Caja de 6 alfajores mixtos de chocolate y merengue, marca Havanna.",
        imagen: "/src/assets/images-products/alfajor-havanna-mixto.png",
        precio: 3250,
        stock: 60,
        category: "alfajores"
    },
    {
        id: 4,
        nombre: "Dulce de Leche Havanna",
        descripcion: "Dulce de leche artesanal de Havanna, perfecto para postres.",
        imagen: "/src/assets/images-products/dulce-de-leche-havanna.png",
        precio: 700,
        stock: 30,
        category: "dulce-de-leche"
    },
    {
        id: 5,
        nombre: "Dulce de Leche La Serenisima",
        descripcion: "Dulce de leche clásico de La Serenisima.",
        imagen: "/src/assets/images-products/dulce-de-leche-la-serenisima.png",
        precio: 450,
        stock: 100,
        category: "dulce-de-leche"
    },
    {
        id: 6,
        nombre: "Dulce de Leche Mardel",
        descripcion: "Dulce de leche tradicional de Mardel.",
        imagen: "/src/assets/images-products/dulce-de-leche-mardel.png",
        precio: 550,
        stock: 80,
        category: "dulce-de-leche"
    },
    {
        id: 7,
        nombre: "Mate Stanley con Bombilla Blanco",
        descripcion: "Mate Stanley de color blanco con bombilla incluida.",
        imagen: "/src/assets/images-products/mate-stanley-con-bombilla-blanco.png",
        precio: 3500,
        stock: 20,
        category: "mates"
    },
    {
        id: 8,
        nombre: "Mate Stanley con Bombilla Negro",
        descripcion: "Mate Stanley de color negro con bombilla incluida.",
        imagen: "/src/assets/images-products/mate-stanley-con-bombilla-negro.png",
        precio: 3500,
        stock: 25,
        category: "mates"
    },
    {
        id: 9,
        nombre: "Mate Stanley con Bombilla Rojo",
        descripcion: "Mate Stanley de color rojo con bombilla incluida.",
        imagen: "/src/assets/images-products/mate-stanley-con-bombilla-rojo.png",
        precio: 3500,
        stock: 15,
        category: "mates"
    },
    {
        id: 10,
        nombre: "Mate Stanley con Bombilla Verde",
        descripcion: "Mate Stanley de color verde con bombilla incluida.",
        imagen: "/src/assets/images-products/mate-stanley-con-bombilla-verde.png",
        precio: 3500,
        stock: 10,
        category: "mates"
    },
    {
        id: 11,
        nombre: "Yerba Aguantadora",
        descripcion: "Yerba mate de sabor intenso, ideal para mates duraderos.",
        imagen: "/src/assets/images-products/yerba-aguantadora.png",
        precio: 1000,
        stock: 60,
        category: "yerba"
    },
    {
        id: 12,
        nombre: "Yerba Playadito",
        descripcion: "Yerba mate suave, perfecta para quienes prefieren un mate más liviano.",
        imagen: "/src/assets/images-products/yerba-playadito.png",
        precio: 900,
        stock: 70,
        category: "yerba"
    },
    {
        id: 13,
        nombre: "Yerba Rosamonte",
        descripcion: "Yerba mate de sabor fuerte, marca Rosamonte.",
        imagen: "/src/assets/images-products/yerba-rosamonte.png",
        precio: 950,
        stock: 55,
        category: "yerba"
    }
]
const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 3000);
});
export default getProducts;
