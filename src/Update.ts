import type { ActionType, Model } from "./types";
import { MSGS } from "./types";

export function getSerie(serie: string) {
  return {
    type: MSGS.GET_SERIE,
    serie,
  };
}

function update(msg: ActionType, model: Model): any {
  switch (msg.type) {
    case MSGS.GET_SERIE:
      const { serie } = msg;
      return { ...model, serie };
    default:
      console.log("default");
      return model;
  }
}

export default update;
