import {ApiUtil} from '~/utils/ApiUtil'

export const apiText = () => ApiUtil.get('/todo').then((data) => data.data.todos)
