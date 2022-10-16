import React, { Component } from 'react';
import styles from './navbar.module.css';
import { BsCart3 } from 'react-icons/bs';

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
          <div>Logo</div>
          <div>
            <ul className={styles.rightItems}>
              <li>
                <select className={styles.currency}>
                  {
                    currency.map((curr) => {
                      return (
                        <option value={curr} key={curr}>
                          {' '}
                          {curr}
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
