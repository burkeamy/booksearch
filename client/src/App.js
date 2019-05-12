
import React, {Component} from "react";
import Nav from "./components/Nav";
import Books from "./pages/Books.js";
import API from "./utils/API.js";

/*
function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  )
}*/


class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };


handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name] : value
  });
};

handelFormSubmit = event => {
  event.preventDefault();
  API.getBooks(this.state.bookSearch)
    .then(res => this.setState({ books: res.data}))
    .catch(err => console.log(err));
  };
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
