export async function handler(event, context) {
    const data = Math.floor(Math.random() * 101);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: data }),
    };
  }
  