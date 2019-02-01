import React, { Component } from "react";
import Checkout from "./app/containers/Checkout";
import RoomSummary from "./app/components/RoomSummary";
import Summary from "./app/containers/summary";

class App extends Component {
  render() {
    // console.log(this.props , "  Props in App");

    return (
      <div>
        <h1>Hotel Booking</h1>
        <Checkout />
        {/* <Summary /> */}
      </div>
    );
  }
}

export default App;
