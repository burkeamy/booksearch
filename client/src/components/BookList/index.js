import React from "react";
//import Thumbnail from "../Thumbnail";
import {Container, Row, Col} from "../grid";

//exporting booklist and booklistitem

export function BookList ({ children }) {
    return <ul className = "list-group">
        {children}
    </ul>;
}

export function BookListItem ({
    title
}) {
    return(
        <li className = "list-group-item">
            <Container>
                <Row>
                    <Col size = "md-4">
                        <h3>{title}</h3>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}