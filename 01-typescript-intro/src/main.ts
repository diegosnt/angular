import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

//import './topics/01-basic-types.ts';
//import './topics/02-object-interface.ts';
//import './topics/03-functions.ts';
//import './topics/04-homework-types.ts';
import './topics/05-basisc-destructuring.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hola Mundo!
`
console.log('Hola Mundo');
