/* Typescript 필수문법 10분정리와 설치 셋팅*/
let 이름 :string = 'kim'; // 이 변수엔 무조건 string만 들어올 수 있다.

let 배열 :string[] = ['kim', 'park']; // string이 들어있는 array만 가능

let 오브젝트 : {name : string} = {name:'king'};

let 오브젝트조건 : {name? : string} = {name : 'kinm'}; // name속성은 옵션이다.

let 다양한타입 :string | number = 123;

//타입은 변수에 담아 쓸 수 있음 : Type alias
type 내타입 = string | number;
let 타입 :내타입 = 123;

// 함수에 타입 지정 가능
function 함수(x:number) : number{ //파라미터로 number, return 값으로 number
    return x * 2;
}

//array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john:Member = [123, true];

type Member2 = {
    name : string
}
let john2 : Member2 = {name : 'kim'};

// object타입지정해야할 속성이 너무 많으면
type Member3 = {
    [key : string] : string, // 글자로 된 모든 object 속성 타입은 :string
}
let john3 : Member3 = {name : 'kim'}

// class 타입 지정 가능
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}

/* 타입스크립트 기본 타입 정리(primitice types) */
// tip1. 타입 스크립트는 타입 지정을 대부분 자동으로 해줌
//       따라서 다입지정 문법 생량 가능

// Q1. 이름, 나이, 출생지역을 변수로 각각 저장
let myName :string = 'Lee Jin-lee'; // 변수에 타입지정가능 변수명:타입명
let myAge :number = 24;
let myLocation :string = 'Seoul';

// Q2. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 저장
let favorite : {song: string, singer :string} = {song: '사랑하기 때문에', singer: '유재하'};

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
// }
let project :{
    member : string[],
    days : number,
    started : boolean,
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}