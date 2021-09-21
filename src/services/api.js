export async function getCategories() {
  const categorieURL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(categorieURL);
  const categories = await result.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpointCategorieAndQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const endpointResult = await fetch(endpointCategorieAndQuery);
  const endpointData = await endpointResult.json();
  return endpointData;
}

export async function getProductsFromCategory(categoryId) {
  const endpointCategorie = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const endpointResult = await fetch(endpointCategorie);
  const endpointData = await endpointResult.json();
  return endpointData;
}
