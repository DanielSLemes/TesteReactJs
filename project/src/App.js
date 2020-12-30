import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import Geladeira from "./components/Assets/Img/gel.png";
import Fogao from "./components/Assets/Img/foga.png";
import Armario from "./components/Assets/Img/armario.jpg";
import PiaCozinha from "./components/Assets/Img/piaCozinha.png";
import Mesa from "./components/Assets/Img/mesaJantar.png";
import Sofa from "./components/Assets/Img/sofa.jpg";
import GuardaRoupas from "./components/Assets/Img/guardaRoupas.png";
import Cama from "./components/Assets/Img/cama.jpg";
import Tv from "./components/Assets/Img/tv.jpg";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: 1,
    name: 'Geladeira / Refrigerador Brastemp, Duplex, Frost Free, Turbo Ice, 462L, Evox - BRM56AK',
    price: 1000,
    photo: Geladeira
  },
  {
    id: 2,
    name: 'Fogão À Gas Itatiaia Com 4 Bocas E Acendimento Automático Star Branco Bivolt',
    price: 549,
    photo: Fogao
  },
  {
    id: 3,
    name: 'Armário de Cozinha 4 Peças Júlia',
    price: 409,
    photo: Armario
  },
  {
    id: 4,
    name: 'Pia de Cozinha em Granito Preto Absoluto',
    price: 1600,
    photo: PiaCozinha
  },
  {
    id: 5,
    name: 'Antiga Mesa De Jantar Pe Palito Anos 50 Com 6 Cadeiras',
    price: 3000,
    photo: Mesa
  },
  {
    id: 6,
    name: 'Sofá 3 Lugares Nevada Suede Azul Turquesa',
    price: 1.163,
    photo: Sofa
  },
  {
    id: 7,
    name: 'Guarda Roupas Panan Linhares 6 portas e 4 gavetas com espelho - Café / Off White',
    price: 1.849,
    photo: GuardaRoupas
  },
  {
    id: 8,
    name: 'Cama Box King Size + Colchão Itália Umaflex com Molas Ensacadas e Pillow Top 68x193x203cm',
    price: 2.199,
    photo: Cama
  },
  {
    id: 9,
    name: "'TV LED 39' Philco PTV39G50D Resolução HD e Recepção Digital - Preto",
    price: 1.106,
    photo: Tv
  }
  
]

class App extends React.Component {
  state = {
    minFilter: "",
    maxFilter: "",
    nameFilter: "",
    productsInCart: [
    
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;
