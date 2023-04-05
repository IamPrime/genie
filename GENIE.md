This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project Blueblood | Genie

## Genie is the first web app to be developed by the team. Other apps will be coming soon

### The team is comprised of 4 Purdue University Students

* Primus
* Tanuja
* Keerthika
* Reshma

## Getting Started

* Create a [`.env.local`] file in the root directory
* and fill in the details from your firebase setup.
* This is an example

```bash
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=appName.firebaseapp.com
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=appName.appspot.com
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
```

First , run:
npm install

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Icons

npm i react-icons --save | Let's you easily get any Icons - Material, FontAwesome, etc.

### Hooks

npm i react-firebase-hooks | Let's you easily import the user and check if the user is ther or not

# Explanations

* NOTE -  If the user is signed in, display username

* import {useAuthState} from 'react-firebase-hooks';
* import {auth} from '../../utils/firebase';

* NOTE - Our pages are being rendered using the Layout

* all the components are being passed into the Layout component which is then passed into the App.
* We will take care to rectify this
