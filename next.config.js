/** @type {import('next').NextConfig} */
const path = require('path')

const Restapify = require('restapify').default


const apiFolderPath = path.resolve(__dirname, './mock-api')

const rpfy = new Restapify({
  rootDir: apiFolderPath,
  openDashboard: true
})

rpfy.on('error', ({error, message}) => {
  console.log(error + ' ' + message)
})

rpfy.run()

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
