module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env"
      // {
      //   useBuiltIns: "usage",
      //   corejs: {
      //     version: 2
      //   }
      // }
    ],
    "@babel/preset-react"
  ];

  const plugins = [];

  return {
    presets,
    plugins
  };
};
