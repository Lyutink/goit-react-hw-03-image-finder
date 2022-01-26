// Компонент принимает один проп onSubmit - функцию для
// передачи значения инпута при сабмите формы.
//Создает DOM - элемент следующей структуры.
import React, { Component } from "react";
// <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>{
class Searchbar extends Component {
  state = {
    requestFromUser: "",
  };

  handleChange = (event) => {
    // this.setState({
    //     [event.currentTarget.name]: event.currentTarget.value,
    // });
    console.log(event.currentTarget.value);
    this.setState({ requestFromUser: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ requestFromUser: "" });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            type="text"
            //autocomplete="off"
            //autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
