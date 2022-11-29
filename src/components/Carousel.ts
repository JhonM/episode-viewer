import type { Episode } from "../types";

export class Carousel {
  items: Episode[];
  id: string;
  itemWidth: number;

  constructor(items: Episode[], id: string) {
    this.items = items;
    this.id = id;
    this.itemWidth = 300;
  }

  public nextItem() {
    const element = document.getElementById(this.id);

    if (
      element &&
      element.scrollLeft < element.scrollWidth - this.itemWidth - 7 * 56
    ) {
      element.scrollBy({ left: this.itemWidth, top: 0, behavior: "smooth" });
    }
  }

  public previousItem() {
    const element = document.getElementById(this.id);

    if (element && element.scrollLeft != 0) {
      element.scrollBy({ left: -this.itemWidth, top: 0, behavior: "smooth" });
    }
  }
}
