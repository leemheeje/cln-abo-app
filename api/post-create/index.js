import {ApiUtil} from '~/utils/ApiUtil'

export const apiText = () => ApiUtil.get('/item-names').then((data) => data.data.todos)
export const apiTextuser = () => ApiUtil.get('/users').then((data) => data.data.users)
// GET 카테고리
// 텍스트, 이미지 등등
export const apiCategory = () => ApiUtil.get('/post-category ').then((data) => data.data)
