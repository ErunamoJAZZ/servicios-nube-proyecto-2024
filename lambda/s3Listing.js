// This require Lambda Node 16
// env required: AWS_S3_BUCKET

const { S3 } = require('aws-sdk');

exports.handler = async (event) => {
  const s3 = new S3();

  const params = {
    Bucket: process.env.AWS_S3_BUCKET || '',
  };

  try {
    const data = await s3.listObjectsV2(params).promise();

    // Extrae las URL de las imágenes
    const images = data?.Contents?.map((obj) => {
      return s3.getSignedUrl('getObject', {
        Bucket: process.env.AWS_S3_BUCKET || '',
        Key: obj.Key,
        Expires: 60,
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ images })
    };
  } catch (error) {
    console.error('Error al consultar el Bucket de S3:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al consultar el Bucket de S3' })
    };
  }
}