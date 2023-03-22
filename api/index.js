import AWS from 'aws-sdk'
/**
 *  AWS IAM 서비스 접속 ACCESS_KEY 발급
 *  IAM > 사용자 > 권한 > "AmazonS3FullAccess" 권한 부여
 */
export const ACCESS_KEY_ID = 'AKIASUF4EBOOVZJNVM4G'
export const SECRET_ACCESS_KEY = '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'
export const REGION = 'ap-northeast-2'
export const S3_BUCKET = 'clr-bucket-s3'
AWS.config.update({
  region: REGION,
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY
})
const MyBucket = new AWS.S3({
  params: {Bucket: S3_BUCKET}
})
export const fileUpload = async ({Key, Body, ...params}) => {
  const _params = {
    Bucket: S3_BUCKET,
    Key: Key || Body.name,
    Body
  }
  const upload = await MyBucket.upload(_params, (err, data) => {
    console.log(err, data)
    return data
  })
  return upload
}
