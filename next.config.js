const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['transferx-dev.s3.ap-south-1.amazonaws.com', 'transferx-prod.s3.ap-south-1.amazonaws.com', 'duvcbs9bgr0db.cloudfront.net',process.env.NEXT_PUBLIC_AWS_LOCAL_URL],
  },
}