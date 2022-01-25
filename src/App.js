import React, { Component } from "react";
import "./App.css";

import Searchbar from "./Components/Searchbar/Searchbar";
// 'edle' стоит на месте, простой
// 'pending' ожидается выполнения
// 'resolved' выполнилось с результатом
// 'rejected' отклонено

class App extends Component {
  state = {
    requestFromUser: "",
    status: "edle",
    on: 1,
  };

  handlerSubmit({ requestFromUser }) {
    console.log("handlerSubmit:", requestFromUser);
    //this.setState({ requestFromUser: "hhhh" });
  }

  render() {
    //const (status, ) = this.state;
    if (this.state.status === "edle") {
      console.log("ffff");
    }

    return <Searchbar onSubmit={this.handlerSubmit} />;
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
