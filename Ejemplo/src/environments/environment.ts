// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
export const environment = {
  production: false
};

*/

//Agregamos Firebase a nuestro proyecto 
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCkeaIIKTPSMhdBUFIAMYVbKWrskFrobf4",
    authDomain: "ejemplofirebase-7c83f.firebaseapp.com",
    projectId: "ejemplofirebase-7c83f",
    storageBucket: "ejemplofirebase-7c83f.appspot.com",
    messagingSenderId: "828780821601",
    appId: "1:828780821601:web:f5fb1ab576a8f3876b7e20",
    measurementId: "G-PM66MX92WV"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
