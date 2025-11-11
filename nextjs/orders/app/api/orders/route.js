import { NextResponse } from 'next/server';

let orders = [
  { id: 1, items: ['Pizza', 'Fries'], total: 16.98, status: 'pending' },
  { id: 2, items: ['Burger'], total: 8.99, status: 'completed' }
];

export async function GET() {
  return NextResponse.json({ orders });
}

export async function POST(request) {
  const body = await request.json();
  
  const newOrder = {
    id: orders.length + 1,
    items: body.items || [],
    total: body.total || 0,
    status: body.status || 'pending'
  };
  
  orders.push(newOrder);
  
  return NextResponse.json({ order: newOrder, message: 'Order created successfully' }, { status: 201 });
}
