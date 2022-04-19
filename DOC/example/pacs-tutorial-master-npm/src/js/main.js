import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import cornerstoneMath from 'cornerstone-math';
import Hammer from 'hammerjs';
import dicomParser from 'dicom-parser';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';


cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
//'dicomweb' 'wadouri'  'http'
var imageId = "wadouri:dicom/testdcm/ImageFileName0080.dcm";
var imageIds = ["wadouri:dicom/testdcm/ImageFileName0080.dcm",
    "wadouri:dicom/testdcm/ImageFileName0081.dcm",
    "wadouri:dicom/testdcm/ImageFileName0082.dcm",
    "wadouri:dicom/testdcm/ImageFileName0083.dcm",
    "wadouri:dicom/testdcm/ImageFileName0084.dcm",
    "wadouri:dicom/testdcm/ImageFileName0085.dcm",
    "wadouri:dicom/testdcm/ImageFileName0086.dcm",
    "wadouri:dicom/testdcm/ImageFileName0087.dcm",
    "wadouri:dicom/testdcm/ImageFileName0088.dcm",
    "wadouri:dicom/testdcm/ImageFileName0089.dcm",
    "wadouri:dicom/testdcm/ImageFileName0090.dcm",
]
//设置stack
const stack = {
    currentImageIdIndex: 0,
    imageIds
}
//定义stack滚动工具
const StackScrollMouseWheelTool = cornerstoneTools.StackScrollMouseWheelTool
//初始化tools
cornerstoneTools.init();
var element = document.getElementById('dicomImage');
cornerstone.enable(element);

//角度
const AngleTool = cornerstoneTools.AngleTool;
cornerstoneTools.addTool(AngleTool);
cornerstoneTools.setToolActive('Angle',{mouseButtonMask: 1})

//wwwc
const WwwcTool = cornerstoneTools.WwwcTool;
cornerstoneTools.addTool(WwwcTool);
// cornerstoneTools.setToolActive('Wwwc',{mouseButtonMask: 1})

cornerstone.loadAndCacheImage(imageIds[0]).then(function(image) {
    cornerstone.displayImage(element, image)
    cornerstoneTools.addStackStateManager(element, ['stack'])
    cornerstoneTools.addToolState(element, 'stack', stack)
})
cornerstoneTools.addTool(StackScrollMouseWheelTool)
cornerstoneTools.setToolActive('StackScrollMouseWheel', { })
function disableAllTools(){
    cornerstoneTools.setToolDisabled('Wwwc');
    cornerstoneTools.setToolDisabled('Angle');
}

document.getElementById('wwwc').addEventListener('click',function(){
    //使得绑定左键的其他工具失效
    disableAllTools();
    //激活wwwc左键
    cornerstoneTools.setToolActive('Wwwc',{mouseButtonMask:1})
})