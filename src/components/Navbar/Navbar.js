import React, { Component } from 'react';
import styles from './navbar.module.css';

class Navbar extends Component {
  render() {
    const currency = ['$', '£', '¥', '₽'];
    return (
      <>
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
              <li>cart</li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;
