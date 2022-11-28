import { h } from "@jhonm/blanc-vdom/src";
import type { DispatchType, Model } from "../types";
import { getSerie as updatSerie } from "../Update";
import { getSerie } from "../api";

export function MainView(dispatch: DispatchType, model: Model) {
  document.addEventListener("DOMContentLoaded", () => {
    getSerie()
      .then((data) => data.json().then((body) => dispatch(updatSerie(body))))
      .catch((error) => console.log(error, "error"));
    // .finally(() => console.log("finally"));
  });

  return h("div", {}, "Main view");
}
