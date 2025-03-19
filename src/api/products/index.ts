import backend from "../api";

const get_products = async () => {
  const response = await backend.get("products", {}).json();
  return response;
};

const create_product = async () => {
  const response = await backend.post("products").json();
  return response;
};

const update_product = async () => {
  const response = await backend.patch("products").json();
  return response;
};

const delete_product = async () => {
  const response = await backend.delete("products").json();
  return response;
};

const products = {
  get: get_products,
  create: create_product,
  update: update_product,
  delete: delete_product
}

export default products;