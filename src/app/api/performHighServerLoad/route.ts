import executeStress from './stress';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const duration = Number(searchParams.get('duration'))
  console.log(request.url, duration)
  const x = await executeStress(duration);
  return Response.json({ x })
}
