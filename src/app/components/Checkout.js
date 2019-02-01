import React, { Component } from "react";
import InputDate from "./dateInput";
import Difference from "./difference";
import RoomType from "./RoomTypes";
import Summary from "../containers/summary";
class Checkout extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.checkindate && props.checkoutdate) {
      console.log("here ");
      props.dateHandler.getDateDifference();
    }
  }

  render() {
    console.log(this.props, " in chcekout ....");
    return (
      <div>
        <h3>select dates</h3>
        <InputDate
          type="date"
          name="checkindate"
          onchange={this.props.dateHandler.changeDate}
        />
        <InputDate
          type="date"
          name="checkoutdate"
          onchange={this.props.dateHandler.changeDate}
        />
        {this.props.difference ? (
          <Difference difference={this.props.difference} />
        ) : (
          ""
        )}
        <hr />
        <RoomType
          onchange={this.props.dateHandler.changeDate}
          roomType={this.props.roomType}
          occupants={this.props.occupants}
          functioncall={this.props.dateHandler.calculateSummary}
          roomSummary={this.props.roomSummary}
        />
        <Summary />
      </div>
    );
  }
}

export default Checkout;
