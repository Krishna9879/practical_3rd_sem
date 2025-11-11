export default async function ItemDetailPage({ params }) {
  const { itemId } = await params;
  
  const menuItems = {
    1: { id: 1, name: 'Pizza', price: 12.99, description: 'Delicious cheese pizza with fresh tomatoes' },
    2: { id: 2, name: 'Burger', price: 8.99, description: 'Juicy beef burger with lettuce and tomato' },
    3: { id: 3, name: 'Pasta', price: 10.99, description: 'Creamy alfredo pasta with garlic bread' },
    4: { id: 4, name: 'Salad', price: 6.99, description: 'Fresh garden salad with vinaigrette' },
    5: { id: 5, name: 'Fries', price: 3.99, description: 'Crispy golden french fries' }
  };

  const item = menuItems[itemId];

  if (!item) {
    return (
      <div>
        <h1>Item Not Found</h1>
        <p>Item with ID {itemId} does not exist</p>
        <a href="/menu">Back to Menu</a>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Item ID:</strong> {item.id}</p>
      <br />
      <a href="/menu">Back to Menu</a>
    </div>
  );
}
