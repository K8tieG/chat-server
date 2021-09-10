const express = require ('express');

//require the controller 
const msgCont = require ('./controllers/messages_controller');

const app = express();

// Configures the app to parse JSON from the body so we have access to req.body
app.use(express.json());
//setup API to serve front-end files 
app.use(express.static('public/build'));

//endpoints
const msgBaseUrl = "/api/messages"
app.get(msgBaseUrl, msgCont.read);
app.post(msgBaseUrl, msgCont.create);
//includes URL param of id because these methods use it 
app.put(`${msgBaseUrl}/:id`, msgCont.update);
app.delete(`${msgBaseUrl}/:id`, msgCont.delete);


// Configures the app to listen on port 3001 and display a message when it is listening.
const port = 3001;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});