module.exports.handler = async() => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Hello from VSC'})
  }
}