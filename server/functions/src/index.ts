import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const register = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true})
  response.send("Hello from Firebase!")
});



export const sign_in = functions.https.onRequest((request, response) => {
    
});

// BASIC CRUD (Create - Read - Update - Delete)
// Create
export const add_plant = functions.https.onRequest((request, response) => {
    
});

// READ
export const search_users_or_plants = functions.https.onRequest((request, response) => {
    
});

export const edit_plant = functions.https.onRequest((request, response) => {

});

// DELETE
export const del_plant = functions.https.onRequest((request, response) => {
    
});
