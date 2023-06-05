'use strict';

function upperFirstWord(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

function transform(str, fn) {
  console.log(
    `Từ ban đầu : ${str} \nTừ đã biến đổi : ${fn(
      str,
    )} \nCông cụ biến đổi từ : ${fn.name}`,
  );
}

transform('nguyen Khoa Dao', upperFirstWord);
//console.log(upperFirstWord('nguyen Khoa Dao'));
