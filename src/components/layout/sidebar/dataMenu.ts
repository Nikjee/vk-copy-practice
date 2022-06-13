import * as Icon from '@mui/icons-material'
import { iMenuItem } from '../../../Types'

export const menu: iMenuItem[] = [
    {
        title:'Моя страница',
        link:'/profile',
        icon:Icon.Home,
    },
    {
        title:'Друзья',
        link:'/friends',
        icon:Icon.People,
    },
    {
        title:'Новости',
        link:'/',
        icon:Icon.Article,
    },
]