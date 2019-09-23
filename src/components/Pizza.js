import React from "react"

class Pizza extends React.Component{
  state = {
    clicked: false
  }
  
  handleClick = () => {
    // console.log(e.target)
    // this.setState({ clicked: !this.state.clicked })
    console.log(this.props.pizza)
  }

  render(){
    // console.log(this.props.pizza)
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian ? "yes" : "no"}</td>
        <td><button type="button" className="btn btn-primary" onClick = {this.handleClick}>Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
