// import Reaction from "/imports/plugins/core/core/server/Reaction";
// import register from "./server/no-meteor/register";

// Reaction.whenAppInstanceReady(register);

import Reaction from "/imports/plugins/core/server/Reaction.js";
import register from "./register.js";
// import Logger from "./resolvers/Query/node_modules/@reactioncommerce/logger";

// logger.info('fkjdsalfklsdhfkjsdhfhdskjfhksdjfkjas');
Reaction.whenAppInstanceReady(register);


// function work() {
//     Reaction.registerPackage(register);
// }