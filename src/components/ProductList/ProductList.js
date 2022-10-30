import React, { Component } from 'react';
import Product from '../Product/Product';
import styles from './productList.module.css';
import data from '../../data';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
    }
  }

  productFetch = `{
    categories {
      name
      products {
        id
        name
        gallery
        description
        category
        attributes {
          id
          name
          type
          items
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
        
      }
    }
  }
`

  render() {
    return (
      <div className={styles.productsContainer}>
        {
          this.state.products.map((product) => {
            return (
              <Product key={product.id} product={product} />
            )
          })        
        }
      </div>
    )
  }
}

export default ProductList;
