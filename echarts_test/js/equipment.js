//左上 功能 雷达图
(function(){
  //1.配置实例化对象
  var myChart = echarts.init(document.querySelector(".function .chart"));
  //2.指定配置项和数据
  var option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
      text: '功能分析',
      textStyle:{
        color:'#fff'
      },
    },
    legend: {
      top:15,
      textStyle:{
        color:'rgba(211, 253, 250, 0.8)'
      },
    },
    radar: [
      {
        indicator: [
          { text: '障碍物探测' },
          { text: '实时定位' },
          { text: '语音导航' },
          { text: '紧急呼救' },
          { text: '无线寻杖' }
        ],
        center: ['50%', '50%'],
        radius: 110,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '【{value}】',
          color: '#428BD4'
        },
        splitArea: {
          areaStyle: {
            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        }
      }
  
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [80, 7, 0.1, 40, 1600],
            name: '腰包型'
          },
          {
            value: [60, 5, 0.3, 20, 1500],
            name: '箱型',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          },
          {
            value: [100, 8, 0.4, 60, 2000],
            name: '手杖型',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          },
          {
            value: [90, 4, 0.2, 30, 1700],
            name: '车型',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          }
        ]
      },
  
    ]
  };
  //3.把配置项给对象
  myChart.setOption(option);
  //自适应大小
  window.addEventListener("resize", function() {
      myChart.resize();
  });
})(); 

