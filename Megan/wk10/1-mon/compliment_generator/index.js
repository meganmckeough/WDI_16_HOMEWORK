const express = require('express')
const app = express()
const PORT = 7777
const _ = require('lodash')

const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Shut up and take my money",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/:name', (req, res) => {
	compliment = _.sample(compliments)
	color = _.sample(colors)
	res.render('index', {
		compliment, 
		color, 
		name: req.params.name
	})
})

app.listen(PORT, () => {
	console.log(`listening at port ${PORT}`)
})

