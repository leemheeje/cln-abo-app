import _ from 'lodash'

export const getUUID = () => _.uniqueId('UID_')
export const isArray = (value) => _.isArray(value)
export const isObject = (value) => _.isObject(value)
export const cloneDeep = (value) => _.cloneDeep(value)
