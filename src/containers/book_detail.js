import React,{ Component } from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component{
	render(){
		if(!this.props.book){
			return<div className="text-warning">Please select the book to get started.</div>;
		}
		return(     
                <div id="suchana">
                <h1 className="text-danger">Book Details:</h1>
                <div className="text-primary">Title: {this.props.book.title}</div>
                <div className="text-info">Name of Author: {this.props.book.author}</div>
                <div className="text-success">Book Price: {this.props.book.price}</div>
				<div className="text-warning">description:{this.props.book.description}</div>
                </div>
			);
	}
}

// this is the use of the helper function to connect
function mapToStateProps(state){
	return{
		book:state.activeBook
	}

}
export default connect(mapToStateProps)(BookDetail)
