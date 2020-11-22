
import React, { useState, useEffect, useMemo } from 'react';
import socketio from 'socket.io-client';
import { Button } from '@material-ui/core';
import SendRounded from '@material-ui/icons/SendRounded';
import useSound from 'use-sound';

import api from '../../services/api';
import Message from './Message';
import './styles.css';
import requestRecived from '../../assets/request-recived.mp3';

export default function Messages({ requestId, setMessages: setM }) {
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([{
    _id: 2,
    type: 'text',
    content: 'Olá, que bom que está aqui, digite algo para iniciar a conversa',
    targetId: '12345678',
    chatInfo: {
      avatar: 'https://foodzilla.com.br/assets/images/favicon.png',
      id: '12345678',
      nickName: 'Test'
    },
    renderTime: false,
    sendStatus: 0,
    time: new Date()
  }]);

  const [ chat, setChat ] = useState('');
  const [ restaurantId, setRestaurantId ] = useState('');
  const [ playRequestRecived ] = useSound(requestRecived)

  const socket = useMemo(() => socketio('https://foodzilla-backend.herokuapp.com', {
    query: {
      user_id: restaurantId
    }
  }), [restaurantId]);

  async function sendMessage( event ) {
    event.preventDefault();
    // Block messages without some letter or number
    if(/\w|_/.test(messageInput)) {
      setMessageInput('');
      if (!chat._id) {
        await api.post(`/restaurant/new/chat/${requestId}`, {
          content: messageInput
        })
      } else {
        await api.post(`/restaurant/chat/${chat._id}`, {
          content: messageInput
        })
      }
    }
  }
  
  useEffect(() => {
    async function LoadMessages() {
      const userId = sessionStorage.getItem('_id');
      setRestaurantId(userId);
      const response = await api.get(`/chat/${requestId}`);

      if (response.data) {
        setM(response.data.text)
        setMessages(response.data.text);
        setChat(response.data);
      }
    }
    LoadMessages()
  }, []);

  useEffect(() => {
    socket.on('message', function response(response) {
      playRequestRecived()
      setM(response.text)
      setMessages(response.text)
      setChat(response)
    })
  }, [socket]);

  return (
    <div className='ChatBox'>
      <section cclassName='messages'>
        {
          messages.map(message => (
            <Message
              key={message._id}
              userName={message.chatInfo.nickName}
              avatar={ message.chatInfo.avatar }
              send_by={'haha'}
              time= {message.time.toString()}
            >
              {message.content}
            </Message>
          ))
        }
      </section>

      <form onSubmit={ sendMessage }>
        <input
          type='text'
          value={ messageInput }
          onChange={ event => setMessageInput(event.target.value) }
          placeholder='Digite sua mensagem...'
        />

        <Button type='submit' >
          <SendRounded />
        </Button>
      </form>
    </div>
  )
}
