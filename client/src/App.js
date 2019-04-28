
import React, { Component } from "react";
import API from './utils/api';
import {BookList, BookListItem} from "./components/BookList";
import Nav from './components/Nav';
import Jumbotron from './components/jumbotron/jumbotron';
import Input from './components/input/input';
import Button from './components/button/index';
import { Container, Row, Col } from "./components/grid/index";


//setting the book state
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
      < Nav />
      <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size = "md-8">
                      <Input
                        name = "bookSearch"
                        value = {this.state.bookSearch}
                        onChange = {this.handleInputChange}
                        placeholder = "Search for a book"
                      />
                  </Col>
                  <Col size = "md-3">
                    <Button
                      onClick = {this.handleFormSubmit}
                      type = "success"
                      className = "input-lg"
                    >
                      Search  
                    </Button>
                  </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size = "md-10">
              {!this.state.books.length ? (
                <h1 className = "text-center">It's a sad day, no books to display</h1>
                ) : (
                <BookList>
                  {this.state.books.map(books => {
                    return(
                      <BookListItem
                      />
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
