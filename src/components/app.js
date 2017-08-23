import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookSelect from '../containers/book_select'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookSelect/>
      </div>
    );
  }
}
