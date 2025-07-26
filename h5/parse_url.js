const url =require('url');

const sampleUrl ='https://chatgpt.com/?openaicom_referred=true'
const parsedUrl=new URL(sampleUrl);

console.log("protocol :",parsedUrl.protocol);
console.log("Hostname :",parsedUrl.hostname);
console.log("port :",parsedUrl.port);
console.log("pathname :",parsedUrl.pathname);
console.log("search :",parsedUrl.search);
