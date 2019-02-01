import React from "react";
import SelectBox from "./SelectBox";
import RoomSummary from "./RoomSummary";

let RoomType = props => (
  <div>
    <h3>RoomType</h3>
    <SelectBox
      label="Room Type"
      name="roomType"
      options={["Select Type", "Standard", "Delux"]}
      onchange={props.onchange}
    />
    <SelectBox
      name="occupants"
      label="Number Of Occupants"
      options={["select", 1, 2, 3, 4]}
      onchange={props.onchange}
    />
    {props.occupants !== 0 && props.roomType !== "" && !props.roomSummary.total
      ? props.functioncall()
      : ""}
    {props.roomSummary ? <RoomSummary roomSummary={props.roomSummary} /> : ""}
  </div>
);

export default RoomType;
