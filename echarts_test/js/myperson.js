//左图1 CPU Power 显示
(function(){
    
    //1.配置实例化对象
    var myChart = echarts.init(document.querySelector(".emessage .chart"));
    // var chartDom = document.getElementById('equipment_message');
    // var myChart = echarts.init(chartDom);
    // var option;
    //2.指定配置项和数据

    const gaugeData = [
        
        {
          value: 40,
          name: 'CPU',
          title: {
            offsetCenter: ['0%', '-30%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-5%']
          }
        },
        {
          value: 60,
          name: 'Power',
          title: {
            offsetCenter: ['0%', '25%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '55%']
          }
        },
      ];

    var option = {
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
              }
            },
            axisLine: {//轴线宽度
              lineStyle: {
                width: 10
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: gaugeData,
            title: {
              fontSize: 14
            },
            detail: {
              width: 30,
              height: 10,
              fontSize: 14,
              color: 'auto',
              borderColor: 'auto',
              borderRadius: 20,
              borderWidth: 1,
              formatter: '{value}%'
            }
          }
        ]
      };

      setInterval(function () {
        //在这里更改数据据
        gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        // gaugeData[2].value = +(Math.random() * 100).toFixed(2);
        myChart.setOption({
          series: [
            {
              data: gaugeData,
              pointer: {
                show: false
              }
            }
          ]
        });
      }, 5000);
    
    //3.把配置项给对象
    myChart.setOption(option);
    //自适应大小
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();

//左图2 使用时间段
(function(){

 /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var user_name = Array(); 
  var day_p = Array();
  var hours_p = Array();

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/person/person_h.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    user_name.push(result[i].user_name);
                    day_p.push(result[i].day_p);
                    hours_p.push(result[i].hours_p);
                      // console.log(result[i].name);
                      // console.log(result[i].age);
                  }
              }
          },
          error: function(errmsg) {
              alert("Ajax获取服务器数据出错了！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return user_name, day_p,hours_p;
  }
  // 执行异步请求
  getusers();

  //1.配置对象
  var myChart = echarts.init(document.querySelector(".time .chart"));
  //2.指定配置项和数据
  var option = {
    title: {
      text: '使用时间',
      subtext: '每天/小时'
    },
    axisTick: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // prettier-ignore
      data: day_p
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      },
      axisLabel: {
        formatter: '{value}'
      },
      axisPointer: {
        snap: true
      }
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: 'green'
        },
        {
          gt: 6,
          lte: 10,
          color: 'red'
        },
        {
          gt: 10,
          lte: 22,
          color: 'green'
        },
        {
          gt: 22,
          lte: 26,
          color: 'red'
        },
        {
          gt: 26,
          color: 'green'
        }
      ]
    },
    series: [
      {
        name: 'hours',
        type: 'line',
        smooth: true,
        //每天的数据
        data: hours_p,
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)'
          },
          data: [
            [
              {
                // name: '早高峰',
                xAxis: '7'
              },
              {
                xAxis: '11'
              }
            ],
            [
              {
                // name: '晚高峰',
                xAxis: '23'
              },
              {
                xAxis: '27'
              }
            ]
          ]
        }
      }
    ]
  };
  //3.将配置给对象
  myChart.setOption(option);
   //自适应大小
  // window.addEventListener("resize", function() {
  //     myChart.resize();
  // });
})();

