export const getProducts = () => fetch("https://fakestoreapi.com/products").then(res => res.json());

//Same as promise where we get data using xmlhttprequest then check the request response and error
//fetch helps us make it simple just add the link and then get the response from the type of data the we are fetching.