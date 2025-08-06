function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = 'Please enter valid numbers.';
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operator';
    }
  }

  document.getElementById('result').textContent = 'Result: ' + result;
}

function clearAll() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').textContent = 'Result:';
}

function clearLast() {
  const active = document.activeElement;
  if (active && (active.id === 'num1' || active.id === 'num2')) {
    active.value = active.value.slice(0, -1);
  }
}
