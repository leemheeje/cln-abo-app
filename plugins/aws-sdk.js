import AWS from 'aws-sdk'
/**
 *  AWS IAM 서비스 접속 ACCESS_KEY 발급
 *  IAM > 사용자 > 권한 > "AmazonS3FullAccess" 권한 부여
 */
export default (context, inject) => {
  AWS.config.update({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })
  console.log('process.env.AWS_ACCESS_KEY_ID?????----------', process.env.AWS_ACCESS_KEY_ID)
  return AWS
}
