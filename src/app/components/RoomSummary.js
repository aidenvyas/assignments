import React from "react";

let RoomSummary = props => {
  console.log(props, " in room summary");

  return (
    <div>
      <h3>RoomSummary</h3>
      <p>Total</p> {props.roomSummary.total}
      <p>Nights</p>
      <p>occupant charges</p>{props.roomSummary.occupantCharges}
      <p>total room charges</p>{props.roomSummary.totalRoomCharges}
      <p>discount</p>{props.roomSummary.discount}
      <p>total occupant charges</p>     {props.roomSummary.totalOccupantCharges}
      <p>room charges grand total</p>  {props.roomSummary.grandTotal}
      <p>before tax</p>
      <p>gst</p>{props.roomSummary.gst}
      <p>payable</p>  {props.roomSummary.grandTotal}
    </div>
  );
};

export default RoomSummary;
