
# **Svelte Setup Guide** 🚀  

This guide walks you through setting up **Svelte**, installing dependencies, and deploying your project efficiently.  

---

## **📌 Prerequisites**  

Before starting, ensure you have **Node.js** installed. We recommend using **NVM (Node Version Manager)** for flexibility.  

### **1️⃣ Install NVM (Node Version Manager)**  
Run the following command in your terminal to install **NVM**:  
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
After installation, restart your terminal or run:  
```bash
source ~/.bashrc  # For Linux users
source ~/.zshrc   # For macOS users (if using Zsh)
```

### **2️⃣ Install Node.js Using NVM**  
To install Node.js (e.g., version 18), run:  
```bash
nvm install 18
```
To use the installed version:  
```bash
nvm use 18
```
To set Node.js 18 as the default version for all new terminals:  
```bash
nvm alias default 18
```

---

## **📌 Installing Svelte CLI & Creating a New Project**  

### **1️⃣ Install Svelte CLI**  
```bash
npx sv
```

### **2️⃣ Create a New Svelte Project**  
Run the following commands:  
```bash
npx sv create myapp
cd myapp
npm install
npm run dev
```
Your **development server** will start at `http://localhost:5173/`.

---

## **📌 Deploying Your Svelte App**  

Once your project is ready, deploy it using **Vercel, Surge, or Netlify**.  

### **✅ Deploying with [Vercel](https://vercel.com)**  
Install Vercel CLI:  
```bash
npm install -g vercel
```
Deploy your project:  
```bash
cd public
vercel deploy --name my-project
```

---

### **✅ Deploying with [Surge](https://surge.sh/)**  
Install Surge CLI:  
```bash
npm install -g surge
```
Build and deploy:  
```bash
npm run build
surge public my-project.surge.sh
```

---

### **✅ Deploying with [Netlify](https://www.netlify.com/)**  
Install Netlify CLI:  
```bash
npm install -g netlify-cli
```
Deploy your project:  
```bash
netlify deploy
```

