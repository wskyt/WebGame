/*  function openCount(id){
// sync
//	$.getJSON("http://ostest.jd-app.com/count.php?callback=?", {gid: id, type: 1}, function(data){
//		$.each(data,function(idx,item){  
//	$('#tb1').append("<tr><td>已有"+item.totalcount+"人玩过并说好！</td><td> 当前在线："+item.online+"人</td><tr>");  
//	}) 
//	});

  $.ajax({  
     	type : "get",
  		async:true, 	  
        url:"http://182.92.226.152/fso_newmanager/open/testStatistics.do",  
        dataType:'jsonp',  
        data:'gid='+id+'&type=1',  
        jsonp:'callback',  
        success:function(data) {  
//			$.each(data,function(idx,item){  
//			$('#tb1').append("<tr><td>已有"+item.totalcount+"人玩过并说好！</td><td> 你觉得呢 :)</td><tr>");  
//			})
        },  
        timeout:3000
    }); 
}*/
//tj
function openCount(id){
}
//openCount(spid);
clickCount(spid);
function clickCount(id){
	$.getJSON("http://182.92.226.152/fso_newmanager/open/gameStatistics.do?callback=?", {id: id, type: 2}, function(data){});

}
function shareCount(id){
	$.getJSON("http://182.92.226.152/fso_newmanager/open/gameStatistics.do?callback=?", {id: id, type: 3}, function(data){});
}

function scoreCount(id,s){
	$.getJSON("http://182.92.226.152/fso_newmanager/open/gameStatistics.do?callback=?", {id: id, s:s, type: 4}, function(data){});
}

//////////////wx start///////////////////
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {WeixinJSBridge.call('hideOptionMenu');});

//////////////load///////////////////
function showQ(){
$("#zhao").hide();
}

////avalon common,must have xx-xx-xx.js////////////////////
var fen = 0;
function tap(elemvm, select, cb) {
    var a = false;
    for (var i = 0; i < select.length; i++) {
        a = a || select[i].active;
    };
    if (!a) {
        elemvm.active = true;
        setTimeout(function () {
            cb && cb()
        }, 500)
    }
}
function tarShare(score){
$('#tips').show();
mebtnopenurl = "http://"+basedns+"/test/"+spid+"/result.html?s="+score;
WeixinJSBridge.call("showOptionMenu");
return false;
}
function tarHref(type){
if(type==1){
var urls =  "http://mp.weixin.qq.com/s?__biz=MzAwNjEyMDc4Mw==&mid=202466018&idx=1&sn=9b81be0c227b1c36172f004146b275e2#rd";
}else{
var urls =  "http://"+basedns+"/test/list/";
}
location.href = urls;
return false;
}

////////////////////
/* 20141116 wl注释  计算 后面 分享 url var ID = getQueryString("sid") || Date.now() + "" + Math.floor(Math.random() * 1000);
*/
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2])); return null;
}

///tongji/////////////////////////////////////////////////////

////////////////bdtj//////////////////////////////////
var _hmt = _hmt || [];
var _czc = _czc || [];

function clickad(ev){
	_hmt.push(['_trackEvent', 'adwo', 'adclick', 'adbanner'+spid]);
	_czc.push(['_trackEvent', 'adwo', 'adclick', 'adbanner'+spid]);
	return false;
}

/*20141115 王林注释  百度 站长之家统计
 * ////baidu
function tongji(){


var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fe790b64cf9b706fab95d6dc6fa5838fe' type='text/javascript'%3E%3C/script%3E"));

///cnzz
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1253546100'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1253546100' type='text/javascript'%3E%3C/script%3E"));

}
*/
var test = new adwojs({
	eid:'spn', //节点id
	aid: '8c08600d53bc44f58c343424f4ba2e2b', //android安卓PID
	pid: '39d9a5b89ddb4ea391afe94de20a1301', //iOS PID
	bt: false,
	af:true, //是否自动适合ipad平板广告，默认值为true。
	width: 320, //广告图片宽度(除320外，还有720宽度，用于ipad中显示)
	height:50  //广告图片高度(除50外，还有110高度，用于ipad中显示)
	});
	test.send();
 //关闭按钮
function closeADFunc() {
document.getElementById('hideADbtn').style.display='none';
document.getElementById('spn').style.display='none';
}

