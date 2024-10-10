import { v4 as uuidv4 } from "uuid";

export class Product {
    constructor(
      name,
      price,
      alcoholPercentage = null,
      cocoaPercentage = null,
      milkPercentage = null,
      color,
      type,
      manufacturerId
    ) {
      this.id = uuidv4();
      this.name = name;
      this.price = price;
      this.alcoholPercentage = alcoholPercentage;
      this.cocoaPercentage = cocoaPercentage;
      this.milkPercentage = milkPercentage;
      this.color = color;
      this.type = type;
      this.manufacturerId = manufacturerId;
    }
  }
  