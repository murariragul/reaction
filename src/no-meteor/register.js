import queries from "./queries/index.js";
import resolvers from "./resolvers/Query/index.js";
import schemas from "./schemas/index.js";

export default async function featuredproducts(app) {
    await app.registerPlugin({
        label: "Featured Products",
        name: "featured-products",
        graphQl: {
            resolvers,
            schemas
        },
        queries
    });
}