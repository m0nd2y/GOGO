function draw(){

    let chartdata = data;
    let newdata;
    let DATA;
    var ctx = document.getElementById("myChart").getContext('2d');
    if( type == "first"){
        DATA = JSON.parse(chartdata);
        let months = [
            parseInt(DATA.day1),
            parseInt(DATA.day2),
            parseInt(DATA.day3),
            parseInt(DATA.day4),
            parseInt(DATA.day5),
            parseInt(DATA.day6),
            parseInt(DATA.day7)
        ]
        newdata = {
            labels: ["6일 전", "5일 전", "4일 전", "3일 전", "2일 전", "1일 전", "오늘"],
            datasets: [{
                label: '비속어 사용 횟수',
                data: months,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                
                borderColor: [
                    'rgba(255,99,132,1)',
                ],

                borderWidth: 1
            }],
            linetenstion: 0.03,
        }
    }

    if( type == "second"){
        DATA = JSON.parse(chartdata);
        let months = [
            parseInt(DATA.week1),
            parseInt(DATA.week2),
            parseInt(DATA.week3),
            parseInt(DATA.week4),
        ]
        newdata = {
            labels: ["3주전", "2주전", "1주전", "이번주"],
            datasets: [{
                label: '비속어 사용 횟수',
                data: months,
                backgroundColor: [
                    'rgba(128,20, 157, 0.2)',
                ],
                
                borderColor: [
                    'rgba(128,20, 157, 1)',
                ],

                borderWidth: 1
            }],
            linetenstion: 0.4,
        }
    }
    
    if( type == "third"){
        DATA = JSON.parse(chartdata);
        let months = [
            parseInt(DATA.month1),
            parseInt(DATA.month2),
            parseInt(DATA.month3),
            parseInt(DATA.month4),
            parseInt(DATA.month5),
            parseInt(DATA.month6),
        ]
        newdata = {
            labels: ["5달전","4달전","3달전","2달전","1달전","이번달"],
            datasets: [{
                label: '비속어 사용 횟수',
                data: months,
                backgroundColor: [
                    'rgba(88, 188, 68, 0.2)',
                ],
                
                borderColor: [
                    'rgba(88, 188, 68, 1)',
                ],

                borderWidth: 1
            }],
            linetenstion: 0.4,
        }
    }

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: newdata,
        options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
};