module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11', // 必要に応じてESバージョンを変更してください
        },
        exclude: ['@babel/plugin-transform-function-name'],
      },
    ],
  ];

  if (process.env.MINIFY === 'true') {
    presets.push([
      'minify',
      {
        mangle: true,
        keepFnName: true,
      },
    ]);
  }

  return {
    presets,
  };
};
