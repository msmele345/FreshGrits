//import react and react libraries 
import React, { Component } from 'react';



//DEFINE COMPONENT FIRST
//every class component must have a render method
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  } 

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState( {term} )
    this.props.onSearchTermChange(term);
  }
};



//export component so other components can access it 
//dont forget to import it on the main app
export default SearchBar;





//STATE NOTES
//STATE is a js object
//STATE each component has its own state (Class only)
//When component state is changed, it re-renders itself and all children 
//This.state is only set with = inside the constructor. All modifiying state jobs is done with this.setState function 