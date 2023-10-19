import { Pool } from 'pg';

let mainPool: Pool;

const getPool = () => {
  if (!mainPool) {
    mainPool = new Pool({
      connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:9876/${process.env.DB_DATABASE}`,
      application_name: 'ServiciosEnLaNube',
      ssl: {
        rejectUnauthorized: false
      },
    });
  }

  return mainPool;
}


const getDatabaseData = async () => {
  try {
    const pool = await getPool();
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM public.estudiante ORDER BY id DESC');
    client.release();

    return result.rows;
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    return [];
  }
};

export default getDatabaseData;
