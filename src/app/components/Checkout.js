import React, { PureComponent } from "react";
import InputDate from "./dateInput";
import Difference from "./difference";
import RoomType from "./RoomTypes";
import Summary from "../containers/summary";
class Checkout extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (props.checkindate && props.checkoutdate) {
      props.dateHandler.getDateDifference();
      if (props.roomType != "" && props.occupants > 0) {
        const { roomType, occupants, difference } = props;

        const roomCharge = roomType === "Standard" ? 2000 : 4000;
        const occupantCharges = occupants === 1 ? 0 : (occupants - 1) * 200;
        const totalRoomCharges = difference * roomCharge;
        const totalOccupantCharges = difference * occupantCharges;

        const discount = difference >= 5 ? 15 : 0;
        const grandTotal = Math.ceil(
          totalRoomCharges - (totalRoomCharges * discount) / 100.0
        );

        let total = 0;
        if (discount) {
          total = roomCharge + occupantCharges * (discount / 100);
        } else {
          total = roomCharge + occupantCharges;
        }
        let gst = parseInt(total * 0.18);
        const afterTax = (totalOccupantCharges + grandTotal) * 1.18;

        let summary = {
          total,
          roomCharge,
          occupantCharges,
          totalRoomCharges,
          totalOccupantCharges,
          discount,
          grandTotal,
          afterTax,
          gst
        };
        props.dateHandler.getSummary(summary);
      }
    }
  }

  render() {
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
