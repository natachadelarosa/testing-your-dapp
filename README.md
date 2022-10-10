**Table of Contents**

- [🏄 Get Started](#-get-started)
- [✨ Code Style](#-code-style)
- [🛳 Build](#-build)
- [💖 Contributing](#-contributing)
## 🏄 Get Started

This Dapp is built with [create-web3-dapp](https://github.com/alchemyplatform/create-web3-dapp) 

To start local development:

```bash
git clone git@github.com:natachadelarosa/testing-your-dapp.git
cd testing-your-dapp
```

Go to backend and run:

```bash
cd backend

npm install

npm run build

npm run test # To run your tests

npm run node # To run the local node

# In a separate terminal window
npm run deploy-local #make sure to copy the contract address to replace it in the frontend/pages/components/panel.jsx
```


In a separate terminal window, go to frontend and run
```bash
cd frontend

npm install
```

Finally, set environment variables to use this local connection in `.env` in the app:

```bash
# modify env variables
cp .env.dist .env

npm run dev
```

This will start the frontend development server under
`http://localhost:3000`.