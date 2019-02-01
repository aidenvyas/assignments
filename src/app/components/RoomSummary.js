import React from "react";

let RoomSummary = props => {
  console.log(props, " in room summary");

  return (
    <div>
      <h3>RoomSummary</h3>
      <p>Total {props.booking.total}</p>
      <p>Nights{props.booking.difference}</p>
      <p>occupant charges{props.booking.occupantCharges}</p>
      <p>total room charges{props.booking.totalRoomCharges}</p>
      <p>discount{props.booking.discount}</p>
      <p>total occupant charges {props.booking.totalOccupantCharges}</p>
      <p>room charges grand total {props.booking.grandTotal}</p>
      <p>after tax {props.booking.afterTax}</p>
      <p>gst{props.booking.gst}</p>
      <p>payable {props.booking.grandTotal}</p>
    </div>
  );
};

export default RoomSummary;
