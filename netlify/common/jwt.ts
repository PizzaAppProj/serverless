import jwt from "jsonwebtoken";
import { config } from "../core/config";

export const HASURA_CLAIMS = "https://hasura.io/jwt/claims";
export const HASURA_USER_ID = "x-hasura-user-id";

export const signToken = (id: string) => {
  return jwt.sign(
    {
      [HASURA_CLAIMS]: {
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-default-role": "admin",
        "x-hasura-user-id": id,
      },
    },
    config.jwtSecret
  );
};

export const getTokeData = (token: string) => {
  return jwt.verify(token, config.jwtSecret);
};
