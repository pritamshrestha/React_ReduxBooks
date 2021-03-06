import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
renderList(){
	return this.props.books.map((book)=>{
		return(
			<li onClick={()=>this.props.selectBook(book)}
				key={book.title} className="list-group-item">
			{book.title}
			</li>)

	});
}

	render(){
		return(
           <ul className="list-group col-sm-4">
           {this.renderList()}
           </ul>

			);

	}
}
//this is used to connect to the reducer
function mapStateToProps(state){
	return{
	books:state.books
}
}
// this is use to connect the actioncreators
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
