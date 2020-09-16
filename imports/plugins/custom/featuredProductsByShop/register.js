import queries from "./queries/index.js";
import resolvers from "./resolvers/index.js";
import schemas from "./schemas/index.js";

export default async function featuredProducts(app) {
    await app.registerPlugin({
        label: "Featured Products",
        name: "featured-products",
        version: 0.1,
        graphQL: {
            resolvers,
            schemas
        },
        queries
    });
}