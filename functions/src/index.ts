import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const serviceAccount = require('../circles-4d081-firebase-adminsdk-rtjsi-51616d71b7.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const newUser = functions.auth.user().onCreate((user) => {
    let seed = Math.floor(Math.random() * Math.floor(10000));
    admin.firestore().doc('users/' + user.uid).set({
        name: user.displayName,
        bio: 'Just Chilling',
        facebookID: '',
        instagramID: '',
        linkedinID: '',
        numberID: '',
        personalEmailID: '',
        snapchatID: '',
        tiktokID: '',
        twitterID: '',
        venmoID: '',
        websiteID: '',
        profilepic: 'https://picsum.photos/seed/' + seed + '/300'
    }).then(result => {
        console.log('New User Created');
    }).catch(e => {
        console.log(e);
    });
});

