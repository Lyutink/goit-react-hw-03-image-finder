import React, { Component } from "react";
//import axios from "axios";
//import * as HTTPServise from './fetchImages';
//import Notiflix from 'notiflix';
import "./App.css";

import { fetchImages } from "./services/fetchImages";
import Searchbar from "./Components/Searchbar/Searchbar";
// 'edle' стоит на месте, простой
// 'pending' ожидается выполнения
// 'resolved' выполнилось с результатом
// 'rejected' отклонено

class App extends Component {
  state = {
    requestFromUser: "",
    images: [],
    status: "edle",
    page: 1,
    error: null,
  };

  handlerSubmit = ({ requestFromUser }) => {
    console.log("handlerSubmit:", requestFromUser);
    this.setState({ requestFromUser: requestFromUser });
  };

  // fetchImages = (nextRequestFromUser, page, per_page) => {
  //   axios.defaults.baseURL = 'https://pixabay.com/api/';
  //   const API_Key = "24366692-ce9347f3f27462bce5924cca4";
  // return axios.get(`?key=${API_Key}&q=${nextRequestFromUser}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`);
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevRequestFromUser = prevState.requestFromUser;
    const nextRequestFromUser = this.state.requestFromUser;
    const newPage = this.state.page;

    if (prevRequestFromUser !== nextRequestFromUser) {
      this.setState({ status: "edle" }); // pending

      fetchImages(nextRequestFromUser, newPage).then((response) => {
        console.log("respons", response.data);
        const imagesArr = response.data.hits;
        console.log("response.data.hits", imagesArr);
        this.setState({ images: [...imagesArr] });
      });
      //.then(response => {
      //   if (response.ok) {
      //     console.log("respons", response.json());
      //     return response.json();
      //   }
      //   return Promise.reject(
      //     new Error('Нет такой картинки'),
      //   );
      // })
      //   .then(images => this.setState({ images: [...images], status: 'resolved' }))
      // .catch(error => this.setState({ error, status: 'rejected' }))
      // console.log("oooooooooooooooo");
      // fetch(`https://pixabay.com/api/?key=${API_Key}&q=${nextRequestFromUser}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`)
      //   .then(response => {
      //     if (response.ok) {
      //       console.log("respons", response.json());
      //       return response.json();
      //     }

      //     return Promise.reject(
      //       new Error('Нет такой картинки'),
      //     );
      //   })
      //   .then()
      //   .catch(error => this.setState({ error }))
      //}
    }
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
