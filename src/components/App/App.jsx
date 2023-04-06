import React, {Component} from "react"
import { Searchbar } from "components/Searchbar/Searchbar"

import {Modal} from "components/Modal/Modal"
import { Container } from "./App.styled"
import { getImages } from "components/utilities/getImages"
import { ImageGallery } from "components/ImageGallery/ImageGallery"
import { ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"
import { Button } from "components/Button/Button"

export class App extends Component {
  state = {
    searchText: "",
    images: [],
    isLoading: false,
    isShowModal: false,
    selectedImg: "",
    page: 1,
    totalHits: 0,
   // hits: null,
  }


createSearchText = ({inputText}) => {
  this.setState({ searchText: inputText, page: 1, images: []});
}

showModal = () => {
    this.setState({ isShowModal: true })
}

closeModal = () => {
    this.setState({ isShowModal: false, selectedImg: "" })
}  
  
selectImg = ({ target }) => {
    if (target.src) {
      this.setState({selectedImg: target.alt});
      this.showModal();
  }
  } 
  handleClick = ({ page}) => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
     
     if (prevState.searchText !== this.state.searchText ||
         prevState.page !== this.state.page) {
       this.setState({ isLoading: true });
       //getImages(searchText).then(({totalHits}) => {this.setState({data:totalHits})})
       getImages(this.state.searchText, this.state.page)
         .then(response => response.json())
         .then(data => 
           this.setState(prevState => ({ images: [...prevState.images, ...data.hits], totalHits: data.totalHits }))
         )
         .catch(error => 
             this.setState({ error }))
         .finally(() => { this.setState({ isLoading: false }) 
          
         })
     }

   }  

  render() {
  const {isShowModal, isLoading, images, selectedImg, page, totalHits} = this.state
  return (
    //<div>{this.state.hits && (<div>Images</div>)}</div>
    <Container>
      <Searchbar createSearchText={this.createSearchText} />
      {isLoading && <h1>Loading...</h1>}
      
      {images.length > 0 && (
      <ImageGallery onClick={this.selectImg}>
        
          <ImageGalleryItem 
            searchText={this.state.searchText}
            images={this.state.images}
            isLoading={this.state.isLoading}
   
            page={this.state.page}
            totalHits={this.state.totalHits}/>
                       
      </ImageGallery>)}
       
      {images && page !== Math.ceil(totalHits / 12) && images.length >= 12 && (
            <Button handleClick={this.handleClick}/>
          )}
      {isShowModal && (<Modal closeModal={this.closeModal} selectedImg={selectedImg}/>)}
      </Container>)
      }
      };

   //<ImageGallery onClickImg={this.selectImg}></ImageGallery>