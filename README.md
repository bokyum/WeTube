#  WeTube-Nodejs-

### 프로젝트 폴더에서 npm init 실행
<code> npm init </code>

#### package.json 생성됨

### 프로젝트 폴더에서 npm install express 실행
### package.json을 참고하여 express 만들어짐
### node_modules 만들어짐


<code> npm install express </code>

<code> npm install @babel/node </code>
<code> npm install @babel/preset-env </code>

------------------------
#babel 사용법

* 커맨드 라인 입력:
npm install @babel/node
* 커맨드 라인 입력:
npm install @babel/core
* 커맨드 라인 입력:
npm install @babel/preset-env
* 커맨드 라인 입력:
npm install core-js@3
* .babelrc 파일을 만들어주세요
* .babelrc 파일에 아래 내용을 입력 후 저장해주세요:
{
"presets": [
[
"@babel/preset-env",
{
"useBuiltIns": "entry",
"corejs":3
}
]
]
}
* "package.json 파일"에서 스크립트로 작성해둔 start 에서 "node"를 "babel-node"로 바꿔주세요.
예) "start": "babel-node index.js"
* index.js 파일에 써뒀던 "const express" 라인을 지우시고 아래와 같이 바꿔주세요:
import "core-js";
import express from "express";
* 아래의 명령어를 커맨드 라인에 입력 후 실행, 테스트 해주세요:
npm start


자세한 내용은 이곳을 참고하시면 돼요: https://babeljs.io/docs/en/babel-preset-env

-------------

### 프로젝트에 필요한게 아니라 개발자에게 필요한 모듈 설치시 -D 추가

<code> npm install nodemon -D </code>



### 미들웨어
#### 페이지 넘어가기 전 중간 단계로 사용 가능
#### ip check deny 등을 할 수 있음
#### 미들웨어로 morgan 사용 logging에 도움을 줌
<code> 
app.use(betweenhome); //위치 중요
app.get("/", handleHome);

두가지 방법으로 사용가능

app.get("/", betweenhome, handleHome);
</code>


### node 보안을 위한 helmet
<code>
npm install helmet
</code>

### cookie parser

### body parser



---------------------
### Model => data
### View => how does the data look
### Control => function that looks for the data


# Pages 

---------

    - [ ] Home
    - [x] Join
    - [x] Login
    - [x] Search
    - [ ] User Detail
    - [x] Edit Profile
    - [ ] Change Password
    - [ ] Upload
    - [ ] Video Detail
    - [ ] Edit Video


# mongodb

-----

 - brew services start mongodb-community
 - brew services list

 - mongodb 장점: documents 수를 줄여줌
 
 - user we-tube
 - show collections
 - db.videos.remove({})