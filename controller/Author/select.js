const { executeQuery } = require('../../utils/db');

// const getAuthors = {
//     getAuthor: (req, res) => {
//         const startTime = performance.now();

//         executeQuery('SELECT * FROM AUTHOR', [])
//             .then(results => {
//                 const endTime = performance.now();
//                 console.log('Query executed successfully');

//                 res.send({
//                     success: true,
//                     message: "Data fetched successfully",
//                     data: results,
//                     startTime: startTime,
//                     endTime: endTime,
//                     totalTime: endTime - startTime,
//                 });
//             })
//             .catch(err => {
//                 console.error(err);
//                 res.status(500).send("Error fetching data");
//             });
//     }
// };






const getAuthors = {
    getAuthor: (req, res) => {
        const startTime = performance.now();
        executeQuery('SELECT * FROM AUTHOR', [], (err, results) => {
            const endTime = performance.now();

            if (err) {
                console.error(err);
                res.status(500).send("Error fetching data");
            } else {
                console.log('Query executed successfully');
                //console.log(results); // Log the results if needed
               
                res.send({
                    success: true,
                    message: "Data fetched successfully",
                    data:results,
                    startTime:  performance.now(),
                    endTime:performance.now() ,
                    totalTime: endTime - startTime,
              });
            }
        });
    }
};

module.exports = getAuthors;
