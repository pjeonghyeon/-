//변수 선언
let string='안녕하세요. 좋은 아침입니다.';

//츨력
if (string.indexOf('아침') >=0) {
    console.log('좋은 아침이에요...!');
}

//현재 시간을 구한다
let date= new Date();

//출력1
console.log(date);

//시간을 더한다
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 3);

//출력2
console.log(date);

//배열 선언
let arrayA = ['고구마', '감자','바나나'];
let arrayB = [{
    name:'고구마',
    price:1000
}, {
    name:'감자',
    price:500
}, {
    name:'바나나',
    price:400
}];