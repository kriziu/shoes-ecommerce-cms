"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use({
      resolversConfig: {
        "Mutation.createReview": {
          middlewares: [
            async (resolve, root, args, ctx, info) => {
              const userId = ctx.state.user.id;
              const productId = args.data.product;
              args.data.user = userId;

              const reviews = await strapi.service("api::review.review").find({
                filters: { user: { id: userId }, product: { id: productId } },
              });

              const reviewed = reviews.results.length > 0;

              if (reviewed) {
                throw new Error("You have already reviewed this product");
              }

              return await resolve(root, args, ctx, info);
            },
          ],
        },
      },
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
