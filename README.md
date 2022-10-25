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