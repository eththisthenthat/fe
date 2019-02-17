export default () => {
  const customEndpoint = process.env.REACT_APP_CUSTOM_API
  return customEndpoint 
    ? customEndpoint 
    : 'https://d0ob9xv927.execute-api.us-east-1.amazonaws.com/dev'
}