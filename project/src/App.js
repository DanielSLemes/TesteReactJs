// import React, {useState} from "react";
// import  Filters  from "./components/Filters/Filters";
// import  Products from "./components/Products/Products";
// import  ShoppingCart  from "./components/ShoppingCart/ShoppingCart";
// import Geladeira from "./components/Assets/Img/gel.png";
// import Fogao from "./components/Assets/Img/foga.png";
// import Armario from "./components/Assets/Img/armario.jpg";
// import PiaCozinha from "./components/Assets/Img/piaCozinha.png";
// import Mesa from "./components/Assets/Img/mesaJantar.png";
// import Sofa from "./components/Assets/Img/sofa.jpg";
// import GuardaRoupas from "./components/Assets/Img/guardaRoupas.png";
// import Cama from "./components/Assets/Img/cama.jpg";
// import Tv from "./components/Assets/Img/tv.jpg";
// import styled from "styled-components";

// const AppContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr 1fr;
//   padding: 16px;
//   gap: 8px;
// `;

//  const products = [
//   {
//     id: 1,
//     name:
//       "Geladeira / Refrigerador Brastemp, Duplex, Frost Free, Turbo Ice, 462L, Evox - BRM56AK",
//     price: 1000,
//     photo: Geladeira,
//   },
//   {
//     id: 2,
//     name:
//       "Fogão À Gas Itatiaia Com 4 Bocas E Acendimento Automático Star Branco Bivolt",
//     price: 549,
//     photo: Fogao,
//   },
//   {
//     id: 3,
//     name: "Armário de Cozinha 4 Peças Júlia",
//     price: 409,
//     photo: Armario,
//   },
//   {
//     id: 4,
//     name: "Pia de Cozinha em Granito Preto Absoluto",
//     price: 1600,
//     photo: PiaCozinha,
//   },
//   {
//     id: 5,
//     name: "Antiga Mesa De Jantar Pe Palito Anos 50 Com 6 Cadeiras",
//     price: 3000,
//     photo: Mesa,
//   },
//   {
//     id: 6,
//     name: "Sofá 3 Lugares Nevada Suede Azul Turquesa",
//     price: 1.163,
//     photo: Sofa,
//   },
//   {
//     id: 7,
//     name:
//       "Guarda Roupas Panan Linhares 6 portas e 4 gavetas com espelho - Café / Off White",
//     price: 1.849,
//     photo: GuardaRoupas,
//   },
//   {
//     id: 8,
//     name:
//       "Cama Box King Size + Colchão Itália Umaflex com Molas Ensacadas e Pillow Top 68x193x203cm",
//     price: 2.199,
//     photo: Cama,
//   },
//   {
//     id: 9,
//     name:
//       "'TV LED 39' Philco PTV39G50D Resolução HD e Recepção Digital - Preto",
//     price: 1.106,
//     photo: Tv,
//   },
// ];

// const App = (props) => {
//   const [minFilter, setMinFilter] = useState("");
//   const [maxFilter, setMaxFilter] = useState("");
//   const [nameFilter, setNameFilter] = useState("");
//   const [productsInCart, setProductsInCart] = useState([]);

//   const onChangeMinFilter = (event) => {
//     setMinFilter(event.target.value);
//   };

//   const onChangeMaxFilter = (event) => {
//     setMaxFilter(event.target.value);
//   };

//   const onChangeNameFilter = (event) => {
//     setNameFilter(event.target.value);
//   };

//   const onAddProductToCart = (productId) => {
//     const productInCart = productsInCart.find(
//       (product) => productId === product.id
//     );

//     if (productInCart) {
//       const newProductsInCart = productsInCart.map((product) => {
//         if (productId === product.id) {
//           return {
//             ...product,
//             quantity: product.quantity + 1,
//           };
//         }

//         return product;
//       });

//       setProductsInCart(newProductsInCart);
//     } else {
//       const productToAdd = products.find((product) => productId === product.id);

//       const newProductsInCart = [
//         ...productsInCart,
//         { ...productToAdd, quantity: 1 },
//       ];

//       setProductsInCart(newProductsInCart);
//     }
//   };

//   const onRemoveProductFromCart = (productId) => {
//     const newProductsInCart = productsInCart
//       .map((product) => {
//         if (product.id === productId) {
//           return {
//             ...product,
//             quantity: product.quantity - 1,
//           };
//         }
//         return product;
//       })
//       .filter((product) => product.quantity > 0);
//     setProductsInCart(newProductsInCart);
//   };

//   return (
//     <AppContainer>
//       <Filters
//         minFilter={minFilter}
//         maxFilter={maxFilter}
//         nameFilter={nameFilter}
//         onChangeMinFilter={onChangeMinFilter}
//         onChangeMaxFilter={onChangeMaxFilter}
//         onChangeNameFilter={onChangeNameFilter}
//       />
//       <Products
//         products={products}
//         minFilter={minFilter}
//         maxFilter={maxFilter}
//         nameFilter={nameFilter}
//         onAddProductToCart={onAddProductToCart}
//       />
//       <ShoppingCart
//         productsInCart={productsInCart}
//         onRemoveProductFromCart={onRemoveProductFromCart}
//       />
//     </AppContainer>
//   );
// };

// export default App;

import React from "react";
import Router from "./routes/Router";

const App = () => {


  return(
    <div>
      <Router />
    </div>

  )
}
export default App ;