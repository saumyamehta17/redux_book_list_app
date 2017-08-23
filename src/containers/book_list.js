import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectBook from "../actions/index";
class BookList extends Component{
    listItems(){
        return(
            this.props.books.map(book => {
                return(
                    <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">
                        {book.title}
                    </li>
                )
            })
        )
    }
    render(){
        return(
            <ul className="list-group col-md-4">
                {this.listItems()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {books: state.books}
}

function mapActionToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch)
}
export default connect(mapStateToProps, mapActionToProps)(BookList)