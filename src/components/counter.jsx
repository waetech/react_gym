import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        member: {
            firstName: 'Bob',
            lastName: 'Newhart',
            imgUrl: 'https://picsum.photos/200'
        },
        address: {
            street: '14 Oak Dr',
            city: 'Richmond',
            state: 'VA',
            zipcode: 12345

        }
    };

    styles = {
        fontSize: 14,
        fontWeight: "bold"
    }

formatCount() {

}
     render() {
          return (
            <div>
                <h1>Gold Gym Member</h1>
                
                <img src={this.state.imgUrl} alt="pic"></img>
                <h4>{[this.state.member.firstName + " "+this.state.member.lastName]}</h4>
                <p>{[this.state.address.street + " "+ this.state.address.city + " "+ this.state.address.state+ " " + this.state.address.zipcode]}</p>
                <span className="badge badge-primary m-2">{this.state.member.count}</span>
                <button className="btn btn-primary btn-sm">Increment</button>
            </div>
        );          
    }
}



export default Counter;