const handleValidationError = (err, res) => {
  let errors = err.errors.map((el) => el.message)
  if (errors.length > 1) {
    const msgErr = errors.join(' || ')
    res.status(400).send({ message: msgErr })
  } else {
    res.status(400).send({ message: errors })
  }
}

const typeError = (err, req, res, next) => {
  if (
    err.name === 'SequelizeValidationError' ||
    err.name === 'SequelizeUniqueConstraintError'
  ) {
    handleValidationError(err, res)
  } else {
    res.status(500).send({ message: 'There was a problem', err })
  }
}

module.exports = { typeError }