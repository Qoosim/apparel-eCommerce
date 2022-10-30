import React, { Component } from 'react';
import styles from './navbar.module.css';
import { BsCart3 } from 'react-icons/bs';
import { FaShopify } from 'react-icons/fa';

class Navbar extends Component {
  render() {

    const currency = ['$', '£', '¥', '₽'];

    return (
      <header className={styles.headerContainer}>
        <nav className={styles.navbarList}>
          <div>
            <ul className={styles.leftItems}>
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
            </ul>
          </div>
          <FaShopify className={styles.logo} />
          <div>
            <ul className={styles.rightItems}>
              <li>
                <select className={styles.currency}>
                  {
                    currency.map((symbol) => {
                      return (
                        <option value={symbol} key={symbol}>
                          {' '}
                          {symbol}
                        </option>
                      )
                    })
                  }
                </select>
              </li>
              <li className={styles.cartContainer}>
                <BsCart3 className={styles.cartIcon} />
                <span className={styles.cartCounter}>0</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;
