
import React, { useState, useEffect, useMemo } from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api';
import Message from './Message';

import './styles.css';

export default function Messages({ request }) {

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
  
  const socket = useMemo(() => socketio('https://foodzilla-backend.herokuapp.com', {
    query: {
      user_id: restaurantId
    }
  }), [restaurantId]);

  async function sendMessage(content) {
    if (!chat._id) {
      await api.post(`/restaurant/new/chat/${request._id}`, {
        content
      })
    } else {
      await api.post(`/restaurant/chat/${chat._id}`, {
        content
      })
    }
  }
  
  useEffect(() => {
    async function LoadMessages() {
      const userId = sessionStorage.getItem('_id');
      setRestaurantId(userId);
      const response = await api.get(`/chat/${request._id}`);

      if (response.data) {
        setMessages(response.data.text);
        setChat(response.data);
      }
    }
    LoadMessages()
  }, []);

  useEffect(() => {
    socket.on('message', function response(response) {
      setMessages(response.text)
      setChat(response)
    })
  }, [socket]);

  useEffect(() => {
    console.log('messages');
    console.log(messages);
    console.log('chat');
    console.log(chat);
  }, [ messages, chat ])

  return (
    <div className="ChatBox">
      <section cclassName="messages">
        {
          [ 0, 1, 2].map(e => (
            <Message
              send_by   = {'haha'}
              date      = {'haha'}
              time      = {'haha'}
              content   = {'haha'}
            />
          ))
        }
      </section>

      <form className="newMessage">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
        />

        <button>send</button>
      </form>
    </div>
  )
}
