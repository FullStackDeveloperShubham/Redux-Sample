
This is a simple yet complete example of a counter app built using **Redux Toolkit** with **ReactJS**. It demonstrates modern Redux practices like using `createSlice` and `configureStore`, offering a clean and scalable structure.

---

## 🚀 Tech Stack

- ⚛️ ReactJS
- 🧰 Redux Toolkit
- 🔗 React-Redux

---

## 🧰 Features

- Increment / Decrement functionality
- Global state management with Redux Toolkit
- Minimal and scalable structure
- Redux DevTools support out-of-the-box

---

## 🛠️ Installation & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/FullStackDeveloperShubham/Redux-Sample.git

cd Redux-Sample
```

```bash 
2. Install Dependencies

npm install
```

```bash
3. Start the App

npm run dev

```

```bash 
📦 Example Code Snippets
 🧠 counterSlice.js


import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

🧠 store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

```

## ✍️ Author

Made with ❤️ by [@FullStackDeveloperShubham](https://github.com/FullStackDeveloperShubham)

### 🌐 Connect with me:

- 💼 [LinkedIn](https://www.linkedin.com/in/shubham-gaikwad-62499329a/)
- 🐦 [Twitter / X](https://x.com/ItsDevShubham)
- 📷 [Instagram](https://www.instagram.com/developer_shubham_/)
- 💬 [Mediam Blog](https://medium.com/@s35919223)

