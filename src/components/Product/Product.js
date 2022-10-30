import React, { Component } from 'react';
import styles from './product.module.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    }
  }

  render() {
    return (
      <div className={styles.productCard}>
        <img
          src={this.state.product.photo}
          alt="Product Pix"
          className={styles.styleImage}
        />
        <div className={styles.productInfo}>
          <h4 className={styles.productDesc}>{this.state.product.desc}</h4>
          <h6 className={styles.productPrice}>{this.state.product.price}</h6>
        </div>
      </div>
    )
  }
}

export default Product;
