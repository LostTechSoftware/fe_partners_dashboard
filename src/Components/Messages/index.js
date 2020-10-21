 /* eslint-disable import/named */
 /* eslint-disable import/no-unresolved */
 /* eslint-disable react/prop-types */
 /* eslint-disable no-shadow */
 /* eslint-disable react/jsx-curly-brace-presence */
 /* eslint-disable no-unused-vars */
 /* eslint-disable no-console */
 /* eslint-disable import/order */
 /* eslint-disable prettier/prettier */
 import React, { useState, useEffect, useMemo } from 'react';
 import api from '../../services/api';
 import socketio from 'socket.io-client'

 //r = ao pedido
 export default function Messages({r}) {

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
   }])
   const [chat, setChat] = useState('')
   const [user, setUser] = useState('')
  
    useEffect(() => {
      async function LoadMessages() {
          const user = sessionStorage.getItem('@CodeApi:user')
          setUser(user)
          const response = await api.get(`/chat/${r._id}`)

          if (response.data) {
            setMessages(response.data.text)
           return setChat(response.data)
          }
      }
      LoadMessages()
    }, [])
   
    async function sendMessage(content) {
       if (!chat._id) {
         await api.post(`/restaurant/new/chat/${r._id}`, {
           text: {
             content
           }
         })
       } else {
         await api.post(`/restaurant/chat/${r._id}/${chat._id}`, {
           text: {
             content
           }
         })
       }
   }
   
   const socket = useMemo(() => socketio('https://foodzilla-backend.herokuapp.com', {
     query: {
       user_id: user._id
     }
   }), [user])

   useEffect(() => {
           socket.on('message', function response(response) {
               setMessages(response.text)
               setChat(response)
           })
   }, [socket]);


   return (
     <>
     </>
     )
 }