//左下 材料饼图
(function(){
    //1.配置实例化对象
    var myChart = echarts.init(document.querySelector(".material .chart"));
    //2.指定配置项和数据
    
    var option = {
      // title: {
      //   text: 'Weather Statistics',
      //   subtext: 'Fake Data',
      //   left: 'center'
      // },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 1,
        left: 'center',
        textStyle:{
          color:'#02a6b5'
        },
        data: ['不锈钢', '木质', '镁铝合金', '工程塑料', '其他']
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '40%'],
          selectedMode: 'single',
          //图形的文字标签
          label:{
            color:'#02a6b5'
            
          },
          data: [
            { value: 8, name: '其他'},
            { value: 33, name: '不锈钢' },
            { value: 14, name: '木质' },
            { value: 31, name: '镁铝合金' },
            { value: 12, name: '工程塑料' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    //3.把配置项给对象
    myChart.setOption(option);
    //自适应大小
    window.addEventListener("resize", function() {
        myChart.resize();
    });
  })();

 
//中 设备软件硬件基本介绍
(function(){
  //1.配置实例化对象
  var myChart = echarts.init(document.querySelector(".summary .chart"));
  //2.指定配置项和数据

  // const colors = ['#06c8ab', '#066eab', '#0682ab', '#06f0ab', '#06a0ab'];
  const colors = ['#06f0ab', '#428BD4', '#02a6b5', '#065aab', '#06a0ab'];
  // const bgColor = '#2E2733';
  const bgColor = '#010F4B'
  const itemStyle = {
    star5: {
      color: colors[0]
    },
    star4: {
      color: colors[1]
    },
    star3: {
      color: colors[2]
    },
    star2: {
      color: colors[3]
    }
  };
  const data = [
    {
      name: '软件',
      itemStyle: {
        color: colors[1]
      },
      children: [
        {
          name: '算法',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '图像处理算法'
                },
                {
                  name: '距离测量算法'
                },
                {
                  name: 'GPS定位漂移的处理'
                }
              ]
            },
          ]
        },
        {
          name: '信息处理',
          children: [
            {
              name: '4☆',
              children: [
                {
                  name: '低电量提醒'
                },
                {
                  name: '语音信息处理'
                }
              ]
            },
            {
              name: '3☆',
              children: [
                {
                  name: '故障信息警报'
                }
              ]
            }
          ]
        },
        {
          name: '其他',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '实时情况向后台传递'
                }
              ]
            },
            {
              name: '4☆',
              children: [
                {
                  name: '后台信息存储'
                },
                {
                  name: '形成使用画像'
                }
              ]
            },
            {
              name: '2☆',
              children: [
                {
                  name: '开启与关闭震动和语音提示'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: '硬件',
      itemStyle: {
        color: colors[2]
      },
      children: [
        {
          name: 'GSM模块',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: 'GSM网络进行通信'
                }
              ]
            },
            {
              name: '4☆',
              children: [
                {
                  name: '语音通话'
                },
                {
                  name: '发送SMS短信'
                }
              ]
            },
          
          ]
        },
        {
          name: '超声波模块',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '测量距离'
                }
              ]
            },
            {
              name: '4☆',
              children: [
                {
                  name: '帮助避开障碍'
                },
                {
                  name: '能测量在30以内范围的角度'
                },
                {
                  name: '支持 Arduino IDE 编程\n&并且提供运行库来简化编程'
                }
              ]
            },
            {
              name: '3☆',
              children: [
                {
                  name: '使用 RJ25 接口连线方便'
                }
              ]
            }
          ]
        },
        {
          name: '摄像头',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '采集路况信息'
                }
              ]
            },
            {
              name: '4☆',
              children: [
                {
                  name: '镜头采集画面信息'
                },
                {
                  name: '传感器采集空间信息'
                }
              ]
            },
            {
              name: '3☆'
            },
            {
              name: '2☆',
              children: [
              ]
            }
          ]
        },
        {
          name: 'GPS模块',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '接收GPS信息来进行定位、导航'
                }
              ]
            },
            {
              name: '4☆',
              children: [
                {
                  name: '求经度、纬度、高度\n和时间修正量四个参数'
                },
                {
                  name: '低功率消耗'
                }
                ,
                {
                  name: '多路径减缓硬件'
                }
              ]
            }
          ]
        },
        {
          name: 'RNF模块',
          children: [
            {
              name: '5☆',
              children: [
                {
                  name: '发射、接收、空闲\n及掉电四种工作模式'
                }
              ]
            },
            {
              name: '4☆',
              children: [
                {
                  name: '片内自动生成报头和CRC校验码'
                },
                {
                  name: '所有模式下都保留寄存器值'
                }
              ]
            },
            {
              name: '3☆',
              children: [
                {
                  name: '传输距离<5m'
                }
              ]
            }
          ]
        },
        {
          name: '电源',
          children: [
            {
              name: '4☆',
              children: [
                {
                  name: '可充式电源'
                }
              ]
            }
          ]
        },
      ]
    }
  ];
  for (let j = 0; j < data.length; ++j) {
    let level1 = data[j].children;
    for (let i = 0; i < level1.length; ++i) {
      let block = level1[i].children;
      let bookScore = [];
      let bookScoreId;
      for (let star = 0; star < block.length; ++star) {
        let style = (function (name) {
          switch (name) {
            case '5☆':
              bookScoreId = 0;
              return itemStyle.star5;
            case '4☆':
              bookScoreId = 1;
              return itemStyle.star4;
            case '3☆':
              bookScoreId = 2;
              return itemStyle.star3;
            case '2☆':
              bookScoreId = 3;
              return itemStyle.star2;
          }
        })(block[star].name);
        block[star].label = {
          color: style.color,
          downplay: {
            opacity: 0.5
          }
        };
        if (block[star].children) {
          style = {
            opacity: 1,
            color: style.color
          };
          block[star].children.forEach(function (book) {
            book.value = 1;
            book.itemStyle = style;
            book.label = {
              color: style.color
            };
            let value = 1;
            if (bookScoreId === 0 || bookScoreId === 3) {
              value = 5;
            }
            if (bookScore[bookScoreId]) {
              bookScore[bookScoreId].value += value;
            } else {
              bookScore[bookScoreId] = {
                color: colors[bookScoreId],
                value: value
              };
            }
          });
        }
      }
      level1[i].itemStyle = {
        color: data[j].itemStyle.color
      };
    }
  }
  var option = {
    // backgroundColor: bgColor,
    backgroundColor: 'rgba(1,15,75,.7)',
    color: colors,
    series: [
      {
        type: 'sunburst',
        center: ['50%', '48%'],
        data: data,
        sort: function (a, b) {
          if (a.depth === 1) {
            return b.getValue() - a.getValue();
          } else {
            return a.dataIndex - b.dataIndex;
          }
        },
        label: {
          rotate: 'radial',
          color: bgColor
        },
        itemStyle: {
          borderColor: bgColor,
          borderWidth: 2,
        },
        levels: [
          {},
          {
            r0: 0,
            r: 40,
            label: {
              rotate: 0
            }
          },
          {
            r0: 40,
            r: 105
          },
          {
            r0: 115,
            r: 140,
            itemStyle: {
              shadowBlur: 2,
              shadowColor: colors[2],
              color: 'transparent'
            },
            label: {
              rotate: 'tangential',
              fontSize: 10,
              color: colors[0]
            }
          },
          {
            r0: 140,
            r: 145,
            itemStyle: {
              shadowBlur: 80,
              shadowColor: colors[0]
            },
            label: {
              position: 'outside',
              textShadowBlur: 5,
              textShadowColor: '#333'
            },
            downplay: {
              label: {
                opacity: 0.5
              }
            }
          }
        ]
      }
    ]
  };
  
  //3.把配置项给对象
  myChart.setOption(option);
  //自适应大小
  window.addEventListener("resize", function() {
      myChart.resize();
  });

})();

//右下
(function(){
  //1.配置实例化对象
  var myChart = echarts.init(document.querySelector(".useryaer .chart"));
  //2.指定配置项和数据
  var option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      textStyle:{
        color:'#02a6b5'
      },
      data: ['腰包型', '箱型', '手杖型', '车型', '其他']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a"
          }
        }
      }
    ],
    series: [
      {
        name: '腰包型',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '箱型',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '手杖型',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '车型',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '其他',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  //3.把配置项给对象
  myChart.setOption(option);
  //自适应大小
  window.addEventListener("resize", function() {
      myChart.resize();
  });

})();


// (function(){
//   //1.配置实例化对象
//   var myChart = echarts.init(document.querySelector(".material .chart"));
//   //2.指定配置项和数据
  
//   //3.把配置项给对象
//   myChart.setOption(option);
//   //自适应大小
//   window.addEventListener("resize", function() {
//       myChart.resize();
//   });

// })();

