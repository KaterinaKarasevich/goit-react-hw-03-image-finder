import React, {Component} from "react"
import { Searchbar } from "components/Searchbar/Searchbar"
import  ComponentInfo  from "components/ComponentInfo/ComponentInfo"
import { Container } from "./App.styled"


export class App extends Component {
  state = {
     searchText: "",
   // hits: null,
  }
  
  createSearchText = (searchText) => {
    this.setState({searchText})
}
  componentDidMount() {
   // fetch("https://pixabay.com/api/?q=cat&page=1&key=33443659-5d835de587e8c602875123faf&image_type=photo&orientation=horizontal&per_page=12")
     // .then(res => res.json())
//.then(console.log)
      //.then(hits => this.setState({hits}));
      //.then(console.log("hits"))
}
render() {
  return (
    //<div>{this.state.hits && (<div>Images</div>)}</div>
    <Container>
      <Searchbar createSearchText={this.createSearchText} />
      <ComponentInfo searchText={this.state.searchText} />
    </Container>
)
  }
};
