import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  constructor(){
    super()
    this.state = {
      pizzas: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas")
      .then(res => res.json())
      .then(data => this.setState({
        pizzas: data
      }))
  }

  render() {
    console.log(this.state.pizzas)

    let list = this.state.pizzas.map(pizza => <Pizza 
      key= {pizza.id} 
      pizza = {pizza} 
      />)

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" >Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
          <tbody>
            {list}
          </tbody>
      </table>
    );
  }

}

export default PizzaList;


// let list = this.filterSpyList().map(spyObj => <Spy key={spyObj.codeName} clickHandler={this.props.clickHandler} spy={spyObj} />)

