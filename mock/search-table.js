import Mock from 'mockjs'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randomAvatar() {
  // https://uifaces.co
  const avatarList = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://d3iw72m71ie81c.cloudfront.net/female-17.jpg',
    'https://randomuser.me/api/portraits/men/35.jpg',
    'https://pbs.twimg.com/profile_images/584098247641300992/N25WgvW_.png',
    'https://d3iw72m71ie81c.cloudfront.net/male-5.jpg',
    'https://images.pexels.com/photos/413723/pexels-photo-413723.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/women/65.jpg',
    'https://randomuser.me/api/portraits/men/43.jpg',
    'https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg',
    'https://randomuser.me/api/portraits/men/46.jpg'
  ]
  return avatarList[randomNumber(0, avatarList.length - 1)]
}

const database = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
      avatar() {
        return randomAvatar()
      },
    },
  ],
}).data

export const searchTable = (req, res)=> {
  const { query } = req
  let { pageSize, page, ...other } = query
  pageSize = pageSize || 10
  page = page || 1

  let newData = database
  for (let key in other) {
    if ({}.hasOwnProperty.call(other, key)) {
      newData = newData.filter(item => {
        if ({}.hasOwnProperty.call(item, key)) {
          if (key === 'address') {
            return other[key].every(iitem => item[key].indexOf(iitem) > -1)
          } else if (key === 'createTime') {
            const start = new Date(other[key][0]).getTime()
            const end = new Date(other[key][1]).getTime()
            const now = new Date(item[key]).getTime()

            if (start && end) {
              return now >= start && now <= end
            }
            return true
          }
          return (
            String(item[key])
              .trim()
              .indexOf(decodeURI(other[key]).trim()) > -1
          )
        }
        return true
      })
    }
  }

  res.status(200).json({
    data: newData.slice((page - 1) * pageSize, page * pageSize),
    total: newData.length,
  })
}
