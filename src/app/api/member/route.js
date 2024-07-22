import { NextResponse } from 'next/server';

export async function POST(req) {
  const { fullName, companyName, phone, city, mail } = await req.json();

  const response = await fetch('https://script.google.com/macros/s/AKfycbzd_lW5GJ4u1sjJUAFmgZaTe-Y8jquXB38KXF6VpWB2Tmt4TjZa3YLJo8YTbC1nPJXx/exec', {
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