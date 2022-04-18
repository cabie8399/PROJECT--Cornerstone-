// src/js/main.js
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
var el = document.querySelector(".cornerstone-element");
cornerstone.enable(el);
var Dicom = class {
  constructor() {
  }
  static async displayDicom() {
    const urlList = [
      "/dicom/study1/1/1.dcm",
      "/dicom/study1/1/2.dcm",
      "/dicom/study1/1/3.dcm",
      "/dicom/study1/1/2.dcm"
    ];
    const imageIds = urlList.map((url) => `wadouri:${url}`);
    cornerstoneTools.addStackStateManager(el, ["stack", "preload"]);
    cornerstoneTools.addToolState(el, "stack", {
      currentImageIdIndex: 0,
      imageIds
    });
    const defaultImage = await cornerstone.loadAndCacheImage(imageIds[0]);
    cornerstone.displayImage(el, defaultImage);
    cornerstone.resize(el);
    this.dicomInfo();
  }
  static dicomInfo() {
    el.addEventListener("cornerstoneimagerendered", () => {
      const {
        currentImageIdIndex,
        imageIds
      } = cornerstoneTools.getToolState(el, "stack").data[0];
      const imageNumber = currentImageIdIndex + 1;
      const imageCount = imageIds.length;
      const currentValueSpan = document.querySelector(".sliceText");
      currentValueSpan.textContent = "Image : " + imageNumber + "/" + imageCount;
    });
  }
};
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
    cornerstoneTools.addTool(cornerstoneTools.StackScrollMouseWheelTool, {});
    cornerstoneTools.setToolActive("StackScrollMouseWheel", {});
    cornerstoneTools.addTool(cornerstoneTools.WwwcTool);
    cornerstoneTools.addTool(cornerstoneTools.LengthTool);
  }
  static bindToolBtn() {
    const lengthBtn = document.querySelector(".tool.length");
    const resetBtn = document.querySelector(".tool.reset");
    const wwwcBtn = document.querySelector(".tool.wwwc");
    lengthBtn.addEventListener("click", () => {
      cornerstoneTools.setToolActive("Length", { mouseButtonMask: 1 });
    });
    wwwcBtn.addEventListener("click", () => {
      cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
    });
    resetBtn.addEventListener("click", () => {
      cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 1 });
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
  Dicom.displayDicom();
}
init();
