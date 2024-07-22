import { NextResponse } from 'next/server';
import { toast } from 'react-toastify';

export async function POST(req) {
  const { fullName, age, phone, city, mail } = await req.json();

  const response = await fetch('https://script.google.com/macros/s/AKfycbxr-1Vrj5cRJSLAEY9m1kWQfg37xqDJk4Qz3Y8aMMKnuu0msDD9THoh2QPa5nEEEB3IPw/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, age, phone, city, mail }),
  });

  const result = await response.json();
  
  if (result.status === 'success') {
    return NextResponse.json({ status: 'success' });
    // toast.success('Ваша заявка принята!')
  } else {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
