# TransferX: File Sharing Platform

## Overview
TransferX is an open-source file sharing platform that enables users to share files with others. It uses AWS S3 for file storage, MongoDB as the database, and Next.js for building the backend and frontend. The platform also utilizes AWS Lambda to clear objects from S3 daily.

## Features
- File sharing among users
- Secure file storage using AWS S3
- User authentication and authorization
- Daily file cleanup using AWS Lambda
- Scalable architecture using Next.js and MongoDB

## Setup and Installation

### AWS S3 Setup
1. Create an AWS account and navigate to the S3 dashboard.
2. Create a new S3 bucket and note the bucket name.
3. Create a new IAM user and generate access key and private key.
4. Update the `awsConfig.js` file with your access key and private key.

### MongoDB Setup
1. Refer to our [Notion Page Link](https://adnaanazam.notion.site/MongoDB-d8d4a6cd91e0411ea26ca6d607299154?pvs=74) for MongoDB setup instructions.
2. Create a new MongoDB cluster and note the connection string.
3. Update the `mongodbConfig.js` file with your connection string.

### Next.js Setup
1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

### Lambda Setup
1. Create a new Lambda function and choose Node.js as the runtime.
2. Update the `lambdaHandler.js` file with your Lambda function code.
3. Configure the Lambda function to run daily using CloudWatch Events.

## Configuration
- `awsConfig.js`: Update with your AWS access key and private key.
- `mongodbConfig.js`: Update with your MongoDB connection string.
- `nextConfig.js`: Update with your Next.js configuration.

## Environment Variables
Create a `.env` file in the root directory and add the following variables

```Javascript
AWS_ACCESS_KEY_ID=''
AWS_SECRET_ACCESS_KEY=''
AWS_REGION='ap-south-1'
AWS_S3_BUCKET=''
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DB_URI=''
DB_NAME=''
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''
NEXT_PUBLIC_AWS_LOCAL_URL=''
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to contribute to the project.

## License
TransferX is licensed under the MIT License.
