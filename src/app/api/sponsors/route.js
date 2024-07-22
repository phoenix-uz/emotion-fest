import { NextResponse } from 'next/server';

export async function POST(req) {
  const { fullName, companyName, phone, city, mail } = await req.json();

  const response = await fetch('https://script.google.com/macros/s/AKfycbz-Ox_z_Y1rur8Er9OdQbnUXU4mWxRz321k3OVPIE-ldmh0j88I2x7BRrBiiN1GZ9BSSg/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, companyName, phone, city, mail }),
  });

  const result = await response.json();
  
  if (result.status === 'success') {
    return NextResponse.json({ status: 'success' });
    // toast.success('Ваша заявка принята!')
  } else {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}