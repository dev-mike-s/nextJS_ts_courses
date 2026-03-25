// sum.test.ts
// Einfachster Testaufbau als Beispiel.

function sum(a: number, b: number) {
  return a + b;
}

test("sum addiert korrekt", () => {
  expect(sum(2, 3)).toBe(5);
});
