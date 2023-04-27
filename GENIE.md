# Project Blueblood | Genie

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Genie is the first web app to be developed by the team

### Other apps will be coming soon

## The team is comprised of 4 Purdue University Students

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

```bash
npm install
# or 
npm setup
```

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

```bash
npm i react-icons --save # | Let's you easily get any Icons - Material, FontAwesome, etc.
```

### Hooks

```bash
npm i react-firebase-hooks # | Let's you easily import the user and check if the user is ther or not
```

## Explanations

## Documentation

### NOTE -  If the user is signed in, display username

* import {useAuthState} from 'react-firebase-hooks';
* import {auth} from '../../utils/firebase';

### NOTE - Our pages are being rendered using the Layout

* all the components are being passed into the Layout component which is then passed into the App.
* We will take care to rectify this

### TODO - ensure the quiz is only accessible from the private route

* Currently, just inputing the right link will give you the quiz
* Either move the entire quiz folder into the private folder or change the links

### TODO - use-sound | an npm package for sound prompts

This library only works in React DOM, but [@remigallego] created an alternative for React Native!
Check out <https://github.com/remigallego/react-native-use-sound> react-native-use-sound.

* TODO - We will look into implementing this feature at a later date; because NextJs currently does not support Audio rendering

### TODO - Check the Navbar | Images tag should be used not img tag

This will fix the hydration ui issue.

### TODO - Remove the alert from the notification bell

Remove the alert after user has opened the message(s)

## NOTE - Add a token to the admin link

Only those with the token will be able to see the admin login page

### TODO - Fix the style in login page

Use the tailwindcss bg-color tag and not the inline style tag

### NOTE - Hydration Error is caused by authentication state

* Fix the authentication state for all the pages,
* Make sure that authState is properly used where needed.

#### Aside ---- Next.config.js by keerthika

```bash
const nextConfig = {
  reactStrictMode: true,}
module.exports = {
  images: {
    domains: ['wallpapercave.com'], },
  nextConfig};
```
