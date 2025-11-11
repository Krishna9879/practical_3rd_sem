export default function MenuPage() {
  const menuItems = [
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Pasta', price: 10.99 },
    { id: 4, name: 'Salad', price: 6.99 },
    { id: 5, name: 'Fries', price: 3.99 }
  ];

  return (
    <div>
      <h1>Menu</h1>
      <p>Choose from our delicious items:</p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={`/menu/${item.id}`}>
              {item.name} - ${item.price}
            </a>
          </li>
        ))}
      </ul>
      <br />
      <a href="/flow">Back to Flow</a>
    </div>
  );
}
