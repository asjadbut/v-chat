import React from 'react';
import { ChatEngineWrapper, Socket } from 'react-chat-engine';
import { createRoot } from 'react-dom/client';
import App from './App';


var container  = document.getElementById('root');
var root = createRoot(container);
root.render(<App/>);

