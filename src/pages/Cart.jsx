export default function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <p>Type: {item.type} | Weight: {item.weight}</p>
              <p>Qty: {item.quantity}</p>
              <p>Subtotal: ₹{item.quantity * item.price}</p>
              <button onClick={() => removeFromCart(index)}>❌ Remove</button>
              <hr />
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart} style={{ backgroundColor: 'red', color: 'white' }}>
            🧹 Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
