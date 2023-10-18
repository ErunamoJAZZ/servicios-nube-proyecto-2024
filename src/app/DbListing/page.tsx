
import getDatabaseData from './db';
import JsonTablePage from './jsonTable'

export async function getData() {
  const data = await getDatabaseData();

  return data;
}

export default async function Page() {
  const data = await getData();

  return <>
    <JsonTablePage jsonData={data} />
  </>
}
