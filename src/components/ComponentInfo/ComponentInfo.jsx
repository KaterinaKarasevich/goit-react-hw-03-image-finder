import { Component } from "react"

import { getImages } from "components/utilities/getImages"
import { ImageGallery } from "components/ImageGallery/ImageGallery.styled"
import { ImageGalleryItem, ImageGalleryItemImage } from "components/ImageGalleryItem/ImageGalleryItem.styled"
//const API_KEY = "33443659-5d835de587e8c602875123faf";
//BASE_URL = "https://pixabay.com/api/";
//https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
 class ComponentInfo extends Component {
   state = {
      images: [],
      isLoading: false,
   }

   componentDidUpdate(prevProps, prevState) {
     const searchText = this.props.searchText.trim()
     if (prevProps.searchText !== searchText && searchText) {
       this.setState({ isLoading: true })
       //getImages(searchText).then(({totalHits}) => {this.setState({data:totalHits})})
       getImages(searchText)
         .then(({ hits }) => {
           this.setState({ images: hits })
           .catch(error => {
             console.log(error)
           })
           .finally(() => { this.setState({ isLoading: false }) })
         })
     }

   }
   render() {
     const {images, isLoading} = this.state
      
     return (   
       <>
         {isLoading && <h1>Loading...</h1>}
         {images.length > 0 && (
           <ImageGallery>
             {images.map((image) => (
               <ImageGalleryItem key={image.id}>
                 <ImageGalleryItemImage
                   src={image.webformatURL}
                   alt={image.largeImageURL}
                 />
               </ImageGalleryItem>
             ))}
           </ImageGallery>
         
         )}
         </>
     )
    }

}

export default ComponentInfo