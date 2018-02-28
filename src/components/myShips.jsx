import React, { Component } from 'react';
import { base } from '../base.js';
import './myShips.css';

class MyShips extends Component {
	constructor(){
		super();
		this.state = {
			amIFirstPlayer: null,
			myShips: {},
			enemyShips: {}
		}
	}
	componentWillMount(){
		this.ref = base.syncState("firstPlayerPlaying/", {
			context: this,
			state: "amIFirstPlayer"
		});
	}
	componentDidMount(){
		if(this.state.amIFirstPlayer){
			this.ref = base.syncState("firstPlayerShips/myShips", {
				context: this,
				state: "myShips"
			});
			this.ref = base.syncState("secondPlayerShips/myShips", {
				context: this,
				state: "enemyShips"
			});
		} else {
			this.ref = base.syncState("secondPlayerShips/myShips", {
				context: this,
				state: "myShips"
			});
			this.ref = base.syncState("firstPlayerShips/myShips", {
				context: this,
				state: "enemyShips"
			});
		}
	}

	handleClick = (e) => {
		const four = [];
		const three =[];
		const two = [];
		const one = [];
		if(this.state.myShips) {
			if(four.length < 4) {
				four.push(e.target.id)
			}
			if(four.length === 3){
				this.setState({
					myShips: four
				})
			}
		}
	}

  render() {
		const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="myShipsWrapper">
        <h3>My ships</h3>
				<table>
					<tbody>
						{rows.map((row, index) =>
							<tr key={rows[index]} id={index}>
								<td id={`${rows[index]}0`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}1`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}2`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}3`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}4`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}5`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}6`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}7`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}8`} onClick={this.handleClick}></td>
								<td id={`${rows[index]}9`} onClick={this.handleClick}></td>
							</tr>
						)}
					</tbody>
				</table>
      </div>
    );
  }
}

export default MyShips;
