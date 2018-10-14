   var fileXLS = req.body.fileXLS;

        var path = "./public/files/location/upload/" + date + ".xlsx";

        var flowController = new EventEmitter();

        // Initialize
        flowController.on('START', function () {

            (consoleLog) ? console.log('1') : '';

            require("fs").writeFile(path, fileXLS, 'base64', function (err) {
                if (err) {

                    res.json({message: 'CAN\'T INSERT INTERNAL SERVER ERROR, UNKNOWN SERVER ERROR HAS OCCURRED!!!!!' + err, status: 'error', statusCode: '500'});
                } else {

                    var model = null;

                    mongoXlsx.xlsx2MongoData(path, model, function (err, mongoData) {
                        if (err) {

                            flowController.emit('ERROR', {message: 'ERROR WHILE UPLOADING EXCEL FILE ' + err, status: 'error', statusCode: '500'});
                        } else {

                            flowController.emit('2', mongoData);
                        }
                    });
                }
            });
        });


    