// src/js/main.js
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
var url = "data/1.dcm";
var imageId = `wadouri:${url}`;
var image = await cornerstone.loadAndCacheImage(imageId);
var el = document.querySelector(".cornerstone-element");
cornerstone.enable(el);
cornerstone.displayImage(el, image);
