import getPaginatedResponse from "@reactioncommerce/api-utils/graphql/getPaginatedResponse.js";
import { decodeShopOpaqueId } from "../../id.js";
// import Logger from "@reactioncommerce/logger";

export default async function featuredProductsByShop(_, args, context) {
    // Logger.info('ins');
    const { shopId: opaqueShopId, ...connectionArgs } = args;
    const shopId = decodeShopOpaqueId(opaqueShopId);
    // Logger.info(shopId);
    const results = await context.queries.featuredProductsByShop(context, { shopId });
    return getPaginatedResponse(results, connectionArgs);
}