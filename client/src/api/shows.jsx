const Base = "https://fakestoreapi.com";

export const Limitdata = async () => {
  const res = await fetch(`${Base}/products?limit=10`);
  const result = await res.json();
  return result;
};
