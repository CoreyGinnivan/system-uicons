// svgo.config.js
module.exports = {
  multipass: true,
  datauri: "enc",
  js2svg: {
    pretty: true,
  },
  plugins: [
    "cleanupAttrs",
    "cleanupEnableBackground",
    "cleanupIDs",
    "cleanupListOfValues",
    "cleanupNumericValues",
    "collapseGroups",
    "convertColors",
    {
      name: "convertPathData",
      params: {
        noSpaceAfterFlags: false,
      },
    },
    { convertShapeToPath: false },
    "convertStyleToAttrs",
    "convertTransform",
    "inlineStyles",
    {
      name: "mergePaths",
      params: {
        noSpaceAfterFlags: false,
      },
    },
    "minifyStyles",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    {
      name: "removeAttrs",
      attrs: {
        "data-name": "",
        "clip-rule": "",
      },
    },
    "removeComments",
    "removeDesc",
    "removeDoctype",
    "removeEditorsNSData",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "removeEmptyText",
    "removeHiddenElems",
    "removeMetadata",
    "removeNonInheritableGroupAttrs",
    "removeTitle",
    {
      name: "removeUnknownsAndDefaults",
      params: {
        keepRoleAttr: true,
      },
    },
    "removeUnusedNS",
    "removeUselessDefs",
    "removeUselessStrokeAndFill",
    "removeXMLProcInst",
    "sortAttrs",
    { removeViewBox: false },
    { removeXMLNS: false },
  ],
};
