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
/* 타입 확정하기 Narrowing & Assertion */
// Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야함
// 대표적인 Narrowing 방법은 typeof 연산자
function 내함수(x) {
    if (typeof x === 'string') {
        return x + 1;
    }
    else {
    }
}
function 내함수2(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    else {
        //if문 썼으면 끝까지 써야 안전. else else if 안쓰면 에러로 잡아줄 수도 있음
    }
}
// Narrowing 으로 판정해주는 문법들
// typeof 변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부로
// 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌
// assertion : 타입을 덮어쓰는 방법
function 내함수3(x) {
    var array = [];
    array[0] = x; // as : assertion 문법
    // assertion 문법의 용도
    // 1. Narrowing할 때 씁니다.
    // 2. 무슨 타입이 들어올지 100% 확실할 때 쓰셈(그래서 굳이 쓸 이유가 없음)
    // 남이 짠 코드를 수정할 때, 왜 타입에러가 났는지 모르겠을 때, 비상용으로만 주로 씀
}
// 옛날 assertion 문법
// let 이름 :number = 123;
//
// (이름 as string) + 1;  //현재문법
// <string>이름 + 1;   //옛날문법
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(클리닝함수([123, '3']));
function 만들함수(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return '없쪄';
    }
}
console.log(만들함수({ subject: ['english', 'art'] }));
var 동물 = 123;
// type 변수 작명 관습 : 첫글자는 대문자, 뒤에 Type 키워드를 붙여주면 좀 더 정확함
var 출생지역 = 'seoul'; // const : 상수
var 출생지역2 = { region: 'seoul' }; // 오브젝트 안에 있는 변수는 바꿀 수 있음
출생지역2.region = 'busan';
var 여친 = {
    name: '엠버'
};
var 여친2 = {
    name: '엠버'
};
var position = { x: 10, y: 20 };
// 같은 이름의 type변수 재정의 불가능
