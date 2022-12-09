import { IDestination } from "../types/interface";

export const fetchDestinations = async (skip = 0, count = 5, keyword = ''): Promise<IDestination[]> => {
  return new Promise<IDestination[]>((resolve) => {
    setTimeout(() => {
      var data = require('../data/destinations.json');
      const filtered = keyword ? data.filter((e: IDestination) => e.name.toLowerCase().includes(keyword.toLocaleLowerCase())) : data;
      const result = filtered.slice(skip, skip + count);
      resolve(result);
    }, 1000);
  });
}