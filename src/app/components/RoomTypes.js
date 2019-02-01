import React, { Component } from "react";
import SelectBox from "./SelectBox";
import RoomSummary from "./RoomSummary";

class RoomType extends Component {
  static getDerivedStateFromProps(props) {
    // console.log(props,'in room types ggetDerivedStateFromPropsgetDerivedStateFromPropsgetDerivedStateFromPropsgetDerivedStateFromPropsgetDerivedStateFromProps')

    return props.occupants !== 0 && props.roomType !== ""
      ? props.functioncall()
      : "";
  }
  render() {
    return (
      <div>
        <h3>RoomType</h3>
        <SelectBox
          label="Room Type"
          name="roomType"
          options={["Select Type", "Standard", "Delux"]}
          onchange={this.props.onchange}
        />
        <SelectBox
          name="occupants"
          label="Number Of Occupants"
          options={["select", 1, 2, 3, 4]}
          onchange={this.props.onchange}
        />

        {/* <RoomSummary roomsummary={props.roomSummary} /> */}
      </div>
    );
  }
}

export default RoomType;
