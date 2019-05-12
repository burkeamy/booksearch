import axios from "axios";


export default{

    searchBooks: function(query) {
        /*let URL = "www.googleapis.com/books/v1/volumes?q=";
        let key = process.env || ":&key=AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps&startIndex=0&";
        let max = "maxResults=40";
        let book = "hobbit"; */
        
        console.log("made to api.js")
       axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=hobbit:&key=AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps&startIndex=0&maxResults=40") /*{params: req.query})*/
      .then(res => {
      console.log("data???????????? ", res.data);
      res.json(res.data)})
    //.catch(err => res.status(422).json(err));
        return axios.get("/api/books",  /*{params: { q: query} }*/)
        /*.get("api/books", (req, res) => {
            console.log("pre api")
            axios
              .get(URL + book + key + max /*, { params: req.query })
              .then(function(res) {
                  let results = res.data;
                  console.log(results);
                  res.json(res.data)
              })
              /*.then(({ data: { results } }) => res.json(results))
              .catch(err => res.status(422).json(err));  */ 
    }
    /*//supposed to get all books
    getBooks: function() {
        return axios.get("api/books");
    },

    getBook: function(id) {
        return axios.get("api.books" + id);
    },

    deletBook: function(id) {
        return axios.delete("api/books" + id);
    }, 
    saveBook: function(bookData) {
        return axios.post("api/books", bookData);
    }*/
}
//}