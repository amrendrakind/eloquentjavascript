const http = require('https');
const fs = require('fs');

const url = 'https://www1.nseindia.com/content/historical/EQUITIES/2021/JUL/cm01JUL2021bhav.csv.zip'; // link to file you want to download
const file = fs.createWriteStream("D:/SOAL/Download_Via_NodeJS/cm01JUL2021bhav.csv.zip"); //Saving to specific folder
const request = http.get("https://www1.nseindia.com/content/historical/EQUITIES/2021/JUL/cm01JUL2021bhav.csv.zip", function(response) {  
response.pipe(file);
});