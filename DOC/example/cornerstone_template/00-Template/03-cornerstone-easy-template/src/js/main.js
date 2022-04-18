cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
const url = 'data/2.dcm';
const imageId = `wadouri:${url}`;
const image = await cornerstone.loadAndCacheImage(imageId);

const el = document.querySelector('.cornerstone-element');
cornerstone.enable(el);
cornerstone.displayImage(el, image);
console.log('cornerstoneTools ===> ',cornerstoneTools);


class Tool {
    constructor() {

    }

    static addTool() {
        const toolOption = {
            showSVGCursors: true,
        };
        cornerstoneTools.init(toolOption);

        const cornerstoneOption = {
            renderer: 'webgl',
            desynchronized: true,
            preserveDrawingBuffer: true,
        };
        cornerstone.enable(el, cornerstoneOption);
        // cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
        cornerstoneWADOImageLoader.webWorkerManager.initialize({
            // fix: Cannot read properties of undefined (reading 'decodeTask')
            taskConfiguration: {
                decodeTask: {

                },
            },

            // fix: DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope'
            // when load JPEG-Lossless DICOM
            webWorkerTaskPaths: [
                'https://cdn.jsdelivr.net/npm/cornerstone-wado-image-loader/dist/610.bundle.min.worker.js',
            ],
        });

        cornerstoneTools.addTool(cornerstoneTools.StackScrollMouseWheelTool, {
            configuration: {
                allowSkipping: false,
            },
        });

        cornerstoneTools.addTool(cornerstoneTools.LengthTool);
    };

    static bindToolBtn() {
        const lengthBtn = document.querySelector('.tool.length');
        const resetBtn = document.querySelector('.tool.reset');

        lengthBtn.addEventListener('click', () => {
            cornerstoneTools.setToolActive('Length', { mouseButtonMask: 1 });
        })
        resetBtn.addEventListener('click', () => {
            cornerstoneTools.globalImageIdSpecificToolStateManager.clear(el);
            cornerstone.reset(el);
        })
    };

    static init() {
        this.addTool();
        this.bindToolBtn();
    };
}



// 初始化
function init() {
    Tool.init();
} 
init();
