import Auth from "../pages/auth/Auth";
import Friends from "../pages/Friends/Friends";
import Home from "../pages/home/Home";
import Messages from "../pages/messages/Conversation";
import Profile from "../pages/profile/Profile";

export const routes = [
    {
        path:'/',
        exact: true,
        component: Home,
        auth:true,
    },
    {
        path:'/profile/:id',
        exact: false,
        component: Profile,
        auth:true,
    },
    {
        path:'/messages',
        exact: true,
        component: Home,
        auth:true,
    },
    {
        path:'/message/:id',
        exact: false,
        component: Messages,
        auth:true,
    },
    {
        path:'/friends/:id',
        exact: false,
        component: Friends,
        auth:true,
    },
    {
        path:'/auth',
        exact: true,
        component: Auth,
        auth:false,
    },
]