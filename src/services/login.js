import axios from 'axios'
const loginURL = 'http://localhost:3003/api/login'
const userUrl = 'http://localhost:3003/api/users'

const login = async (cred) => {
  const req = await axios.post(loginURL, cred).then((re) => re.data)
  console.log('req', req)
  return req
}

const signup = async (cred) => {
  const res = await axios.post(userUrl, cred).then((res) => res.data)
  console.log('res', res)
  return res
}

export default { login, signup }
