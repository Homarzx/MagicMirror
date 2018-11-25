import tweepy

auth = tweepy.OAuthHandler("6fugPhPrG5Ybb2faRJxoKcLvo", "5pUH4qTzUB9gYay1iyG5Hth14mXMmYUXbbWFF1sOQGlBvvV2Fv")
auth.set_access_token("1437051505-7gj6wf6tF7y0BsWVesSESz0CQHpGBUF8sFkvQ9q", "Ap9feKToDNxzcRLM1t3as9ZoqMJecQSsODJ3C5r6finzD")

api = tweepy.API(auth)

api.update_with_media(status='preuba', filename="/home/pi/Pictures/1542012737.4251988.jpg")