//左图3 出行路程 显示
(function(){

   /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var user_d = Array(); 
  var month_d = Array();
  var shang = Array();
  var zhong = Array(); 
  var xia = Array();
  var total_d = Array();

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/person/person_d.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    user_d.push(result[i].user_d);
                    month_d.push(result[i].month_d);
                    shang.push(result[i].shang);
                    zhong.push(result[i].zhong);
                    xia.push(result[i].xia);
                    total_d.push(result[i].total_d);
                  }
              }
          },
          error: function(errmsg) {
              alert("路程查询错误！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return user_d,month_d,shang, zhong,xia,total_d;
  }
  // 执行异步请求
  getusers();

  //1.配置对象
  var myChart = echarts.init(document.querySelector(".lucheng .chart"));
  //2.指定配置项和数据
  var option = {
    title: {
      text: '每月总里程数',
      subtext: '可分为上中下旬'
    },
    xAxis: {
      axisTick: {
        show: false
      },
      data: ['一月', '二月', '三月','四月', '五月', '六月',
              '七月', '八月', '九月','十月', '十一月', '十二月']
    },
    yAxis: {
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    dataGroupId: '',
    animationDurationUpdate: 500,
    series: {
      type: 'bar',
      id: 'sales',
      data: [
        {
          value: total_d[0],//该value值 改为当月总路程
          groupId: '一月'
        },
        {
          value: total_d[1],
          groupId: '二月'
        },
        {
          value: total_d[2],
          groupId: '三月'
        },
        {
          value: total_d[3],
          groupId: '四月'
        },
        {
          value: total_d[4],
          groupId: '五月'
        },
        {
          value: total_d[5],
          groupId: '六月'
        },
        {
          value: total_d[6],
          groupId: '七月'
        },
        {
          value: total_d[7],
          groupId: '八月'
        },
        {
          value: total_d[8],
          groupId: '九月'
        },
        {
          value: total_d[9],
          groupId: '十月'
        },
        {
          value: total_d[10],
          groupId: '十一月'
        },
        {
          value: total_d[11],
          groupId: '十二月'
        }
      ],
      universalTransition: {
        enabled: true,
        divideShape: 'clone'
      }
    }
  };
  //每月上中下旬分别
  const drilldownData = [
    {
      //可以试试将datagroupId 换成一个变量 也能将上中下旬的值换为变量
      dataGroupId: '一月',
      data: [
        ['上旬', shang[0]],
        ['中旬', zhong[0]],
        ['下旬', xia[0]]
      ]
    },
    {
      dataGroupId: '二月',
      data: [
        ['上旬', shang[1]],
        ['中旬', zhong[1]],
        ['下旬', xia[1]]
      ]
    },
    {
      //可以试试将datagroupId 换成一个变量 也能将上中下旬的值换为变量
      dataGroupId: '三月',
      data: [
        ['上旬', shang[2]],
        ['中旬', zhong[2]],
        ['下旬', xia[2]]
      ]
    },
    {
      dataGroupId: '四月',
      data: [
        ['上旬', shang[3]],
        ['中旬', zhong[3]],
        ['下旬', xia[3]]
      ]
    },
    {
      //可以试试将datagroupId 换成一个变量 也能将上中下旬的值换为变量
      dataGroupId: '五月',
      data: [
        ['上旬', shang[4]],
        ['中旬', zhong[4]],
        ['下旬', xia[4]]
      ]
    },
    {
      dataGroupId: '六月',
      data: [
        ['上旬', shang[5]],
        ['中旬', zhong[5]],
        ['下旬', xia[5]]
      ]
    },
    {
      //可以试试将datagroupId 换成一个变量 也能将上中下旬的值换为变量
      dataGroupId: '七月',
      data: [
        ['上旬', shang[6]],
        ['中旬', zhong[6]],
        ['下旬', xia[6]]
      ]
    },
    {
      dataGroupId: '八月',
      data: [
        ['上旬', shang[7]],
        ['中旬', zhong[7]],
        ['下旬', xia[7]]
      ]
    },
    {
      //可以试试将datagroupId 换成一个变量 也能将上中下旬的值换为变量
      dataGroupId: '九月',
      data: [
        ['上旬', shang[8]],
        ['中旬', zhong[8]],
        ['下旬', xia[8]]
      ]
    },
    {
      dataGroupId: '十月',
      data: [
        ['上旬', shang[9]],
        ['中旬', zhong[9]],
        ['下旬', xia[9]]
      ]
    },
    {
      //可以试试将datagroupId 换成一个变量 也能将上中下旬的值换为变量
      dataGroupId: '十一月',
      data: [
        ['上旬', shang[10]],
        ['中旬', zhong[10]],
        ['下旬', xia[10]]
      ]
    },
    {
      dataGroupId: '十二月',
      data: [
        ['上旬', shang[11]],
        ['中旬', zhong[11]],
        ['下旬', xia[11]]
      ]
    },
    
  ];
  myChart.on('click', function (event) {
    if (event.data) {
      var subData = drilldownData.find(function (data) {
        return data.dataGroupId === event.data.groupId;
      });
      if (!subData) {
        return;
      }
      myChart.setOption({
        xAxis: {
          data: subData.data.map(function (item) {
            return item[0];
          })
        },
        series: {
          type: 'bar',
          id: 'sales',
          dataGroupId: subData.dataGroupId,
          data: subData.data.map(function (item) {
            return item[1];
          }),
          universalTransition: {
            enabled: true,
            divideShape: 'clone'
          }
        },
        graphic: [
          {
            type: 'text',
            right: 10,
            top: 10,
            style: {
              text: '返回',
              fill:'rgba(255,255,255,.7)',
              fontSize: 15
            },
            onclick: function () {
              myChart.setOption(option);
            }
          }
        ]
      });
    }
  });
  //3.将配置给对象
  myChart.setOption(option);
   //自适应大小
  // window.addEventListener("resize", function() {
  //     myChart.resize();
  // });

})();

