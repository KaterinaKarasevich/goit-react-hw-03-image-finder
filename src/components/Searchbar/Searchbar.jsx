import { Component } from "react"
//import PropTypes from 'prop-types'; 
import loupe from "components/utilities/loupe.svg"
import { SearchBarData, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled"


export class Searchbar extends Component {
    state = {
      value: "",
  }
  
handleChange = ({target: {value}}) => {
  this.setState({value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.createSearchText(this.state.value)
}
render() {
return (
<SearchBarData>
  <SearchForm onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit" style={{ backgroundImage: `url(${loupe})` }}>
      <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      autocomplete="off"
      autoFocus
        placeholder="Search images and photos"
        onChange={this.handleChange}
        value={this.state.value}
        
    />
  </SearchForm>
</SearchBarData>)
 }
}