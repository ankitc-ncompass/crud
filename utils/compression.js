const zlib = require("zlib")

const compress={compressedData:((req, res, next) => {
    const originalSend = res.send
    res.send = function (data) {
      if (req.acceptsEncodings("gzip")) {
        const compressedData = zlib.gzipSync(JSON.stringify(data))
        // Set the appropriate headers for gzip compression
        res.setHeader("Content-Encoding", "gzip")
        res.setHeader("Content-Type", "application/json")
        res.setHeader("Content-Length", compressedData.length)
        // Send the compressed data
        res.end(compressedData)
      } else {
        // If the client does not support compression, send the response as JSON
        originalSend.call(res, data)
      }
    }
    next()
  })}

  module.exports=compress   