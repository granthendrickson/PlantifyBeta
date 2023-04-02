import * as functions from "firebase-functions"
import * as admin from 'firebase-admin'

admin.initializeApp()

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
export const registerUser = functions.https.onRequest(async (request, response) => {
  
  const {firstName, lastName, email, username, password} = request.body

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: username
    })

    await admin.firestore().collection('users').doc(userRecord.uid).set({
      firstName,
      lastName,
    })

    response.json({message: 'User registered successfully', userId: userRecord.uid})
  }
  catch(error){
    response.status(500).json({message: "Unable to register user", errors: error })
  }
  
});



// export const sign_in = functions.https.onRequest((request, response) => {
    
// });

// BASIC CRUD (Create - Read - Update - Delete)
// Create
export const add_plant = functions.https.onRequest((request, response) => {
    
});

// // READ
// export const search_users_or_plants = functions.https.onRequest((request, response) => {
    
// });

// export const edit_plant = functions.https.onRequest((request, response) => {

// });

// // DELETE
// export const del_plant = functions.https.onRequest((request, response) => {
    
// });
