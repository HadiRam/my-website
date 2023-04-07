export const words = ["Software Engineer", "Data Analyst", "Web Developer", "Problem Solver" ,"Mobile Developer"];
let index = 0;
let wordIndex = 0;

export function type() {
  const typingText = document.getElementById("typing-text");
  if (index < words[wordIndex].length) {
    typingText.innerHTML += words[wordIndex].charAt(index);
    index++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 2000);
  }
}

export function erase() {
  const typingText = document.getElementById("typing-text");
  if (index >= 0) {
    typingText.innerHTML = words[wordIndex].substring(0, index);
    index--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    let text = words[wordIndex];
    setTimeout(type, 200);
  }
}
