import { importPluginsJSONFile, ReactionAPICore } from "@reactioncommerce/api-core";
import Logger from "@reactioncommerce/logger";
import packageJson from "../package.json";
// import work from "../imports/plugins/custom/register.js";
// import featuredproducts from "./no-meteor/register.js";
// import reg from "../imports/plugins/custom/featuredProductsByShop/register.js";
const api = new ReactionAPICore({
  serveStaticPaths: ["public"],
  version: packageJson.version
});

/**
 * @summary Registers Reaction API plugins and then starts the app
 * @return {Promise<undefined>} undefined
 * 
 * 
 */
async function runApp() {
  const plugins = await importPluginsJSONFile("../plugins.json");
  // const myplugin = register
  // work()
  await api.registerPlugins(plugins);
  // await api.registerPlugin(reg);

  await api.start();
}

runApp().catch((error) => {
  Logger.error(error);
  process.exit(1); // eslint-disable-line no-process-exit
});

