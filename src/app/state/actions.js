import * as actionTypes from "./action-types";

export const changeDate = value => ({
  type: actionTypes.DATE_CHANGE,
  payload: value
});

export const getDifference = difffays => ({
  type: actionTypes.GET_DIFF,
  payload: difffays
});

export function getDateDifference() {
  return function asynCode(dispatch, getState) {
    let state = getState().booking;
    let dat1 = new Date(state.checkindate);
    let dat2 = new Date(state.checkoutdate);
    let timeDiff = Math.abs(dat2.getTime() - dat1.getTime());
    let difffays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    dispatch(getDifference(difffays));
  };
}

export const getSummary = summary => ({
  type: actionTypes.GET_SUMMARY,
  payload: summary
});

export function calculateSummary() {
  return function asynCode(dispatch, getState) {
    let state = getState().booking;

    const { roomType, occupants, difference } = state;

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

    dispatch(getSummary(summary));
  };
}
