const input_one = document.getElementById('first-value') as HTMLInputElement;
const input_two = document.getElementById('second-value') as HTMLInputElement;
const buttom = document.getElementById('resolve-btn');

function sumNumbers(number_one: number, number_two: number) {
  return number_one + number_two;
};

if (buttom) {
  buttom.addEventListener('click', () => {
    if (input_one && input_two) {
      console.log(sumNumbers(Math.abs(Number(input_one.value)), Math.abs(Number(input_two.value))));
    }
  });
}
