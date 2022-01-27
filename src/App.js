import React, { Component } from "react";
//import axios from "axios";
//import * as HTTPServise from './fetchImages';
import Notiflix from "notiflix";
import "./App.css";

import { fetchImages } from "./services/fetchImages";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import Button from "./Components/Button/Button";
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

  handlerLoaderMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequestFromUser = prevState.requestFromUser;
    const nextRequestFromUser = this.state.requestFromUser;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevRequestFromUser !== nextRequestFromUser || prevPage !== newPage) {
      this.setState({ status: "pending" });

      fetchImages(nextRequestFromUser, newPage)
        .then((response) => {
          console.log("respons", response.data);
          const imagesArr = response.data.hits;
          console.log("imagesArr", imagesArr.length);

          if (!imagesArr.length) {
            Notiflix.Notify.failure(
              "Sorry, there are no images matching your search query. Please try again."
            );
            this.setState({ status: "rejected", images: [] });
            return;
          }
          console.log("response.data.hits", imagesArr);
          this.setState({
            images: [...this.state.images, ...imagesArr],
            status: "resolved",
          });
        })
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { status, images } = this.state;
    if (this.state.status === "edle") {
      console.log("ffff");
    }

    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        {status !== "edle" && status !== "rejected" && (
          <>
            {status === "pending" && <Loader />}
            {status === "resolved" && (
              <>
                <ImageGallery images={images} />
                <Button type="button" onClick={this.handlerLoaderMore}></Button>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
