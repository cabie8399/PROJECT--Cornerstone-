// src/js/main.js
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
var url = "data/2.dcm";
var imageId = `wadouri:${url}`;
var image = await cornerstone.loadAndCacheImage(imageId);
var el = document.querySelector(".cornerstone-element");
cornerstone.enable(el);
cornerstone.displayImage(el, image);
console.log("cornerstoneTools ===> ", cornerstoneTools);
var Tool = class {
  constructor() {
  }
  static addTool() {
    const toolOption = {
      showSVGCursors: true
    };
    cornerstoneTools.init(toolOption);
    const cornerstoneOption = {
      renderer: "webgl",
      desynchronized: true,
      preserveDrawingBuffer: true
    };
    cornerstone.enable(el, cornerstoneOption);
    cornerstoneWADOImageLoader.webWorkerManager.initialize({
      taskConfiguration: {
        decodeTask: {}
      },
      webWorkerTaskPaths: [
        "https://cdn.jsdelivr.net/npm/cornerstone-wado-image-loader/dist/610.bundle.min.worker.js"
      ]
    });
    cornerstoneTools.addTool(cornerstoneTools.StackScrollMouseWheelTool, {
      configuration: {
        allowSkipping: false
      }
    });
    cornerstoneTools.addTool(cornerstoneTools.LengthTool);
  }
  static bindToolBtn() {
    const lengthBtn = document.querySelector(".tool.length");
    const resetBtn = document.querySelector(".tool.reset");
    lengthBtn.addEventListener("click", () => {
      cornerstoneTools.setToolActive("Length", { mouseButtonMask: 1 });
    });
    resetBtn.addEventListener("click", () => {
      cornerstoneTools.globalImageIdSpecificToolStateManager.clear(el);
      cornerstone.reset(el);
    });
  }
  static init() {
    this.addTool();
    this.bindToolBtn();
  }
};
function init() {
  Tool.init();
}
init();
