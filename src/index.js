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
