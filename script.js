class SuperMath {
  input() {
    const X = parseFloat(prompt("Введіть X:"));
    const Y = parseFloat(prompt("Введіть Y:"));
    const znak = prompt("Введіть дію ('+','-','*','/'):");

    const obj = { X, Y, znak };

    return obj;
  }

  check() {
    const obj = this.input();
    const { X, Y, znak } = obj;

    const userInput = confirm(`Виконати дію ${znak} з атрибутами ${X} і ${Y}?`);

    if (userInput) {
      const actions = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
      };

      const action = actions[znak];
      if (action) {
        const result = action(X, Y);
        alert(`Результат: ${result}`);
        return result;
      } else {
        alert("Помилка");
        return "Помилка";
      }
    } else {
      alert("Операція відмінена користувачем");
      return "Операція відмінена користувачем";
    }
  }
}

const superMath = new SuperMath();
superMath.check();
