import _ from 'lodash'

export const fileValidator = (files = [], {type, maxsize}) => {
  if (!type && !maxsize) return true
  if (typeof files === 'object') {
    return !!_.find(files, (o) => {
      const t = type ? o.type.includes(type) : true
      const s = maxsize ? o.size < maxsize : true
      console.log(`
	  /*********** 이미지 유효성 검사 utils/ObjectUtil.js *********/
	  ${t} ${s} ${type} ${maxsize} ${o.type} ${o.size}
	  /**********************************************************/
	  `)
      if (t && s) return true
    })
  }
}
export const fileReader = (file) => {
  const reader = new FileReader()
  const getThumb = (file) =>
    new Promise((resolve) => {
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.readAsDataURL(file)
    })
  return getThumb(file).then((url) => url)
}
