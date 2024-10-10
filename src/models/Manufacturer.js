import { v4 as uuidv4 } from "uuid";

export class Manufacturer {
    constructor(name, yearEstablished, country, description, logoUrl) {
      this.id = uuidv4();
      this.name = name;
      this.yearEstablished = yearEstablished;
      this.country = country;
      this.description = description;
      this.logoUrl = logoUrl;
    }
  }
  