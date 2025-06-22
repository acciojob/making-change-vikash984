const makeChange = (c) => {
  c = parseInt(c); // Ensure input is treated as a number

  const q = Math.floor(c / 25);
  c = c % 25;

  const d = Math.floor(c / 10);
  c = c % 10;

  const n = Math.floor(c / 5);
  c = c % 5;

  const p = c;

  return { q, d, n, p };
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
