import React, { Component } from 'react';
// import { useQuery, gql } from '@apollo/client';

const productQuery = `
  {
    categories {
      name
      products {
        id
        name
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        inStock
        gallery
        category
        description
        attributes {
          id
          name
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`
// const  { loading, data, error } = useQuery(GET_PRODUCTS);

class QueryTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: [],
    }
  }

  productFetch = async () => {
    try {
      const response = await fetch('http://localhost:4000/',
        {
          method: 'POST',
          body: JSON.stringify({ query: productQuery }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
      );
      const data = await response.json();
      this.setState({ result: data });
    } catch (err) {
      throw new Error(err);
    }
  }

  componentDidMount() {
    this.productFetch();
  }

  render() {
    const result = this.state.result.data;
    // console.log(result);
    return (
      <>
        {
          result && result.categories?.map((result) => {
            const { products } = result;
            console.log(products)
            return (
              <>
              </>
            )
          })
        }
      </>
    )
  }
}

export default QueryTest;
