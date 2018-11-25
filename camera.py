import picamera
import time
import tweepy
mensaje = "Hola"

auth = tweepy.OAuthHandler("6fugPhPrG5Ybb2faRJxoKcLvo", "5pUH4qTzUB9gYay1iyG5Hth14mXMmYUXbbWFF1sOQGlBvvV2Fv")
auth.set_access_token("1437051505-7gj6wf6tF7y0BsWVesSESz0CQHpGBUF8sFkvQ9q", "Ap9feKToDNxzcRLM1t3as9ZoqMJecQSsODJ3C5r6finzD")

api = tweepy.API(auth)

def recordingvideo():
    date_recording = '/home/pi/Videos/video_date'+time.strftime("%c")+'.h264'
    camera = picamera.Picamera()
    camera.resolution(640, 480)
    camera.start_recording(date_recording)
    camera.wait_recording(60)
    camera.stop_recording()

with picamera.PiCamera() as camera:
	camera.resolution = "720p"
	camera.start_preview()
	time.sleep(1)
	x = str(time.time())
	image = '/home/pi/Pictures/' + x + '.jpg'
	camera.capture(image)
	time.sleep(1)
	api.update_with_media(status=mensaje, filename=image)
	camera.stop_preview()

