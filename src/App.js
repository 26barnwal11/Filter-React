import React, {Component} from 'react';
import './App.css';
import DogList from './DogList';
import SearchBox from './SearchBox';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dogs: [
        {name:"Max",breed:"Lab"},
        {name:"Sparky",breed:"German Shepard"},
        {name:"Rex",breed:"Boxer"},
        {name:"Sally",breed:"Poodle"},
        {name:"George",breed:"Pitbull"},
      ],
      searchDog:''
    }
  }

  handleInput = (e) => {
    this.setState({searchDog:e.target.value})
  }

  render(){

    let filteredDogs = this.state.dogs.filter((dog) => {
      return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase());
    })

    return(
      <div className="App">
        <h1>Dog Images</h1>
        <SearchBox handleInput={this.handleInput}/>
        <DogList dogs={filteredDogs}/>
      </div>
    )
  }
}

export default App;
