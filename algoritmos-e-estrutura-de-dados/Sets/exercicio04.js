function audienceOverlap(blog1, blog2) {
  const set01 = new Set(blog1);
  return blog2.some((set02) => set01.has(set02));
}

let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 10];

if (audienceOverlap(blog1, blog2)) {
  console.log('Yes, there is an audience overlap between both blogs.');
} else {
  console.log('No, there is no audience overlap between both blogs.');
}
