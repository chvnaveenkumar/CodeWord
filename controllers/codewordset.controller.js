let uploadfile = (req,res) => {
    var data = []
    var workbook = XLSX.read(req.file.buffer, {type:"buffer"})
    _.each(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]), function(ele,index,list){
    for(firstKey in ele)
    data.push(ele[firstKey])
  })
    var codeWordSetModel = new CodeWordSetModel({
         CodeWordSetName: req.body.codeWordFileName,
         CodeWords:data,
         instructorEmail: req.session.email,
         codeWordSize: data.length
    });
    codeWordSetModel.save().then((user) => {
        if(user)
        return res.json({ code: 200, message: true});           
    }).catch((e) => {
        return res.json({ code: 400, message: e});        
    })
}
module.exports.uploadfile = uploadfile

let getAllCodewordSet = (req, res) =>{
    console.log(req.session.email);
    console.log('getallcodewordset');
    CodeWordSetModel.find({instructorEmail: { $in: [req.session.email, "largecodewordset","smallcodewordset"] } }, function (err, CodeWordSetAll) {
        if(err){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        return res.json(CodeWordSetAll);
    });
}
module.exports.getAllCodewordSet = getAllCodewordSet

let getUserCodewordSet = (req, res) =>{
    CodeWordSetModel.find({instructorEmail: req.session.email }, function (err, CodeWordSet) {
        if(err){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        return res.json(CodeWordSet);
    });
}
module.exports.getUserCodewordSet = getUserCodewordSet

let deleteUserCodeWordSet = (req, res) => {

}
module.exports.deleteUserCodeWordSet = deleteUserCodeWordSet
