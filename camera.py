import picamera
import time

with picamera.PiCamera() as camera:
	camera.resolution = 'HD'
	camera.start_preview()
	time.sleep(10)
	camera.capture('/home/pi/Pictures/image.jpg')
	camera.stop_preview()