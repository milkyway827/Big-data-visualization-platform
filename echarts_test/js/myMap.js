(function(){

    /**
       * 通过ajax+php对mysql数据取值 
       */
    
      // 初始化数组，盛装从数据库中获取到的数据
      var province = Array(); 
      var number_of_province = Array();
      // var new_tourists = Array();
    
      //调用ajax来实现异步的加载数据
      function getusers() {
          $.ajax({
              // type: "post",
              type: "post",
              async: false,//异步请求
              url: "http://localhost:3000/php/index/index_map.php",
              data: {},  //发送给数据库的数据
              dataType: "json",//json 类型
              success: function(result){
                  // alert("成功！");
                  if(result){
                      for(var i = 0 ; i < result.length; i++){
                        province.push(result[i].province);
                        number_of_province.push(result[i].number_of_province);
                        // new_tourists.push(result[i].new_tourists);
                      }
                  }
              },
              error: function(errmsg) {
                  alert("Ajax获取服务器数据出错了！"+ errmsg);
                  // console.log(result);//日志打印具体错误信息
              }
          });
      return province, number_of_province;
      }
      // 执行异步请求
      getusers();
        
    
      //1.配置实例化对象
      var myChart = echarts.init(document.querySelector(".map .chart"));
      //2.指定配置项和数据
      var geoCoordMap = {
        "北京": [116.46, 39.92],
        "四川": [104.06, 30.67],
        "浙江": [120.19, 30.26],
        "山东": [117, 36.65],
        "福建": [119.3, 26.08],
        "上海": [121.48, 31.22],
        "重庆": [106.54, 29.59],
        "江西": [115.89, 28.68],
        "广东": [113.23, 23.16],
        "山西": [112.53, 37.87],
        "黑龙江": [126.63, 45.75],
        "陕西": [108.95, 34.27],
        "辽宁": [123.38, 41.8],
        "海南": [110.35, 20.02],
        "湖南": [113, 28.21],
        "宁夏": [106.27, 38.47],
        "河北": [114.48, 38.03],
        "云南": [102.73, 25.04],
        "湖北": [114.31, 30.52],
        "内蒙古": [111.65, 40.82],
        "天津": [117.2, 39.13],
        "贵州": [106.71, 26.57],
        "甘肃": [103.73, 36.03],
        "江苏": [118.78, 32.04],
        "吉林": [125.35, 43.88],
        "河南": [113.65, 34.76],
        "青海": [101.74, 36.56],
        "安徽": [117.27, 31.86],
        "广西": [108.33, 22.84],
        "西藏": [91.11, 29.97],
        "新疆": [87.68, 43.77]
    };
    
    
    //数据部分
    var data = [
        {name:"北京",value:number_of_province[0]},
        {name:"四川",value:number_of_province[1]},
        {name:"浙江",value:number_of_province[2]},
        {name:"山东",value:number_of_province[3]},
        {name:"福建",value:number_of_province[4]},
        {name:"上海",value:number_of_province[5]},
        {name:"重庆",value:number_of_province[6]},
        {name:"云南",value:number_of_province[7]},
        {name:"江西",value:number_of_province[8]},
        {name:"山西",value:number_of_province[9]},
        {name:"黑龙江",value:number_of_province[10]},
        {name:"陕西",value:number_of_province[11]},
        {name:"辽宁",value:number_of_province[12]},
        {name:"海南",value:number_of_province[13]},
        {name:"湖南",value:number_of_province[14]},
        {name:"宁夏",value:number_of_province[15]},
        {name:"河北",value:number_of_province[16]},
        {name:"湖北",value:number_of_province[17]},
        {name:"内蒙古",value:number_of_province[18]},
        {name:"天津",value:number_of_province[19]},
        {name:"贵州",value:number_of_province[20]},
        {name:"甘肃",value:number_of_province[21]},
        {name:"江苏",value:number_of_province[22]},
        {name:"吉林",value:number_of_province[23]},
        {name:"河南",value:number_of_province[24]},
        {name:"青海",value:number_of_province[25]},
        {name:"广西",value:number_of_province[26]},
        {name:"安徽",value:number_of_province[27]},
        {name:"新疆",value:number_of_province[28]},
        {name:"西藏",value:number_of_province[30]}
    ];
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    var option = {
            //backgroundColor:'#0B2744',
            title: {
                text: '产品投放区域格局',
                left: 'center',
                top:50,
                textStyle:{
                    color:'#fff'
                }
              },
            opcity:0.2,
            tooltip: {
                trigger: 'item',
                // position: 'unset',
                backgroundColor: 'rgba(0,0,0,0)',
                formatter: function(params) {
                    var tip = '';
                    if (params.componentSubType === 'effectScatter') {
                        tip = `<div style="background:#000259;height:28px;line-height:28px;padding: 0 9px;fontSize:18px">
                                ${params.name}:${params.value[2]}人
                            </div>`;
                        return tip;
                    } else {
                        if(params.componentSubType === 'map'){if(params.value){
                        tip = `<div style="display:flex;background:none;position:relative;top:-50px;left:-20px">
                                <div style="height:44px;width:1px;background:#00FFF6">1</div>
                                <div style="background:#000259;height:28px;line-height:28px;padding: 0 9px;fontSize:18px">
                                ${params.name}:${params.value}人</div>
                            </div>`
                        }}
                    }
                    return tip;
                }
            },
            geo: 
                {
                    type: 'map',
                    map: 'china',
                    zlevel: -5,
                    layoutCenter: ['50%', '50%'],
                   // layoutSize: '90%',
                    roam: false,
                    silent: true,
                    itemStyle: {
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 3,
                            shadowColor: '#ffffff',
                            // shadowColor:'red',
                            shadowColor: '#00F6FF',
                            // shadowColor:'red',
                            shadowBlur: 15,
                        }
                    }
                },
            series: [
                {
                    type: 'map',
                    map: 'china',
                    zlevel: 5,
                    geoIndex: 1,
                    data: data,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: true, // 存在legend时显示
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: false,
                    itemStyle: {
                        
                        normal: {
                            borderColor: 'rgba(111, 253, 255, 1)',
                            borderWidth: 0.5,
                            // areaColor: 'rgba(29,85,139,.6)'
                            areaColor: {
                                    type: 'linear-gradient',
                                    x: 0,
                                    y: 600,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'RGBA(37,108,190,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'RGBA(15,169,195,1)' // 50% 处的颜色
                                    }],
                                    global: true // 缺省为 false
                                },
                        },
                        emphasis: {
                            areaColor: {
                                    type: 'linear-gradient',
                                    x: 0,
                                    y: 600,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'RGBA(37,108,190,1)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'RGBA(15,169,195,1)' // 50% 处的颜色
                                    }],
                                    global: true // 缺省为 false
                                },
                        }
                    },
                }, 
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    geoIndex: 0,
                    symbol: 'circle',
                    symbolSize: 6,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke',
                        scale: 10
                    },
                    hoverAnimation: true,
                    label: {
                        show: false,
                        formatter: name => {
                            return name.data[2];
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: 14,
                        distance: 10
                    },
                    itemStyle: {
                        color: 'rgba(0, 255, 246, 1)',
                    },
                    zlevel: 12,
                    data: convertData(data)
                }, 
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    geoIndex: 0,
                    silent: true,
                    symbol: 'circle',
                    symbolSize: 4,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke',
                        scale: 6
                    },
                    hoverAnimation: true,
                    label: {
                        formatter: '',
                        position: 'right',
                        color: '#fff',
                        fontSize: 14,
                        distance: 10,
                        show: !0,
                    },
                    itemStyle: {
                        color: 'rgba(255, 255, 255, 0.8)',
                    },
                    zlevel: 6,
                    data: convertData(data)
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