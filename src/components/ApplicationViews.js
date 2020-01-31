import React from "react";
import { Route } from "react-router-dom";
import { TaskProvider } from "./task/TaskProvider";
//import { EventProvider } from "./event/EventProvider";
//import { ArticleProvider } from "./article/ArticleProvider";
import TaskList from "./task/TaskList";
//import EventList from "./event/EventList";
//import ArticleList from "./article/ArticleList";
import TaskForm from "./task/TaskForm";
import { MessageProvider } from "./message/MessageProvider";
import MessageForm from "./message/MessageForm";
import MessageList from "./message/MessageList";
import MessageDetails from "./message/MessageDetails";

import FriendList from "./friends/FriendList";
import FriendForm from "./friends/FriendForm";
import { FriendProvider } from "./friends/FriendProvider";
//import FriendDetails from "./friend/FriendDetails";
import { UserProvider } from "./user/UserProvider"

export default (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/">
                    <h2>Tasks</h2>
                    <TaskForm />
                    <TaskList />
                </Route>
            </TaskProvider>

            <UserProvider>
                <FriendProvider>
                    <MessageProvider>
                        <Route exact path="/messages" render={
                            props => <MessageList {...props} />
                        } />
                        <Route exact path="/messages/create">
                            <MessageForm />
                        </Route>
                        <Route path="/messages/:messageId(\d+)" render={
                            props => <MessageDetails {...props} />
                        } />
                    </MessageProvider>
                </FriendProvider>
            </UserProvider>

            <UserProvider>
            <FriendProvider>
                <Route exact path="/friends" render={
                    props => <FriendList {...props} />
                } />
                <Route exact path="/friends/create">
                    <FriendForm />
                </Route>
                {/* <Route path="/friends/:friendId(\d+)" render={
                    props => <FriendDetails {...props} />
                } /> */}
            </FriendProvider>
           </UserProvider> 
        </>
    )
}

