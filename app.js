const express = require('express')
const ejs = require('ejs')
const path = require('path')
const axios = require('axios')
const fs = require('fs')

const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

/**
 * Home Page & Post List Page
 */
app.get('/', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/list.json')
  const f = fs.readFileSync('mock/list.json')
  res.render('index', { ...JSON.parse(f) })
})

/**
 * Post Page
 */
app.get('/post/:postName', async (req, res) => {
 // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/post.json')
  const f = fs.readFileSync('mock/post.json')
  res.render('post', { ...JSON.parse(f) })
})

/**
 * Archives Page
 */
app.get('/archives', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/archives.json')
  const f = fs.readFileSync('mock/archives.json')
  res.render('archives', { ...JSON.parse(f) })
})

/**
 * tags Page
 */
app.get('/tags', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/tags.json')
  const f = fs.readFileSync('mock/tags.json')
  res.render('tags', { ...JSON.parse(f) })
})

/**
 * tag Page
 */
app.get('/tag/:tagName', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/tag.json')
  const f = fs.readFileSync('mock/tag.json')
  res.render('tag', { ...JSON.parse(f) })
})

//使用8080端口
app.listen(3001)
console.log("The server is running on 3001")
