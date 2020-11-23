module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "~@/styles/_variables.scss";
            @import "~@/styles/_defines.scss";
            @import "~@/styles/_theme.scss";
            @import "~@/styles/_grid.scss";
        `,
      },
    },
  },
};
