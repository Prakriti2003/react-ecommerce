export function fetchAllProducts() {
  // TODO : we will not hard code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter({ filter, sort, pagination }) {
  // filter = {category:[smatphone, laptops]}
  // sort = {_sort : '-ratings'}
  //pagination = {_page:1, _limit: 10}
  //TODO : on server we will support multi values
  console.log(filter);
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  console.log(pagination);
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  console.log(queryString);

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
      // "https://dummyjson.com/products?skip=20&_limit=10&"
    );
    const data = await response.json();
    resolve({ data });
    //console.log({ data });
  });
}

export function fetchAllCategories() {
  // TODO : we will not hard code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllBrands() {
  // TODO : we will not hard code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}
