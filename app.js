const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  function serverErrorLog(){ //서버 오류 로그를 확인하기 위한 func 생성

    res.writeHead(500);
    return res.end("서버의서 문제가 발생하였습니다.");
  }
  //url은 get 방식의 대표적인 방식(get : data + url)
  console.log("요청 확인 : " +  req.url + " / req의 메소드 확인 : ", req.method);
  //1. 요청 url
  //2. 요청 메서드

  if(req.url === "/" && req.method === "GET"){
    fs.readFile("./index.html", "utf8", (err, data) =>{
      if(err){
        serverErrorLog();
      }

    })

  }

});