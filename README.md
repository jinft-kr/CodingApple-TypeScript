# CodingApple-TypeScript

# Part1 : 꼭 알아야할 내용
- Typescript 필수 문법 1-분 정리와 설치 셋팅(Vue, React 포함)
  - typescript : Javascript + Type 문법
  - 5 - '3' : 2 
    - Javascript는 dynamic typing 가능 
    - 원래는 숫자 - 숫자만 가능하지만, JS가 알아서 숫자로 바꿔줌
    - 프로젝트 크면 단점이 됨
    - TypeScript는 타임을 엄격히 검사해줌
  - TypeScript는 에러메세지 굴리티가 높다.
  - 코드 에디터 부가기능 역할로 봐도 됨
  - Typescript 설치
    - node.js 설치(최신버전)
    - VScode 에디터 준비
    - 터미널 오픈 : `npm install -g typescript `
    - 코드짤 폴더만들고 에디터로 폴더 오픈
    - 어쩌구.ts파일 생성 후 코드 작성
    - tsconfig.json 생성 후 내용 작성
  - ts파일은 js로 변환해야 브라우저에서 읽을 수 있음 
    - tsc -w
- Typescript 컴파일시 세부설정(tsconfig.json)
  - tsconfig 파일 생성하기 : 타입스크립트 ts 파일들을 .js 파일로 변환할 때 어떻게 변환할 것인지 세부설정이 가능
  - tsconfig.ts 파일 생성 후 아래 내용 붙여넣기
    - ```
      {
        "compilerOptions": {
          "target": "es5", // 타입스크립트파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분
          "module": "commonjs", // 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳
         }
      }
      ```
    - target : 타입스크립트파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분
      - es5로 셋팅해놓으면 es5 버전 자바스크립트로 컴파일(변환) , 신버전을 원하면 es2016, esnext 이런 것도 가능
    - module : 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳
      - commonjs - require 문법, es2015, esnext - import 문법을 사용
    - 어느정도 IE 호환성을 원하시면 es5, commonjs가 국룰
    - 근데 정말 신버전 자바스크립트만 표현가능한 그런 문법들이 있는데, (예를 들어 BigInt() 이런 함수와 bigint 타입) 그런 것들은 esnext 등으로 버전을 올려줘야 사용가능
  - 추가로 넣을 만한 것들
    - ```
      {
         "compilerOptions": {
            "target": "es5", // 타입스크립트파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분
            "module": "commonjs", // 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳
            "noImplicitAny": true, // any라는 타입이 의도치않게 발생할 경우 에러를 띄워주는 설정
            "strictNullChecks": true // null, undefined 타입에 이상한 조작하면 에러를 띄우는 설정
         }
      }
      ```
  - [tsconfig에 들어갈 기타 항목들](https://www.typescriptlang.org/tsconfig)
    - ```
      {
       "compilerOptions": {
  
        "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
        "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
        "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
        "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
        "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
        "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
        "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
        "outDir": "./", //js파일 아웃풋 경로바꾸기
        "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
        "removeComments": true, //컴파일시 주석제거 
  
        "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
        "noImplicitAny": true, //any타입 금지 여부
        "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
        "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
        "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
        "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
        "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기
  
        "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
        "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
        "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
        "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
       }
      }
      ```
- 타입스크립트 기본 타입 정리(primitive type)
  - JS 문법 그대로 TS에서 사용가능
  - tip1. 타입 스크립트는 타입 지정을 대부분 자동으로 해줌 
    - 따라서 다입지정 문법 생량 가능
- 타입을 미리 정하기 애매할 때 (union type, any, unknown)
  - Union Type : 타입 2개 이상 합친 새로운 타입 만들기
  - Any Type : 모든 자료형 허용
- 함수에 타입 지정하는 법 & void 타입
  - 함수는 총 두 군데 타입지정이 가능
    - 함수로 들어오는 자료 (파라미터)
    - 함수에서 나가는 자료 (return)
  - Javascript와 다른 점 : 타입 지정된 파라미터는 필수임
  - 파라미터가 옵션일 경우 : 파라미터변수?:타입
    - 변수? :number는 변수 :number|undefiend와 같음
  - x :number|string 사용시 주의사항
    - string 타입 + 1(허용)
    - number 타입 + 1(허용)
    - string|number 타입 + 1(안됨)
- 타입 확정하기 Narrowing & Assertion
  - 꼭 지켜야할 Narrowing 문법
  - 귀찮으면 assertion 문법
  - console.log 해보고 싶으면 어케함