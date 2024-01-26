const zlib = require('zlib');
const { executeQuery } = require('../../utils/db');


getCustomerss = {
    getCustomer: (req, res) => {
        const startTime = performance.now();
        executeQuery('select * from CUSTOMER', [], (err, results) => {
            const endTime = performance.now();


            // without zlib
            if (err) {
                console.log(err);
            } else {
                res.status(200).send({
                    success: true,
                    message: "Data fetched successfully",
                    data: results,
                    startTime: performance.now(),
                    endTime: performance.now(),
                    totalTime: endTime - startTime,
                })
            }
        })
    }
};


//with compression
//     if (err) {
//         console.log(err);
//         res.status(500).send("Error fetching data");
//     } else {
//         // Convert JSON data to a string
//         const jsonData = JSON.stringify({
//             success: true,
//             message: "Data fetched successfully",
//             data: results,
//             startTime: startTime,
//             endTime: endTime,
//             totalTime: endTime - startTime,
//         });

//         // Create a gzip stream
//         const gzip = zlib.createGzip();

//         // Set response headers for gzip compression
//         res.setHeader('Content-Encoding', 'gzip');
//         res.setHeader('Content-Type', 'application/json');

//         // Pipe the compressed data to the response
//         gzip.pipe(res);

//         // Compress and send the JSON data
//         gzip.end(jsonData);
//     }
// })}}








module.exports = getCustomerss;