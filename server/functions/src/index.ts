import * as functions from "firebase-functions"
import * as admin from 'firebase-admin'


admin.initializeApp()
const db = admin.firestore()
const storage = admin.storage().bucket()


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


// BASIC CRUD (Create - Read - Update - Delete)
// Create
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

// READ
export const search_users_or_plants = functions.https.onRequest(async (request, response) => {
  
  const query = request.query?.toString()

  if(!query){
    response.status(400).json({message: 'Search query is empty'})
    return
  }

  try {

    const searchResult = await Promise.all([
      db.collection('users').where('username', '==', query),
      db.collection('plants').where('species', '==', query),
      
    ])

    const usersQuery = searchResult[0].get()
    const plantspeciesQuery = searchResult[1].get()
    
    //const test = (await usersQuery).forEach(doc => )



    response.json({usersQuery, plantspeciesQuery})
  }
  catch(error) {

  }

});

// UPDATE
// export const edit_plant = functions.https.onRequest(async (request, response) => {

// });

// export const edit_plant = functions.https.onRequest(async (request, response) => {

// });

// // DELETE
export const del_plant = functions.https.onRequest(async (request, response) => {
  
  const {plantId} = request.body

  try {

    const plantRef = db.collection('plants').doc(plantId)

  }
  catch(error) {

  }
});
