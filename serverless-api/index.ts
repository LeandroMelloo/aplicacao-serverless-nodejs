import { APIGatewayEvent } from "aws-lambda";

export const list = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "List",
        queryString: event.queryStringParameters,
      },
      null,
      2
    ),
  };
};

export const get = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Get",
      },
      null,
      2
    ),
  };
};

export const http = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(
      {
        message: "Get",
      },
      null,
      2
    ),
  };
};

export const post = async (event: APIGatewayEvent) => {
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "Post",
        body: event.body,
      },
      null,
      2
    ),
  };
};