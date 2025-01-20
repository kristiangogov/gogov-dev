import axios from "axios";
import "dotenv/config";

export async function handler(event, context) {
  const accessToken = process.env.ACCESS_TOKEN;
  const contentfulSpace = process.env.CONTENTFUL_SPACE;
  const { postId } = event.queryStringParameters || {};
  if (!postId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing postId" }),
    };
  }
  const url = `https://cdn.contentful.com/spaces/${contentfulSpace}/entries/${postId}?access_token=${accessToken}`;
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
