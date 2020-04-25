var admin = require('firebase-admin');
var serviceAccount = require('circles-4d081-firebase-adminsdk-rtjsi-575e9493ca');
const functions = require('firebase-functions');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://circles-4d081.firebaseio.com"
});

exports.sendNotif = functions.firestore.document('users/{userId}').onUpdate(function(change,context) {
    const newValue = change.after.data();
    const name = newValue.unreadPings;

});

