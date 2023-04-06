
import { ImageGalleryStyle } from "components/ImageGallery/ImageGallery.styled"

//export const ImageGallery = ({ children, onClickImg }) => {
  //  return <ImageGalleryStyle onClickImg={onClickImg }>{children}</ImageGalleryStyle>

//}

export const ImageGallery = ({children, onClick }) => {
    return <ImageGalleryStyle onClick={onClick}>{children}</ImageGalleryStyle>

}