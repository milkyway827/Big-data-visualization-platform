/**
 * 防止变量污染，都采取立即执行函数
 * 变量均为局部变量
 * 
 * 格式:
 * (function(){
 * 
 * })();
 */

// 柱状图1模块√
(function() {

  /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var types = Array(); 
  var p_2019 = Array();
  var p_2020 = Array();

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/index/index_product.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    types.push(result[i].produts_type);
                    p_2019.push(result[i].particular_year2019);
                    p_2020.push(result[i].particular_year2020);
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
  return types, p_2019,p_2020;
  }
  // 执行异步请求
  getusers();


  /**
   * echarts引用，且将ajax取到数据展示
   */

  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    //修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        // data: [
        //   "导盲杖一型",
        //   "导盲杖二型",
        //   "导盲杖三型",
        //   "导盲杖四型",
        //   "导盲杖五型",
        //   "导盲杖六型",
        //   "导盲杖七型"
        // ],
        data: types,//换成数据库数据
        axisTick: {
          alignWithLabel: true
        },
        //修改刻度标签，相关样式
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        //不显示x周坐标的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        //y周分隔线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    //
    series: [
      {
        name: "售卖份数",
        type: "bar",
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    // { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    // { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    { year: "2019", data: p_2019 },
    { year: "2020", data: p_2020 }
  ];

  $(".bar h2 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();


// 折线图定制√
(function() {

  /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var month = Array(); 
  var new_user = Array();
  var new_tourists = Array();

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/index/index_personnel_change.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    month.push(result[i].month);
                    new_user.push(result[i].new_user);
                    new_tourists.push(result[i].new_tourists);
                  }
              }
          },
          error: function(errmsg) {
              alert("Ajax获取服务器数据出错了！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return month, new_user,new_tourists;
  }
  // 执行异步请求
  getusers();

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      new_user,
      new_tourists
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: month,
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
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
    series: [
      {
        name: "新增用户",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "新增游客",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图定制√
(function() {

  /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var age_range = Array(); 
  var number_of_people = Array();
  // var new_tourists = Array();

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/index/index_age_distribution.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    age_range.push(result[i].age_range);
                    number_of_people.push(result[i].number_of_people);
                    // new_tourists.push(result[i].new_tourists);
                  }
              }
          },
          error: function(errmsg) {
              alert("Ajax获取服务器数据出错了！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return age_range, number_of_people;
  }
  // 执行异步请求
  getusers();


  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function(p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: age_range,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: number_of_people[0], name: age_range[0] },
          { value: number_of_people[1], name: age_range[1] },
          { value: number_of_people[2], name: age_range[2] },
          { value: number_of_people[3], name: age_range[3] },
          { value: number_of_people[4], name: age_range[4] }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 使用率柱状图模块
(function() {

/**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var products_type = Array(); //类型
  var use_times = Array();//使用次数
  // var total_times = Array();
  var rate_of_utilization = Array();//比率

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/index/index_frequency.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    products_type.push(result[i].products_type);
                    use_times.push(result[i].use_times);
                    rate_of_utilization.push(result[i].rate_of_utilization);
                  }
              }
          },
          error: function(errmsg) {
              alert("Ajax获取服务器数据出错了！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return products_type,use_times, rate_of_utilization;
  }
  // 执行异步请求
  getusers();

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  /**
   * 获取mysql中处理好的数据 放入data，titlename，valdata中
   */
  var data = rate_of_utilization;
  //
  var titlename = products_type;
  var valdata = use_times;
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 折线图 出行量
(function() {

  /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var per_day = Array(); //类型
  var max_distance = Array();//使用次数
  // var total_times = Array();
  var min_distance = Array();//比率

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/index/index_distance.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    per_day.push(result[i].per_day);
                    max_distance.push(result[i].max_distance);
                    min_distance.push(result[i].min_distance);
                  }
              }
          },
          error: function(errmsg) {
              alert("Ajax获取服务器数据出错了！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return per_day,max_distance, min_distance;
  }
  // 执行异步请求
  getusers();


  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data:per_day
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "最低量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data:min_distance
      },
      {
        name: "最高量",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: max_distance
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 地区分布统计模块
(function() {

  /**
   * 通过ajax+php对mysql数据取值 
   */

  // 初始化数组，盛装从数据库中获取到的数据
  var address_top = Array(); //前列地区
  var number_of_address = Array();//地区人数

  //调用ajax来实现异步的加载数据
  function getusers() {
      $.ajax({
          // type: "post",
          type: "post",
          async: false,//异步请求
          url: "http://localhost:3000/php/index/index_top8_address.php",
          data: {},  //发送给数据库的数据
          dataType: "json",//json 类型
          success: function(result){
              // alert("成功！");
              if(result){
                  for(var i = 0 ; i < result.length; i++){
                    address_top.push(result[i].address_top);
                    number_of_address.push(result[i].number_of_address);
                  }
              }
          },
          error: function(errmsg) {
              alert("Ajax获取服务器数据出错了！"+ errmsg);
              // console.log(result);//日志打印具体错误信息
          }
      });
  return address_top,number_of_address;
  }
  // 执行异步请求
  getusers();


  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    // title:'"产品投放区域"',
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10,
          color: "rgba(255,255,255,.5)"
        },
        data: [
          { value: number_of_address[0], name: address_top[0]},
          { value: number_of_address[1], name: address_top[1]},
          { value: number_of_address[2], name: address_top[2]},
          { value: number_of_address[3], name: address_top[3]},
          { value: number_of_address[4], name: address_top[4]},
          { value: number_of_address[5], name: address_top[5]},
          { value: number_of_address[6], name: address_top[6]},
          { value: number_of_address[7], name: address_top[7]}
        ],
        
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
