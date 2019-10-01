const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
          style: true,
}),
    addLessLoader({
     javascriptEnabled: true,
      modifyVars: { '@primary-color': 'rgba(42,134,255,0.68)' },
}),
);

