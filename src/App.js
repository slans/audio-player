import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  state = {
    filteredText: '',
    inStockOnly: false
  }

  handleFilteredText = (e) => {
    const value = e.target.value;
    this.setState({
      filteredText: value
    });
  }

  handleInStock = (e) => {
    const value = e.target.checked;
    this.setState({
      inStockOnly: value
    });
  }

  render() {
    const { filteredText, inStockOnly } = this.state;
    let data = this.props.data;
    // if (filteredText) {
    //   const filteredData = data.filter(entry => entry.name.contains(filteredText));
    //   data = filteredData;
    // }

    return (
      <>
        <SearchBar 
          value={filteredText} 
          inStockOnly={inStockOnly} 
          handleFilteredText={this.handleFilteredText} 
          handleInStock={this.handleInStock} />
        <FilteredTable data={data} filteredText={filteredText} inStockOnly={inStockOnly} />
      </>
    )
  }
}

const SearchBar = props => {
  return (
    <>
      <input type='text' value={props.value} onChange={props.handleFilteredText} />
      <input id='getStock' type='checkbox' checked={props.inStockOnly} onChange={props.handleInStock} />
      <label htmlFor='getStock'>Only shows products in stock</label>
    </>
  )
}

const FilteredTable = props => {
  const {data, filteredText, inStockOnly} = props;
  const rows = [];
  let lastCategory = null;

  data.forEach(entry => {
    let category = entry.category;
    if (inStockOnly && !entry.stocked) {
      return;
    }
    if (!entry.name.includes(filteredText)) {
      return;
    }
    if (category !== lastCategory) {
      rows.push(<ProductCategory category={category} />);
    }

    rows.push(<ProductRow product={entry} />)
    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const ProductCategory = props => {
  return (
    <tr>
      <th colSpan={2} className='category'>{props.category}</th>
    </tr>
  )
}

const ProductRow = props => {
  const product = props.product;
  const name = product.stocked
    ? product.name
    : <span style={{ color: 'red' }}>{product.name}</span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default App;