const products = [
    {name: "Laptop", category: "Electronics", price: 1200, quantity: 10, available: true},
    {name: "Chair", category: "Furniture", price: 100, quantity: 20, available: true},
    {name: "Shirt", category: "Clothing", price: 30, quantity: 50, available: false},
    {name: "Book", category: "Books", price: 20, quantity: 100, available: true},
];

const filteredProducts = products.filter(product => product.available);
console.log("Filtered Products:", filteredProducts);

const sortedProductsByPrice = [...products].sort((a,b) => a.price - b.price);
console.log("Sorted Products by Price:", sortedProductsByPrice);

const productWithTotalValue = products.map(product => ({
    ...product,
    totalValue: product.price * product.quantity
}));
console.log("Products with total Value:", productWithTotalValue);


const totalProducts = products.length;
const totalValue = productWithTotalValue.reduce((sum, product) => sum + product.totalValue, 0);
const avgPrice = totalValue / totalProducts;
const categoryDistribution = products.reduce((acc, product) => {
    acc[products.category] = (acc[product.category] || 0) + 1; return acc;
}, {});
const inventoryReport = {
    totalProducts, totalValue,avgPrice,categoryDistribution
};
console.log("Inventory Report:", inventoryReport);

