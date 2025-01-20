import axios from "axios";
import "dotenv/config";

export async function handler(event, context) {
  const accessToken = process.env.ACCESS_TOKEN;
  const contentfulSpace = process.env.CONTENTFUL_SPACE;
  const url = `https://cdn.contentful.com/spaces/${contentfulSpace}/entries?access_token=${accessToken}`;
  console.log(url);
  try {
    const res = await axios.get(url);
    const data = res.data;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
}
