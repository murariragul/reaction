import importAsString from "@reactioncommerce/api-utils/importAsString.js";
// import schema from "./schema.graphql"
// import { importAsString } from "@reactioncommerce/api-core";

const schema = importAsString("./schema.graphql");

export default [schema]