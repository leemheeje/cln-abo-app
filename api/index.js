import {ApiUtil} from '~/utils/ApiUtil'
// console.log(ApiUtil.AWS)
// import AWS from 'aws-sdk'

export const S3_BUCKET = 'clr-bucket-s3'

// const MyBucket = {}
const MyBucket = new ApiUtil.AWS.S3({
  params: {Bucket: S3_BUCKET}
})
export const fileUpload = ({Key, Body, ...params}) => {
  const array = []
  const files = Array.from(Body) // files[0] == array, files == object
  const _fileUpload = (file) =>
    new Promise((resolve, reject) => {
      const _params = {
        Bucket: S3_BUCKET,
        Key: Key || file.name,
        Body: file
      }
      const upload = MyBucket.upload(_params, (err, data) => {
        console.log(err, data)
        if (data) resolve(data)
        if (err) reject(err)
      })
      console.log('upload-----------', upload)
    })

  if (!files || !files.length) return false
  for (let i = 0; i < files.length; i++) {
    _fileUpload(files[i]).then((data) => {
      array.push(data)
    })
  }
  console.log('files-----------', files)
  console.log('array-----------', array)
  return array
}
