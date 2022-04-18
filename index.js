"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");


const bucket = new aws.s3.Bucket("my-bucket");

exports.bucketName = bucket.id;
