# 🎢 Vertical Slider

![HTML](https://img.shields.io/badge/HTML-Structure-orange?style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS-Styling-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

A clean and interactive **vertical slider** built using vanilla JavaScript.

This project focuses on creating a smooth sliding experience where content and images move in opposite directions, making the UI feel dynamic and visually interesting.

---



## ✨ What Makes It Cool

- Vertical sliding instead of the usual horizontal flow  
- Dual movement effect (left ↕ right move opposite)  
- Smooth transitions using `translateY()`  
- Minimal UI, maximum clarity  

---

## 🧠 How It Works

Each slide takes up full screen height. When you click the buttons:

- A slide index is updated  
- Both sections are shifted using `translateY()`  
- One moves up, the other moves down  

```js
rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
