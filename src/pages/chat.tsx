// Chat.tsx

import dynamic from 'next/dynamic';
import React from "react";

const ChatArea = dynamic(() => import('../components/Chat/ChatArea/ChatArea'), {
    ssr: false,
});

const Chat = () => {
    return (
            <ChatArea />
    );
};

export default Chat;
