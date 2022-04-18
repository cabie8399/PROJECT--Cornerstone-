
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
const url = 'data/1.dcm';
const imageId = `wadouri:${url}`;
const image = await cornerstone.loadAndCacheImage(imageId);

const el = document.querySelector('.cornerstone-element');
cornerstone.enable(el);
cornerstone.displayImage(el, image);
