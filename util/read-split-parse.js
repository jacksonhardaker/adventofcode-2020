const fs = require('fs')
const path = require('path')

const defaultParser = (val) => val

const readSplitAndParse = (filename, options = {}) => {
  const {
    delimiter = '\n',
    parser = defaultParser,
  } = options
  // Load data from txt file
  const data = fs.readFileSync(path.join(__dirname, '..', filename), {
    encoding: 'utf8'
  })

  // Split data file on newline, and filter out any empty entries
  const dataArray = data.split(delimiter).filter(mass => !!mass).map(parser)

  return dataArray
}

module.exports = readSplitAndParse
