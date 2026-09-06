function slugify(title) {
    let slug = "";
    const newTitle = title.trim().toLowerCase();
    for (let i = 0; i < newTitle.length; i++) {
        if (newTitle[i] === " " && slug[slug.length - 1] !== "-") {
            slug += "-";
        } else {
            slug += newTitle[i].trim();
        }
    }
    return slug;
}

// function slugify(title) {
//     return title.trim().toLowerCase().split(" ").join("-")
// }

console.log("=========================Task1=========================");
console.log(slugify("   Arrays     for                 beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"