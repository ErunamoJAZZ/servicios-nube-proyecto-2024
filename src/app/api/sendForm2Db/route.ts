import { NextRequest, NextResponse } from 'next/server'

const response400 = () =>
  NextResponse.json({
    code: '400',
  });

export const POST = async (request: NextRequest) => {
  try {
    // console.log(await request.text())
    const formDataTxt = await request.text()
    console.log(formDataTxt)
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.AWS_DB_LAMBDA_APIKEY || '',
    };
    // console.log(headers)

    const res = await fetch(process.env.AWS_DB_LAMBDA_URL || '', {
      method: 'POST',
      body: formDataTxt,
      headers,
    });

    // console.log(res)
    return res;

  } catch (err) {
    return response400()
  }
}
