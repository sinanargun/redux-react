import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBox, deleteBox } from '../actions/index';
import './../../style/style.css';

class Box extends Component {

	show()
	{
		const box = (i) => <div key={i} className="box">Box {i+1}</div>;
		const boxes = [];

		for(let i = 0; i < this.props.boxCount; i++)
		{
			boxes.push(box(i));
		}

		return boxes;

	}
	

	render()
	{

		return (

			<div>
				{this.show()}
				<button onClick={this.props.addBox}> Ekle </button>
				<button onClick={this.props.deleteBox}> Çıkar </button>
			</div>

			);
	}

} 

const mapStateToProps = state => ({
  boxCount: state.boxCount
})

export default connect(mapStateToProps,{addBox, deleteBox})(Box);