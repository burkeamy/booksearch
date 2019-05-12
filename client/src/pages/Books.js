import React, {Component} from "react";
import Jumbotron from "../components/jumbotron/jumbotron.js";
//import API from "../utils/API.js";
import { Col, Row, Container } from "../components/grid";
//import { List, ListItem } from "../components/List";
import { Input } from "../components/forms";
//import BookList from "./components/BookList";
import Button from "../components/button";

class Books extends Component {
    state = {
        books: []
    };

    /*componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data}))
            .catch(err => console.log(err));
    }*/

        render() {
            return (
              <Container fluid>
                <Row>
                  <Col size="md-6">
                    <Jumbotron>
                      <h1>Search for a book</h1>
                    </Jumbotron>
                    <form>
                      <Input name = "title" placeholder= "title (required"/>
                      <Input name = "author" placeholder= "Author (required"/>
                      <Button> Submit Search </Button>
                    </form>
                  </Col>
                  <Col size = "md-6">
                    <Jumbotron>

                    </Jumbotron>
                  </Col>
                </Row>
              </Container>
              )
    }
}


export default Books;