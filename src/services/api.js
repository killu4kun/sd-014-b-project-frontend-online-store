export async function getCategories() {
  const categoryURL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(categoryURL);
  const categories = await result.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpointCategoryAndQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const endpointResult = await fetch(endpointCategoryAndQuery);
  const endpointData = await endpointResult.json();
  return endpointData;
}

export async function getProductsFromCategory(categoryId) {
  const endpointCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const endpointResult = await fetch(endpointCategory);
  const endpointData = await endpointResult.json();
  return endpointData;
}
