# Character and Word Counter

A simple web application that counts characters and words in real-time as you type, built with **jQuery**, **HTML**, and **CSS**.

---

## ✨ Features

- 🔤 Real-time **character counting**
- 📝 Real-time **word counting** (handles multiple spaces correctly)
- 🎨 Clean, **responsive** design
- 🧑‍💻 User-friendly interface with placeholder text
- 📱 **Mobile-friendly** layout

---

## 🚀 Installation

1. **Clone** this repository or **download** the files.
2. Open `index.html` in any modern web browser.

---

## 🧠 Usage

- Type or paste text into the **textarea**
- Watch the **character** and **word** counts update automatically

The counter handles:
- Empty input (shows **0**)
- **Multiple spaces** between words
- **Leading/trailing** spaces

---

## 📁 File Structure

- `index.html` – Main HTML structure  
- `script.js` – jQuery logic for counting functionality  
- `style.css` – Styling for the application  

---

## 📦 Dependencies

- [jQuery 3.7.1](https://code.jquery.com/)

---

## 🎨 Customization

You can easily modify:

- 🎨 **Colors** in `style.css`
- 📏 **Textarea size**
- ✍️ **Font styles**
- 📦 **Container** dimensions and shadows

---

## ⚙️ How It Works

The application uses jQuery's `input` event listener to:

- **Count characters** using `.length`
- **Count words** by:
  - Trimming extra whitespace
  - Splitting text on whitespace
  - Filtering out empty strings
  - Counting the resulting array length

---

## 📄 License

This project is **open source** and available for anyone to use and modify.
