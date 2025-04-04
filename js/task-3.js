// Задача 3. Ширина елемента

function getElementWidth(content, padding, border) {
  // Перетворюємо рядки у числа, видаляючи "px"
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // Враховуємо padding з обох сторін
  const borderWidth = parseFloat(border) * 2; // Враховуємо border з обох сторін
  
  // Розраховуємо загальну ширину елемента
  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
