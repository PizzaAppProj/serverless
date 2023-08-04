import { getSdk } from "../common/sdk";
import { GraphQLClient } from "graphql-request";
import { config } from "../core/config";

export const api = getSdk(new GraphQLClient(config.hasuraEndpoint));
