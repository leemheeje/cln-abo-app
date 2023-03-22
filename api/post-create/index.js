import {ApiUtil} from '~/utils/ApiUtil'

export const apiText = () => ApiUtil.get('/item-names').then((data) => data.data.todos)
export const apiTextuser = () => ApiUtil.get('/users').then((data) => data.data.users)
