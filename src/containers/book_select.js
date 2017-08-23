import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookSelect extends Component{
    render(){
        console.log(this.props);
        if(!this.props.book){
            return(<div className="col-md-5">Please select a image</div>)
        }
        return (<div className="col-md-5">
            "Heeyy"
            {this.props.book.title}
        </div>)
    }

}

function mapStateToProps(state) {
    return{
        book: state.book
    }
}

export default connect(mapStateToProps)(BookSelect)
