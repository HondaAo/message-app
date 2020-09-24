import React, { useState, useEffect } from 'react';
import { Button, InputLabel, Input } from '@material-ui/core';
import { FormControl } from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'
import { IconButton} from '@material-ui/core'
import './App.css';

function App() {
  const [ input , setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ username, setUsername] = useState('');

useEffect(() => {
     db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=> doc.data()))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = e =>{
    e.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    setMessages([...messages, {username: username, text: input}])
    setInput('');
  }
  return (
    <div className="App">
      <h2>Welcome to {username}</h2>
      <form className="app-form">
      <FormControl className="app__formControl">
        <InputLabel>Enter a message...</InputLabel>
        <Input className="app__input" type="text" value={input} onChange={e=> setInput(e.target.value)} />
        <IconButton className="app__iconButton" disable={!input} variant="contained" color="primary" onClick={sendMessage}><SendIcon /></IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(message=>{
          return (
            <Message username={username} message={message.text} sender={message.username} />
          )
        })
      }
      </FlipMove>
    </div>
  );
}

export default App;
