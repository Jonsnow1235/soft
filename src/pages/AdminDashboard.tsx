import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  items: Array<{
    name: string;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
    price: number;
  }>;
  totalCost: number;
  processed: boolean;
  createdAt: Date;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = React.useState<Order[]>([]);

  const toggleProcessed = (orderId: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId
          ? { ...order, processed: !order.processed }
          : order
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
        <button
          onClick={() => navigate('/admin/login')}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Logout
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet</p>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm p-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{order.fullName}</h3>
                  <p className="text-sm text-gray-500">{order.phoneNumber}</p>
                  <p className="text-sm text-gray-500">{order.address}</p>
                </div>
                <button
                  onClick={() => toggleProcessed(order.id)}
                  className={`px-3 py-1 rounded ${
                    order.processed
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {order.processed ? 'Processed' : 'Mark as Processed'}
                </button>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Order Items:</h4>
                <ul className="space-y-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span>
                        {item.quantity}x {item.name} ({item.selectedSize},{' '}
                        <span
                          className="inline-block w-3 h-3 rounded-full align-middle"
                          style={{ backgroundColor: item.selectedColor }}
                        />
                        )
                      </span>
                      <span>{(item.price * item.quantity).toFixed(2)} TND</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between font-medium">
                  <span>Total:</span>
                  <span>{order.totalCost.toFixed(2)} TND</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}