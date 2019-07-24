import { TesseractWorker } from 'tesseract.js';
const worker = new TesseractWorker();
let myImage = './original.jpeg';

worker.recognize(myImage, 'eng').progress(progress => {
        console.log('progress', progress);
    }).then(result => {
        console.log('result', result.text);
        worker.terminate();
    });
