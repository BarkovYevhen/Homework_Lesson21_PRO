class SuperMath {
    input() {
      const X = parseFloat(prompt("Введіть X:"));
      const Y = parseFloat(prompt("Введіть Y:"));
      const znak = prompt("Введіть дію ('+','-','*','/'):");
  
      const obj = { X, Y, znak };
  
      return obj;
    }
  
    check({ X, Y, znak }) {
      const userInput = confirm(`Виконати дію ${znak} з атрибутами ${X} і ${Y}?`);
  
      if (userInput) {
        const actions = {
          '+': (x, y) => x + y,
          '-': (x, y) => x - y,
          '*': (x, y) => x * y,
          '/': (x, y) => x / y
        };
  
        const action = actions[znak];
        if (action) {
          return action(X, Y);
        } else {
          return 'Помилка';
        }
      } else {
        return 'Операція відмінена користувачем';
      }
    }
  }
  
    const superMath = new SuperMath();
    const obj = superMath.input();
    const result = superMath.check(obj);
    alert(`Результат: ${result}`);