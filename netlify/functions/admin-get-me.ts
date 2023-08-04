import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { HASURA_CLAIMS, HASURA_USER_ID, getTokeData } from "../common/jwt";
import { api } from "../common/api";
import { getAdminFromHeaders } from "../common/getAdminFromHeaders";
import { GetAdminByIdQuery } from "../common/sdk";

const handler: Handler = async (event, context) => {
  let admin: GetAdminByIdQuery;
  const { headers } = event;
  try {
    admin = await getAdminFromHeaders(headers);
  } catch (e) {
    return JSON.parse(e.message);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: admin.admin_by_pk?.id,
      username: admin.admin_by_pk?.username,
    }),
  };
};

export { handler };
