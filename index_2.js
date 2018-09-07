const fs = require('fs');
const AWS = require('aws-sdk');

const body = fs.createReadStream('./backup_db.zip');

var s3obj = new AWS.S3({params: {Bucket: 'noddier.s3.amazonaws.com', Key: 'backup_2'}});
s3obj.upload({Body: body}).
  on('httpUploadProgress', function(evt) { console.log(evt); }).
  send(function(err, data) { console.log(err, data) });

console.log(body);