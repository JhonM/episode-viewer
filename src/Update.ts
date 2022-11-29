import type { ActionType, Model } from "./types";
import { MSGS } from "./types";
import { mapApiToModel } from "./helpers";

export function getSerie(serie: Model) {
  return {
    type: MSGS.GET_SERIE,
    serie,
  };
}

function update(msg: ActionType, model: Model): Model {
  switch (msg.type) {
    case MSGS.GET_SERIE:
      const apiToModel = mapApiToModel(Object.entries(msg.serie));
      const { title, plot } = apiToModel;

      return { ...model, title, plot };
    default:
      return model;
  }
}

export default update;
