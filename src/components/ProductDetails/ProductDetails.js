import React, { Component } from 'react';
import data from '../../data';
import styles from './productDetails.module.css';

class ProductDetails extends Component {


  render() {
    const product = data[0];
    console.log(product);

    return (
      <div className={styles.detailContainer}>
        <div className={styles.sideList}>
          Image List
        </div>
        <div className={styles.imageContainer}>
          <img src={product.photo} alt="Detail Pix" />
        </div>
        <div className={styles.imageInfo}>
          <h3 className={styles.topTitle}>{product.desc.split(' ')[0]}</h3>
          <p className={styles.bottomTitle}>{product.desc.split(' ').splice(1).join(' ')}</p>
          <div className={styles.sizesBigContainer}>
            <h3 className={styles.sizesTitle}>Size:</h3>
            <div className={styles.sizesSmallContainer}>
              <div className={styles.sizes}>XS</div>
              <div className={styles.sizes}>S</div>
              <div className={styles.sizes}>M</div>
              <div className={styles.sizes}>L</div>
            </div>
          </div>
          <div className={styles.colorBigContainer}>
            <h3 className={styles.colorTitle}>Color</h3>
            <div className={styles.colorSmallContainer}>
              <div className={`${styles.colors} ${styles.colorA}`}></div>
              <div className={`${styles.colors} ${styles.colorB}`}></div>
              <div className={`${styles.colors} ${styles.colorC}`}></div>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <h3 className={styles.priceTitle}>Price:</h3>
            <h4 className={styles.priceActual}>{product.price}</h4>
          </div>
          <button className={styles.addToCartBtn}>Add to Cart</button>
          <p className={styles.textInfo}>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
        </div>
        <div className={styles.divEmpty}></div>
      </div>
    )
  }
}

export default ProductDetails;
