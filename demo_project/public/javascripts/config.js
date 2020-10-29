const aws = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
aws.config.update({
    region: process.env.REGION,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY,
});

const docClient = new aws.DynamoDB.DocumentClient();
module.exports = docClient;