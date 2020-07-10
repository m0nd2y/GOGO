#!/usr/bin/env python
# coding=utf8
import socket
from datetime import datetime

beforefile = open("designer.txt", 'r')
beforedata = beforefile.read()
f = open("designer.txt", 'w')

f.write(beforedata)
s = socket.socket()
host = socket.gethostname()
port = 4040

s.connect((host, port))
print( 'Connected to', host)

while True:
    data = raw_input("사용자 : ")
    now = datetime.now()
    year = str(now.year)
    month = str(now.month)
    day = str(now.day)
    f.write(year + "-" + month + "-" + day + " : " + data+",")
    s.send(data)
    tmpdata = s.recv(1024)
    print ("이동준 : " + (tmpdata))
