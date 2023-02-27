const apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms='

async function searchProduct (productName) {
  try {
    const response = await fetch(apiUrl + encodeURIComponent(productName))
    const data = await response.json()
    const products = data.products
    console.log(`Found ${products.length} products for "${productName}":`)
    products.forEach((product) => {
      console.log('- ' + product.product_name)
      console.log('Ingredients:', product.ingredients_text)
      console.log('Nutrition facts:', product.nutriments)
    })
  } catch (error) {
    console.error(error)
  }
}

searchProduct('chocolate')
