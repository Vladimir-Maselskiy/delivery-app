const API = 'https://sswu-shop-final-back-deploy.onrender.com/api';
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API}/products`).then(res => res.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};
