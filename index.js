const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/categories', require('./routes/categories'))
app.use('/users', require('./routes/users'))
app.use('/products', require('./routes/products'))
app.use('/reviews', require('./routes/reviews'))
app.use('/orders', require('./routes/orders'))


app.listen(PORT, () => console.log(`Server up on port ${PORT}`))