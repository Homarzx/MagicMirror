import TwitterAPI

CONSUMER_KEY = '4AfoCX5060Au6qRj1R4hi7vNu'
CONSUMER_SECRET = 'CoP7NMtk4Djy14yJcVs8NDmxtZC5wJkTQCM42toj9zd1NcvnM6'
ACCESS_TOKEN_KEY = '1061795272664272896-Qv4WQGb8oDM8SVEuAkXmhfZe30kBzY'
ACCESS_TOKEN_SECRET = 'XPFiLIpywtgKKzoujmxxce57gcYHELxqxMkg2xtOiHkaf'

api = TwitterAPI(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET)

file = open('Image.jpg', 'rb')
data = file.read()
upload = api.request('statuses/update_with_media', {'status':'Your tweet'}, {'media[]':data})
print(upload.status_code)