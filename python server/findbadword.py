#!/usr/bin/env python
# coding=utf8
import json
from datetime import datetime
import requests
import time

url = "http://172.30.16.33:3000/data"

f = open("designer.txt", 'r')

tmpdate1 = "2018-10-08"
tmpdate2 = "2018-10-09"
tmpdate3 = "2018-10-10"
tmpdate4 = "2018-10-11"
tmpdate5 = "2018-10-12"
tmpdate6 = "2018-10-13"
tmpdate7 = "2018-10-14"
datecount = [0,0,0,0,0,0,0,0]
data = f.read()
badword = "시발,병신,존나,빡치,개새끼,개같,개새,씨,ㄱㅅㄲ,ㅅㅂ,ㅂㅅ,ㅈㄴ,ㅈㄹ,ㄲㅈ,꺼져, 나쁜말, "
badwordcount = badword.count(",")
badwordtext = ["", "", "", "", "", "", "", ""]
badword = badword.split(",")
count = data.count(",")
count = count + 1
arr = data.split(",")

#에러나면 (command + i) 누르면됩니다

for i in range(0, count) :
    for j in range(0, badwordcount) :
        if (badword[j] in arr[i]) :
            if (tmpdate1 in arr[i]) :
                datecount[1] = datecount[1]+1
                badwordtext[1] += arr[i] + " ,"
            if (tmpdate2 in arr[i]) :
                datecount[2] = datecount[2]+1
                badwordtext[2] += arr[i] + " ,"
            if (tmpdate3 in arr[i]) :
                datecount[3] = datecount[3]+1
                badwordtext[3] += arr[i] + " ,"
            if (tmpdate4 in arr[i]) :
                datecount[4] = datecount[4]+1
                badwordtext[4] += arr[i] + " ,"
            if (tmpdate5 in arr[i]) :
                datecount[5] = datecount[5]+1
                badwordtext[5] += arr[i] + " ,"
            if (tmpdate6 in arr[i]) :
                datecount[6] = datecount[6]+1
                badwordtext[6] += arr[i] + " ,"
            if (tmpdate7 in arr[i]) :
                datecount[7] = datecount[7]+1
                badwordtext[7] += arr[i] + " ,"

weekcount4 = 0

for i in range(1, 8) :
    print(i, "day count", datecount[i])
    weekcount4 += datecount[i]



for i in range(1, 8) :
    print(badwordtext[i])


weekcount1 = 391
weekcount2 = 341
weekcount3 = 312

monthcount1 = 1292
monthcount2 = 1567
monthcount3 = 1453
monthcount4 = 1734
monthcount5 = 1249
monthcount6 = 1420+weekcount4

jsondata = {
        'id' : 'admin',
        'day1' : datecount[1],
        'day2' : datecount[2],
        'day3' : datecount[3],
        'day4' : datecount[4],
        'day5' : datecount[5],
        'day6' : datecount[6],
        'day7' : datecount[7],
        'week1' : weekcount1,
        'week2' : weekcount2,
        'week3' : weekcount3,
        'week4' : weekcount4,
        'month1' : monthcount1,
        'month2' : monthcount2,
        'month3' : monthcount3,
        'month4' : monthcount4,
        'month5' : monthcount5,
        'month6' : monthcount6
}
jsonString = json.dumps(jsondata)
for i in range(1,25) :
    print("\n")
print(jsonString)
while(1) :
    print('success to send : ')
    r = requests.post(url, data = jsondata)
    time.sleep(1000)
