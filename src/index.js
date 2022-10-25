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
/* 타입을 미리 정하기 애매할 때 (union type, any, unknown) */
// 문자 or 숫자 들어올 수 있는 변수는 어떻게 만듭니까?
var 회원 = 123; //Union Type : 타입 2개 이상 합친 새로운 타입 만들기
var 회원들 = [1, '2', 3];
var 오브잭트 = { a: '1234' };
var 이름2; // 모든 자료형 허용 -> 타입실드 해체 문법(일반 JS를 쓴다고 보면됨)
var 이름3; // 모든 자료형 허용 -> any랑 같은 역할
// 그러나 any보다 안전함.
//Q. 왜 타입맞는데 +1이 안되는 것?
var 나이;
// 나이 +1;
// string 타입 + 1(허용)
// number 타입 + 1(허용)
// string|number 타입 + 1(안됨)
var 나이2 = 1;
// 나이 -1; Error
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
/* 함수에 타입 지정하는 법 & void 타입*/
function 함수2(x) {
    return x * 2;
}
함수2(30);
// void 함수
function 함수3(x) {
}
function 함수4(x) {
    // 변수? :number는 변수 :number|undefiend와 같음
}
function 함수5(x) {
    //console.log(x + 3)  //error가 남. 엄격하게 타입을 명시하지 않으면 연산이 안되기 때문에
}
function sayHi(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('왜입력안함');
    }
}
function 자릿수세기(x) {
    return x.toString().length;
}
function 결혼가능하냐(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능하냐(100, true, '상'));
