// JavaScript Document
/* 百度地图start */
  var map = new BMap.Map("container"); // 创建地图实例
  var point = new BMap.Point(116.404, 39.915); // 创建点坐标
  map.enableScrollWheelZoom(); //启动鼠标中键控制地图缩放  
  map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
  map.enableContinuousZoom(); // 开启连续缩放效果
  map.enableInertialDragging(); // 开启惯性拖拽效果
  map.addControl(new BMap.NavigationControl()); // 添加控件
  map.addControl(new BMap.ScaleControl());
  map.addControl(new BMap.OverviewMapControl());
  map.addControl(new BMap.MapTypeControl());
  //获得经纬度
  var map = new BMap.Map("container");//在指定的容器内创建地图实例
  map.setDefaultCursor("crosshair");//设置地图默认的鼠标指针样式
  map.enableScrollWheelZoom();//启用滚轮放大缩小，默认禁用。
  map.centerAndZoom(new BMap.Point(116.124878, 24.309178), 13);
  map.addControl(new BMap.NavigationControl());
  map.addEventListener("click", function(e) {//地图单击事件
   document.getElementById("lonlat").value = e.point.lng + ", "
     + e.point.lat;
   document.getElementById("fd_mapx").value = e.point.lng;
   document.getElementById("fd_mapy").value = e.point.lat;
  });
  function iploac(result) {//根据IP设置地图中心
   var cityName = result.name;
   map.setCenter(cityName);
  }
  var myCity = new BMap.LocalCity();
  myCity.get(iploac);

  function sear(result) {//地图搜索
   var local = new BMap.LocalSearch(map, {
    renderOptions : {
     map : map
    }
   });
   local.search(result);
  }

  //产生地图标记
  map.addEventListener("click", function(e) {
   point = new BMap.Point(e.point.lng, e.point.lat);
   var marker = new BMap.Marker(point);
   map.addOverlay(marker);
   document.getElementById("txbMarker").value = e.point.lng + ","
     + e.point.lat;
  });

  var marker; //声明一个空标记
  //以下是点击事件   
  map.addEventListener("click", function(e) {

   checkMaker();

   point = new BMap.Point(e.point.lng, e.point.lat);//捕捉点击的坐标值
   marker = new BMap.Marker(point); //给标记赋新坐标值
   map.addOverlay(marker); //添加新标记
  });

  function checkMaker() {

   if (marker != null)

    map.removeOverlay(marker); //如果marker已经存在，删除标记
  };
  /* 百度地图end */