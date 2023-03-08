
export const config = {

  adminQQ: 0,
  botQQ: 0,
  botPassword: '',
  oicq: {
    platform: 1
  },

  // handler config...
  officialAPI: {

    enable: true,
    key: '',
    model: 'gpt-3.5-turbo-0301',
    identity: [],
    maxTokens: 2560,
    maxTrackCount: 1,
    temperature: 0.9,
    stop: ['Human', 'AI'],
    name: ['Human', 'AI']
  },
  api: {

    enable: false,
    email: '',
    password: '',
    browserPath: ''
  }
}
