import picamera
import time

def recordingvideo():
    date_recording = '/home/pi/Videos/video_date'+time.strftime("%c")+'.h264'
    camera = picamera.Picamera()
    camera.resolution(640, 480)
    camera.start_recording(date_recording)
    camera.wait_recording(60)
    camera.stop_recording()

with picamera.PiCamera() as camera:
	camera.resolution = '720p'
	camera.start_preview()
	time.sleep(2)
	camera.capture('/home/pi/Pictures/' + str(time.time()) + '.jpg')
	time.sleep(1)
	camera.stop_preview()
