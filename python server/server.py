#!/usr/bin/env python
# coding=utf8
import socket
from datetime import datetime

beforefile = open("develop.txt", 'r')
beforedata = beforefile.read()
f = open("develop.txt", 'w')

f.write(beforedata)
s = socket.socket()
host = socket.gethostname()
port = 4040
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.bind((host, port))

s.listen(5)
server = None

while True:
   if server is None:
       # Halts
       print( "응답을 기다리고 있습니다.")
       server, addr = s.accept() #  (socket object, address info) return
       print( 'Got connection from', addr)
   else:
       tmpdata = server.recv(1024)
       print("이승현 : " + (tmpdata))

       data = raw_input("사용자 : ")
       now = datetime.now()
       year = str(now.year)
       month = str(now.month)
       day = str(now.day)
       f.write(year + "-" + month + "-" + day + " : " + data+",")
       server.send(data)
