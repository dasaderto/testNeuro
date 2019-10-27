const Records = require("../models/Record.js");

exports.index = async function (request, response) {

    const records = await Records.find({});

    response.status(200).json(JSON.stringify(records));
};

exports.recordStore = async function (request, response) {
    const newRecord = new Records({
        title: request.body.title,
        recordBody: request.body.recordBody,
        status:request.body.status
    });

    newRecord.save((err, rec) => {
        if (err) {
            response.status(400).json(err);
        }
        response.status(200).json(JSON.stringify(rec));
    });
};

exports.recordEdit = async (request, response) => {
    let recordId = request.params.id;

    Records.findById(recordId, (err, rec) => {
        if (err) {
            response.status(400).json(err);
        }
        response.status(200).json(rec)
    })
};

exports.recordUpdate = async function (request, response) {
    let recordId = request.params.id;
    let newRecord = {
        title: request.body.title,
        status: request.body.status
    };

    Records.findOneAndUpdate({_id: recordId},newRecord,{new: true},(err,rec)=>{
        if(err){
            response.status(400).json(err);
        }
        console.log(rec);
        response.status(200).json(rec);
    });
};

exports.recordDelete = async function (request, response) {
    let deleteRecord = request.params.id;

    Records.findOneAndDelete({_id: deleteRecord}, function (err, result) {

        if (err) {
            response.status(400).json(err);
        }
        response.json(result);
    });
};