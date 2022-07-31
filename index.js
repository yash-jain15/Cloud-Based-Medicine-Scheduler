var fb = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
fb.initializeApp({

  credential: fb.credential.cert(serviceAccount),

  databaseURL: "https://fir-f078c-default-rtdb.firebaseio.com/",

});
const firebaseDB = fb.database();

//referring path of email and printing its value
//firebaseDB.ref("Email").once("value").then((Snap)=>{console.log(Snap.val())});

//printing all the values of the database
/*firebaseDB.ref("/").once("value").then((Snap)=>{
    Snap.forEach((ele) => {console.log(ele.val())})    
});*/

//Storing Emails
/*var arr = []
firebaseDB.ref("/").once("value").then((Snap)=>{
    Snap.forEach((ele) => {
        ele.forEach((detail)=>{
            if(detail.key=="Email"){
                arr.push(detail.val());
            }
        })
    })    
});
setTimeout(() => {
    console.log(arr);  
}, 5000);*/

//Creating Person5
const p5 = {
    "Email": "xyz@gmail.com",
    "Name": "xyz"
}
firebaseDB.ref("Person5").set(p5).then(()=>{
    console.log("Person Added");
})