//中间圆环
(function(){
  //1.配置实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  //2.指定配置项和数据
  let list = [
    {percentage: 3.2258, name: "身体监测", value: 1},
    {percentage: 0, name: "新型产品体验", value: 2},
    {percentage: 9.6774, name: "硬件设备维修", value: 3},
    {percentage: 38.7097, name: "上门服务", value: 12},
    {percentage: 3.2258, name: "更新设备", value: 1},
    {percentage: 0, name: "行为信息分析", value: 2},
    {percentage: 3.2258, name: "救助服务", value: 1},
    {percentage: 0, name: "丢失找回", value: 5},
    {percentage: 9.6774, name: "系统维修", value: 3},
    {percentage: 32.2581, name: "辅助信息推荐", value: 10},
] 
var nameArray = list.map(item=>{
    return item.name + '\t\t\t' + item.value + '个' + '\t\t\t' + item.percentage + '%'
})
var img = '../../img/zhsq/radian.png'
var color=['#2ca1ff','#0adbfa','#febe13','#65e5dd','#7b2cff','#fd5151','#f071ff', '#85f67a','#0baefd','#fdcd0b','#0bfdab','#ff5353','#ff72cb','#8488ff',]
var data = [];
for (var i = 0; i < list.length; i++) {
    data.push({
        value: list[i].value,
        name: list[i].name + '\t\t\t' + list[i].value + '个' + '\t\t\t' + list[i].percentage + '%',
        itemStyle: {
            normal: {
                borderWidth: 2,
                shadowBlur: 5,
                borderRadius:5,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 1,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    });
}
option = {
    //backgroundColor:"#061740",
    color : color,
    tooltip: {
        show: false
    },
    title: {//标题  签约项目分类
        text: '签约服务项目',
        left: '18%',
        top: 'center',
        textStyle: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: "0.35rem",
        }
    },
    legend: [{
        icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        data:nameArray,
        left: 'right',
        top: 'center',
        align: 'left',
        itemGap: 5,
        textStyle: {
            color: 'rgba(36, 173, 254, 1)',
            fontSize: "0.25rem",
        },
        //图例标记的图形高度
        itemHeight: 5,
        //图例标记的图形宽度
        itemWidth: 5,
    },
    ],
    toolbox: {
        show: false
    },
    series: [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['100%', '120%'],
        width:"40%",
        height:"40%",
        hoverAnimation: false,
        center: ['70%', '50%'],
        top:"center",
        itemStyle: {
            normal:{
                label: {
                    show:false
                }
            }
        },
        data: data
    }]
};

  //3.把配置项给对象
  myChart.setOption(option);
  //自适应大小
  window.addEventListener("resize", function() {
      myChart.resize();
  });
})();

