import React, { Component } from 'react';
import BookList from '../containers/books_list';
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1 className="text-primary">React_redux Book</h1>
      <div className="container">

      <div className="row">
      <div className="col-md-4 col-md-offset-1">
      <BookList />
      </div>
      <div className="col-md-4 col-md-offset-1">
      <BookDetail />
      </div>
      </div>
      </div>
      </div>
    );
  }
}
