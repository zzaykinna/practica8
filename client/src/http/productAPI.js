import {$host, $authHost} from "./index";

export const createCategory= async (category) =>{
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategory = async () =>{
    const {data} = await $host.get('api/category')
    return data
}

export const createProduct= async (product) =>{
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProduct = async (categoryId, page, limit=5) =>{
    const {data} = await $host.get('api/product', {params:{
         categoryId,
         page,
         limit
    }})
    return data
}

// Функция для добавления товара в корзину
export const addToCart = async (productData) => {
    const { data } = await $authHost.post("api/basket/add-to-cart", productData);
    return data;
  };
  
  export const fetchUserBasket = async (id) => {
    const { data } = await $host.get("api/basket/" + id);
    return data;
  };
  
  
  export const fetchBaskets = async () => {
    const { data } = await $authHost.get("api/basket");
    return data;
  };
  
  export const updateStatus = async (status, userId) => {
    const { data } = await $authHost.post("api/basket/status", {
      status: status,
      userId: userId
    });
    return data;
  };
  
  export const findBasketByStatus = async (status) => {
    const { data } = await $authHost.post("api/basket/user-order", {
     status: status,
    });
    return data; 
  };
  