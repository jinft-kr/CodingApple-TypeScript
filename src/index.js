/* Typescript 필수문법 10분정리와 설치 셋팅*/
var 이름 = 'kim'; // 이 변수엔 무조건 string만 들어올 수 있다.
var 배열 = ['kim', 'park']; // string이 들어있는 array만 가능
var 오브젝트 = { name: 'king' };
var 오브젝트조건 = { name: 'kinm' }; // name속성은 옵션이다.
var 다양한타입 = 123;
var 타입 = 123;
// 함수에 타입 지정 가능
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: 'kim' };
var john3 = { name: 'kim' };
// class 타입 지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
/* 타입스크립트 기본 타입 정리(primitice types) */
// tip1. 타입 스크립트는 타입 지정을 대부분 자동으로 해줌
//       따라서 다입지정 문법 생량 가능
// Q1. 이름, 나이, 출생지역을 변수로 각각 저장
var myName = 'Lee Jin-lee'; // 변수에 타입지정가능 변수명:타입명
var myAge = 24;
var myLocation = 'Seoul';
// Q2. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 저장
var favorite = { song: '사랑하기 때문에', singer: '유재하' };
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
// }
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
