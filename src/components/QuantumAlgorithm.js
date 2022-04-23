import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import React from "react";
import Game from "./QTTT";

const quantumTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica',
  headerBgColor: '#8040bf',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6C3082',
  botFontColor: '#fff',
  userBubbleColor: '#50C878',
  userFontColor: '#fff',
};

const Algorithm = ({algorithmName, pokemon}) => {

  const chatLog = [
    {
      id: 1,
      message: `Looking for ${pokemon.name} in the list...`,
      trigger: 2,
      delay: 1000,
      replace: true,
      placeholder: '???',
    },
    {
      id: 2,
      message: `Let's play Tiq-Taq-Toe! (Not to be confused with Tic-Tac-Toe)`,
      trigger: 3,
      delay: 2000,
      replace: true,
      placeholder: '???',
    },
    {
      id: 3,
      component: (
        <div>
          <Game />
        </div>
      ),
      delay: 9000,
      //end: true,
      placeholder: '???',
      trigger: 4,
    }
  ]

  chatLog.push({
    id: 4,
    message: `Almost done! Double checking...`,
    delay: 43 * 1000,
    trigger: 5,
    placeholder: '???',
  })

  chatLog.push({
    id: 5,
    message: `Found ${pokemon.name} after 51472 iterations and in ~65 seconds`,
    delay: 5 * 1000,
    trigger: 6,
    placeholder: '???',
  })

  chatLog.push({
    id: 6,
    component: (
      <div>
        <img 
          src={pokemon.sprite}
          alt={pokemon.name}
        />
      </div>
    ),
    delay: 2000,
    placeholder: '???',
    trigger: 7,
  })

  chatLog.push({
    id: 7,
    options: [
      { value: 1, label: 'That was quick!', trigger: 8 },
      { value: 2, label: '???', trigger: 8 },
    ],
  })

  chatLog.push(    {
    id: 8,
    message: `b̵̛͓̣͛̚͝y̷͕̫̯̥̹̪̼̭̍̈́̓̃e̴̜͈̔͒̕`,
    end: true,
    delay: 1500,
    placeholder: '???',
  })

  return (
    <ThemeProvider theme={quantumTheme}>
      <ChatBot
        height='320px'
        bubbleStyle={{ fontSize: '12px' }}
        hideBotAvatar={true}
        hideUserAvatar={true}
        botDelay={50}
        enableMobileAutoFocus={false}
        headerTitle={algorithmName}
        steps={chatLog}
      />
    </ThemeProvider>
  )
}

export default Algorithm