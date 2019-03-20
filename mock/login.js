export const Login = (req, res) => {
  const {
    password,
    userName
  } = req.body;
  if (password === '888888' && userName === 'admin') {

    const userInfo = {
      "id": "155",
      "avatar": 'https://s.gravatar.com/avatar/e29e4fea91ed22e85a326aec93a01781?size=496&default=retro',
      "name": "admin",
      "nickName": "赵Sir"
    }

    res.send({
      errno: 0,
      msg: '',
      data: {
        "userInfo": userInfo,
        "clientToken": userInfo.id + new Date()*1
      }
    })
    return
  }
  res.send({
    errno: 401,
    msg: '用户名或密码错误',
    data: {}
  })
}

export default {
  Login
}
