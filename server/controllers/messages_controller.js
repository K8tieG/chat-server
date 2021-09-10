//array that keeps track of all messages
let messages = []

//id to assign to new messages 
let id = 0

//exports an object with all our methods on the object
module.exports = {
    create: (req, res) =>{
        //creates new message object using text/time off the request body req.body = message
       const {text, time} = req.body;
       //push new message obj into new messages array
       messages.push({id, text, time});
       //updates id to keep each unique
       id++
       //send the update array
       res.status(200).send(messages);
    },
    // read method returns the entire messages array.
    read: (req, res) =>{
        res.status(200).send(messages);
    },
    update: (req, res) =>{
        //updates text property using text value from req.body
        const { text } = req.body;
        // determine which message to update based on the value of id from the request url parameters. 
        const updateID = req.params.id;
        //finds index of message object where ids match from params and body
        const messageIndex = messages.find(message => message.id == updateID);
        //finds object using the index
        let message = messages[messageIndex];

        //updated message array
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },
    delete: (req, res) =>{
        //delete value based of id from url params
        const deleteID = req.params.id;
        //find index of message object
        const messageIndex = messages.find(message => message.id == deleteID);
        //remove message from the messages array
        messages.splice(messageIndex, 1);

        //return the updated messages array
        res.status(200).send(messages);
    },
   

};