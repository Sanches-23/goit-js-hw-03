// Перш ніж розв'язувати задачу, розберемось із новим терміном.
//
//
//
// Slug — це зрозумілий людині унікальний ідентифікатор, який використовується у веброзробці для створення читабельних URL-адрес.
//
//
//
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug із назви статті: mysite.com/posts/arrays-for-beginners.
//
//
//
// Slug — це завжди рядок у нижньому регістрі, слова якого розділені тире.
//
//
//
// Оголоси функцію slugify, яка очікує один параметр title — заголовок статті. Функція повертає slug, створений із цього рядка.
//
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.

function slugify(title) {
    title.toLowerCase();

}

console.log("=========================Task1=========================");
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"