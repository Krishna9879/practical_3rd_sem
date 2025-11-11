import { NextResponse } from 'next/server';

let orders = [
  { id: 1, items: ['Pizza', 'Fries'], total: 16.98, status: 'pending' },
  { id: 2, items: ['Burger'], total: 8.99, status: 'completed' }
];

export async function GET(request, { params }) {
  const { orderId } = await params;
  const order = orders.find(o => o.id === parseInt(orderId));
  
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }
  
  return NextResponse.json({ order });
}

export async function PATCH(request, { params }) {
  const { orderId } = await params;
  const body = await request.json();
  
  const orderIndex = orders.findIndex(o => o.id === parseInt(orderId));
  
  if (orderIndex === -1) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }
  
  orders[orderIndex] = {
    ...orders[orderIndex],
    ...body,
    id: orders[orderIndex].id
  };
  
  return NextResponse.json({ order: orders[orderIndex], message: 'Order updated successfully' });
}
