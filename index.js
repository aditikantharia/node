// import { appendFile } from 'node:fs';

// appendFile('message.txt', 'data to append', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });
const { error, profileEnd } = require("node:console");
const fs = require("node:fs");
//create a file
//fs.appendfile(path, data, callback fnc)
fs.appendFile("hello.txt", "hello world !", (e) => {
  if (e) throw error;
  console.log("new file created");
});
fs.appendFile("index.html", "<h1>Hello World!</h1>", (e) => {
  if (e) throw error;
  console.log("crete index.html file");
});
//crete a folder
//fs.mkdir(path,callback fnc)
// fs.mkdir("images",(e)=>{
//     if (e) throw error;
//     console.log("create a image folder");
// });

fs.mkdir("css/style.css", { recursive: true }, (e) => {
  if (e) throw error;
  console.log("create files into css folder");
});

//rename files
//fs.rename ('filename old', 'filename new', callback fnc)
fs.rename("hello.txt", "world.txt", (e) => {
  if (e) throw error;
  console.log("rename files name to world.txt");
});

//remove folder
//fs.rmdir(path, callback fnc)
// fs.rmdir("images",(e) =>{
//     if (e) throw error;
//     console.log("remove images folder");
// })

//remove files
//fs.rm(path, callback fnc)
fs.rm("css/style.css", { recursive: true }, (e) => {
  if (e) throw error;
  console.log("remove style.css file");
});

//read file
//fs.readFile(path, callback fnc)
// fs.readFile("word.txt", "utf-8", (e, data) => {
//   if (e) throw error;
//   console.log(data);
//   console.log("read the file- word.txt");
// });

//read folder ==> give folders name array
//fs.readdir(path, callback fnc)
fs.readdir("css", (e, files) => {
  if (e) throw error;
  console.log(files);
  console.log("read the css folder");
});


// copy file
// fs.copyFile(src(filename), dest(destination), callback fnc)
fs.copyFile("index.html", "copy.html", (e) => {   
    if (e) throw error;
    console.log("file copied successfully from index.html to copy.html");
});