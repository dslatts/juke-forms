import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';


export default class FilterableArtistsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {inputVal: ''};
    this.setInput = this.setInput.bind(this);
  }

  setInput(event){
    this.setState({inputVal: event.target.value});
  }

  render(){
    const inputValue = this.state.inputVal;
    const filteredArtists = this.props.artists.filter(artist =>
    artist.name.match(inputValue));
    return (
    <div>
      <FilterInput setInput={this.setInput} />
      <Artists artists={filteredArtists} />
    </div>
    );
  }
}
