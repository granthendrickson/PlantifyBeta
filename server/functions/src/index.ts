import * as functions from "firebase-functions"
import * as admin from 'firebase-admin'

admin.initializeApp()
const db = admin.firestore()
const bucket = admin.storage().bucket("gs://plantify-d36ed.appspot.com")

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//


// STATUS: Working Properly
export const registerUser = functions.https.onRequest(async (request, response) => {
  
  const {firstName, lastName, email, username, password} = request.body

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: username
    })

    await db.collection('users').doc(userRecord.uid).set({
      firstName,
      lastName,
      username,
      userId: userRecord.uid
    })

    response.json({message: 'User registered successfully', userId: userRecord.uid})
  }
  catch(error){
    response.status(500).json({message: "Unable to register user", error })
  }
  
});

//===============================================
// BASIC CRUD(Create - Read - Update - Delete)===
//===============================================

//---------------------------------------------
// ------------CREATE FUNCTIONS----------------
//---------------------------------------------

// STATUS: NOT FUNCTIONAL, NEEDS WORK
export const add_plant = functions.https.onRequest(async (request, response) => {

  const {plantname, plantphoto, species, description, userId} = request.body

  try {
    const plant_metadata = {plantname,plantphoto, species, description, userId}
    await db.collection('users').doc(userId).collection('plants').add(plant_metadata)
  }
  catch (error) {
    response.status(500).json({message : "Could not add plant", error})
  }
});

//---------------------------------------------
//---------------READ FUNCTIONS----------------
//---------------------------------------------

// STATUS: MAYBE FUNCTIONAL? NEEDS TESTING
export const search_users_or_plants = functions.https.onRequest(async (request, response) => {
  
  const {query} = request.body

  if(!query){
    response.status(400).json({message: 'Search query is empty'})
    return
  }

  try {

    const searchResult = await Promise.all([
      db.collection('users').where('username', '==', query).get(),
      db.collection('plants').where('species', '==', query).get(),
    ])

    const usersQuery = searchResult[0].docs.map((doc) => doc.data())
    const plantspeciesQuery = searchResult[1].docs.map((doc) => doc.data())
    
    response.json({usersQuery, plantspeciesQuery})
  }
  catch(error) {
    response.status(500).json({message: "Error querying for users or plant species", error})
  }

});



//---------------------------------------------
//-------------UPDATE FUNCTIONS----------------
//---------------------------------------------

// STATUS: NO WORK, NEEDS START
// export const edit_user = functions.https.onRequest(async (request, response) => {

// });


// STATUS: NO WORK, NEEDS START
// export const edit_plant = functions.https.onRequest(async (request, response) => {

// });

//---------------------------------------------
//-------------DELETE FUNCTIONS----------------
//---------------------------------------------

// STATUS: HAS WORK, NEEDS MORE WORK
export const del_plant = functions.https.onRequest(async (request, response) => {
  
  const {plantId} = request.body

  try {

    const plantRef = db.collection('plants').doc(plantId)
    
    
    await plantRef.delete()
    await bucket.deleteFiles()

    response.json({message: "Successfully deleted"})
  }
  catch(error) {
    response.json({message: "Could not delete", error})
  }
});
