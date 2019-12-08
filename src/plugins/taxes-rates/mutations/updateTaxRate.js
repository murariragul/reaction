/**
 * @name Mutation.editTaxRate
 * @method
 * @memberof GraphQL/tax-rates
 * @summary Update a tax rate
 * @param {Object} context -  an object containing the per-request state
 * @param {Object} input - mutation input
 * @returns {Promise<Object>} UpdateTaxRatePayload
 */
export default async function updateTaxRate(context, input) {
  // Check for owner or admin permissions from the user before allowing the mutation
  const { shopId, _id, country, region, postal, taxCode, rate } = input;
  const { appEvents, checkPermissions, collections } = context;
  const { Taxes } = collections;

  await checkPermissions(["admin", "owner"], shopId);

  await Taxes.updateOne({
    _id,
    shopId
  }, {
    $set: {
      country,
      region,
      postal,
      taxCode,
      rate
    }
  });

  const taxRate = await Taxes.findOne({ _id });

  await appEvents.emit("afterTaxRateUpdate", taxRate);

  return taxRate;
}
