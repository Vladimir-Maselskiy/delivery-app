const API = process.env.NEXT_PUBLIC_API_HOST;
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API}/products`).then(res => res.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};
