import _ from 'lodash'

export const getUUID = () => _.uniqueId('UID_')
export const getUnqID = (str) => `${str}_${_.random(0, 1000000000)}`
export const isArray = (value) => _.isArray(value)
export const isObject = (value) => _.isObject(value)
export const cloneDeep = (value) => _.cloneDeep(value)
