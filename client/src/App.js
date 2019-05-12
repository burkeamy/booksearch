
import React, {Component} from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books.js";
import API from "./utils/API.js";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

//this is supposed to handle the initial search
handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name] : value
  });
};

//this is supposed to send the saved data to the database
handelFormSubmit = event => {
  event.preventDefault();
  API.getBooks(this.state.bookSearch)
    .then(res => this.setState({ books: res.data}))
    .catch(err => console.log(err));
  };

  // rendering everything to the DOM
  render() {
    return (
      <div>
        <Nav />
        <Books />
      </div>
    )
  }
}
export default App;
