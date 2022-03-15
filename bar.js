var stock1={
             x:['2020','2021'],
             y:[10,20],
             type:'bar'
             marker:{color:'rgb(45,134,190)'}
            };

var stock2={
             x:['2020','2021'],
             y:[2,-4],
             type:'bar'
             marker:{color:'rgb(130,13,90)'}
            };

var data=[stock1,stock2]

var layout={
             title:'Stock 1 vs Stock2",
             barmode:'group'
           };

Plotly.newPlot('viz',data,layout);
