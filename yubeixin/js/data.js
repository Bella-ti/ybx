$(function(){
	var Data = {
		//左边选项卡
		siteCategoryList : $('.site-category .site-category-list'),
		container:$('.container'),
		init:function(){
			this.getData1();
			this.getData2();
			this.rainbowListInfo();
			this.getData4();
			this.getData5();
			this.contentItem();
		},
		childrencol1 : $('.children-col-2').eq(1).eq(1),
		getData1:function(){
			/*可选购*/
			var categoryItem = [
				{
					src:'mi5bar80.jpg',
					type:'小米手机5'
				},
				{
					src:'maxbar80.jpg',
					type:'小米手机5'
				},
				{
					src:'hmnote4-300.jpg',
					type:'小米手机5'
				},
				{

					src:'note3.jpg',
					type:'小米手机5'
				},
				{
					src:'hm3s80x80.jpg',
					type:'小米手机5'
				},
				{
					src:'pro80.jpg',
					type:'小米手机5'
				},
				{
					src:'hongmi3.jpg',
					type:'小米手机5'
				},
				{
					src:'3X80.jpg',
					type:'小米手机5'
				},
				{
					src:'bijiben80.jpg',
					type:'小米手机5'
				},
				{
					src:'pad2.png',
					type:'小米手机5'
				}
			];
			var str1 = '';
			var arr = [];
			for(var i=0; i<categoryItem.length; i++){
				str1  += 	'<li class="star-goods">'
							+	'<a class="link" href="">'
							+		'<img class="thumb" src="img/'+categoryItem[i].src+'">'
							+		'<span class="text">'+categoryItem[i].type+'</span>'
							+	'</a>'
							+	'<a class="btn btn-line-primary btn-small btn-buy" href="#">选购</a>'
							+'</li>&';
			}
			arr = str1.split('&');
			arr = arr.splice(0,arr.length-1);	
			arr1 = arr.splice(0,6);
			arr2 = arr.splice(0,2);
			arr3 = arr.splice(0,2);
			$('.category-item .item-1').append(arr1);
			$('.category-item .item-2').append(arr2);
			$('.category-item .item-3').append(arr3);
			/*无选购*/
			var cateList = [
				{
					src:'heyue.jpg',
					type:'小米手机5'
				},
				{
					src:'compare.jpg',
					type:'小米手机5'
				},
				{
					src:'mimobile.jpg',
					type:'小米手机5'
				},
				{

					src:'usbzjqggg80.jpg',
					type:'小米手机5'
				},
				{
					src:'neidanbao80.jpg',
					type:'小米手机5'
				},
				{
					src:'4380side.jpg',
					type:'小米手机5'
				},
				{
					src:'mitv3s48.jpg',
					type:'小米手机5'
				},
				{
					src:'tv3-55.jpg',
					type:'小米手机5'
				},
				{
					src:'tv60.jpg',
					type:'小米手机5'
				},
				{
					src:'6580side.jpg',
					type:'小米手机5'
				},
				{
					src:'tv70.png',
					type:'小米手机5'
				},
				{
					src:'tvzj.jpg',
					type:'小米手机5'
				},
				{
					src:'hezizengqiangban80side.jpg',
					type:'小米手机5'
				},
				{
					src:'hezis.jpg',
					type:'小米手机5'
				},
				{
					src:'hezimini.jpg',
					type:'小米手机5'
				},
				{
					src:'diyinpao.jpg',
					type:'小米手机5'
				},
				{
					src:'shb.jpg',
					type:'小米手机5'
				},
				{
					src:'zuheyinxiang80side.jpg',
					type:'小米手机5'
				},
				{
					src:'dianshipeijian.jpg',
					type:'小米手机5'
				},
				{
					src:'jiqiren.jpg',
					type:'小米手机5'
				},
				{
					src:'vr8080.jpg',
					type:'小米手机5'
				},
				{
					src:'luyouqi-80.jpg',
					type:'小米手机5'
				},
				{
					src:'scooter.jpg',
					type:'小米手机5'
				},
				{
					src:'zxc80-80.jpg',
					type:'小米手机5'
				},
				{
					src:'shuihu80.jpg',
					type:'小米手机5'
				},
				{
					src:'dianfanbao-80.jpg',
					type:'小米手机5'
				},
				{
					src:'xiaobai80.jpg',
					type:'小米手机5'
				},
				{
					src:'jinghuaqilvxin80.jpg',
					type:'小米手机5'
				},
				{
					src:'jingshuiqiandlvxin-80.jpg',
					type:'小米手机5'
				},
				{
					src:'xueyaji-80.jpg',
					type:'小米手机5'
				},
				{
					src:'zhinengdeng-80.jpg',
					type:'小米手机5'
				},
				{
					src:'gushiji80.jpg',
					type:'小米手机5'
				},
				{
					src:'zhinengjiatingtaozhuang-80.jpg',
					type:'小米手机5'
				},
				{
					src:'shouhuan280.jpg',
					type:'小米手机5'
				},
				{
					src:'scale.jpg',
					type:'小米手机5'
				},
				{
					src:'shoubiao3-80.jpg',
					type:'小米手机5'
				},
				{
					src:'znyjdaohang.jpg',
					type:'小米手机5'
				},
				{
					src:'dianyuan.jpg',
					type:'小米手机5'
				},
				{
					src:'powerscript.jpg',
					type:'小米手机5'
				},
				{
					src:'yidongdianyuan.jpg',
					type:'小米手机5'
				},
				{
					src:'dianyuanfujian.jpg',
					type:'小米手机5'
				},
				{
					src:'charger80.jpg',
					type:'小米手机5'
				},
				{
					src:'chongdianqi-80.jpg',
					type:'小米手机5'
				},
				{
					src:'5Battery1.jpg',
					type:'小米手机5'
				},
				{
					src:'7Battery1.jpg',
					type:'小米手机5'
				}
			];
			var str2 = '';
			var arr = [];
			for(var i=0; i<cateList.length; i++){
				str2  += 	'<li>'
							+	'<a class="link" href="#">'
							+		'<img class="thumb" src="img/'+cateList[i].src+'"/>'
							+		'<span class="text">'+cateList[i].type+'</span>'
							+	'</a>'
							+'</li>&';
			}
			arr = str2.split('&');
			arr = arr.splice(0,arr.length-1);
			arr4 = arr.splice(0,3);
			arr5 = arr.splice(0,2);
			arr6 = arr.splice(0,6);
			arr7 = arr.splice(0,6);
			arr8 = arr.splice(0,2);
			arr9 = arr.splice(0,6);
			arr10 = arr.splice(0,6);
			arr11 = arr.splice(0,6);
			$('.category-item .item-2').append(arr4);
			$('.category-item .item-3').append(arr5);
			$('.category-item .item-4').append(arr6);
			$('.category-item .item-5').append(arr7);
			$('.category-item .item-6').append(arr8);
			$('.category-item .item-7').append(arr9);
			$('.category-item .item-8').append(arr10);
			$('.category-item .item-9').append(arr11);

			$('.category-item .item-10').append(arr10);
			$('.category-item .item-11').append(arr11);
			$('.category-item .item-12').append(arr6);
			$('.category-item .item-13').append(arr5);
			$('.category-item .item-14').append(arr6);
			$('.category-item .item-15').append(arr7);
			$('.category-item .item-16').append(arr8);
			$('.category-item .item-17').append(arr9);
			$('.category-item .item-18').append(arr10);
		},
		/*header 选项卡*/
		childrenList : $('.item-children .children-list'),
		childrenList1 : $('.item-children .children-list-1'),
		childrenList2 : $('.item-children .children-list-2'),
		childrenList3 : $('.item-children .children-list-3'),
		childrenList4 : $('.item-children .children-list-4'),
		childrenList5 : $('.item-children .children-list-5'),
		childrenList6 : $('.item-children .children-list-6'),
		childrenList7 : $('.item-children .children-list-7'),
		getData2 : function(){
			
			var Miui = [
						/*小米手机*/
						{
							src:'maxdingbu!160x110.jpg',
							type:'小米Max',
							price:'1299元起'
						},
						{
							src:'mi5!160x110.jpg',
							type:'小米手机5',
							price:'1799元起'
						},
						/*红米*/
						{
							src:'hongmipro-320!160x110.jpg',
							type:'红米Pro',
							price:'1499元起'
						},
						{
							src:'hongminote4!160x110.jpg',
							type:'红米Note 4',
							price:'899元起'
						},
						{
							src:'note3!160x110.jpg',
							type:'红米Note 3',
							price:'899元起'
						},
						{
							src:'hongmi3s!160x110.jpg',
							type:'红米手机3S',
							price:'699元起'
						},
						{
							src:'hongmi3!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						{
							src:'320-220!160x110.jpg',
							type:'红米手机3X',
							price:'799元起'
						},
						/*平板 笔记本*/
						{
							src:'mipad2-16!160x110.jpg',
							type:'红米Pro',
							price:'1499元起'
						},
						{
							src:'mipad2-64!160x110.jpg',
							type:'红米Note 4',
							price:'899元起'
						},
						{
							src:'mipad2-64-win!160x110.jpg',
							type:'红米Note 3',
							price:'899元起'
						},
						{
							src:'bijiben32012.5!160x110.jpg',
							type:'红米手机3S',
							price:'699元起'
						},
						{
							src:'bijiben320!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						/*电视*/
						{
							src:'mitv3s-43!160x110.jpg',
							type:'红米Pro',
							price:'1499元起'
						},
						{
							src:'mitv3s48!160x110.jpg',
							type:'红米Note 4',
							price:'899元起'
						},
						{
							src:'mitv355!160x110.jpg',
							type:'红米Note 3',
							price:'899元起'
						},
						{
							src:'mitv3-60!160x110.jpg',
							type:'红米手机3S',
							price:'699元起'
						},
						{
							src:'mitv3s-65!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						{
							src:'mitv70!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						/*盒子 影音*/
						{
							src:'hezimini.png',
							type:'红米Pro',
							price:'1499元起'
						},
						{
							src:'hezi3.png',
							type:'红米Note 4',
							price:'899元起'
						},
						{
							src:'hezi3s!160x110.jpg',
							type:'红米Note 3',
							price:'899元起'
						},
						{
							src:'zhuji!160x110.jpg',
							type:'红米手机3S',
							price:'699元起'
						},
						{
							src:'jinshuban!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						{
							src:'putonban!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						/*路由器*/
						{
							src:'miwifi!160x110.jpg',
							type:'红米Pro',
							price:'1499元起'
						},
						{
							src:'miwifi-3!160x110.jpg',
							type:'红米Note 4',
							price:'899元起'
						},
						{
							src:'miwifimini!160x110.jpg',
							type:'红米Note 3',
							price:'899元起'
						},
						{
							src:'luyouqi3c!160x110.jpg',
							type:'红米手机3S',
							price:'699元起'
						},
						{
							src:'miwifilite!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						{
							src:'wifiExtension!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						/*智能硬件*/
						{
							src:'scooter!160x110.jpg',
							type:'红米Pro',
							price:'1499元起'
						},
						{
							src:'water2!160x110.jpg',
							type:'红米Note 4',
							price:'899元起'
						},
						{
							src:'dianfanbao!160x110.jpg',
							type:'红米Note 3',
							price:'899元起'
						},
						{
							src:'air2!160x110.jpg',
							type:'红米手机3S',
							price:'699元起'
						},
						{
							src:'xiaobaishexiangji!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						},
						{
							src:'zhinengyingjian!160x110.jpg',
							type:'红米手机3',
							price:'699元起'
						}
						];
			var str = '';
			var arr = [];
			for(var i=0; i<Miui.length; i++){
					str  += '<li>'
							+	'<div class="figure figure-thumb">'
							+		'<a href="#">'
							+			'<img src="img/'+Miui[i].src+'" />'
							+		'</a>'
							+	'</div>'
							+	'<div class="title">'
							+		'<a href="#">'+Miui[i].type+'</a>'
							+	'</div>'
							+	'<p class="price">'+Miui[i].price+'</p>'
							+'</li>&';
			}
			arr = str.split('&');
			arr = arr.splice(0,arr.length-1);
			arr1 = arr.splice(0,2);/*小米手机*/
			arr2 = arr.splice(0,6);/*红米*/
			arr3 = arr.splice(0,5);/*平板 笔记本*/
			arr4 = arr.splice(0,6);/*电视*/
			arr5 = arr.splice(0,6);/*盒子 影音*/
			arr6 = arr.splice(0,6);/*路由器*/
			arr7 = arr.splice(0,6);/*智能硬件*/
			
			this.childrenList1.append(arr1);
			this.childrenList2.append(arr2);
			this.childrenList3.append(arr3);
			this.childrenList4.append(arr4);
			this.childrenList5.append(arr5);
			this.childrenList6.append(arr6);
			this.childrenList7.append(arr7);
		},
		/*小米明星单品*/
		rainbowList:$('.xm-carousel-wrapper .rainbow-list'),
		rainbowListInfo:function(){
			var rainbowInfo = [
			[
				{
					src:'ac9d56f1-65c6-4174-940b-b3c79aafe0a2.jpg',
					name:'小米Max 优惠200元',
					detail:'3GB内存＋64GB容量，玻璃版',
					price:'2099元'
				},
				{
					src:'0df5d106-ab01-4013-87de-a9793094245d.png',
					name:'小米手机5 高配版',
					detail:'128GB大容量，4850mAh大电池',
					price:'1799元'
				},
				{
					src:'f35e0d0a-afae-443c-a7e6-3a49c40e2df1.png',
					name:'红米Pro',
					detail:'双摄像头，十核旗舰手机',
					price:'1499元'
				},
				{
					src:'f35e0d0a-afae-443c-a7e6-3a49c40e2df1.png',
					name:'小米笔记本',
					detail:'独立显卡、超轻薄、金属机身',
					price:'3499元'
				},
				{
					src:'4c68c352-fbd3-452d-be90-7b47e4f6ce76.png',
					name:'小米平板2 16GB现货',
					detail:'轻薄全金属，海量内容',
					price:'999元'
				},
				{
					src:'74dd9736-f254-4964-a06a-24f0befb21ac.png',
					name:'小米电视3S 48英寸',
					detail:'原装液晶屏，金属机身',
					price:'1999元'
				},
				{
					src:'T146YgBKhv1RXrhCrK.jpg',
					name:'小米盒子3 增强版',
					detail:'高端 4K 网络机顶盒',
					price:'399元'
				},
				{
					src:'6ef55907-bbed-49be-a2bb-be0821b5f7b8.png',
					name:'小米手环 2',
					detail:'每天早10点开售',
					price:'149元'
				},
				{
					src:'0906bec7-68ad-41e9-9617-fb6550725a85.jpg',
					name:'米家 LED 智能台灯',
					detail:'无可视频闪，亮度色温无级调节',
					price:'169元'
				},
				{
					src:'T1d__jBQYT1RXrhCrK.jpg',
					name:'小米空气净化器2',
					detail:'10分钟，房间空气焕然一新',
					price:'699元'
				}
			],
			//为你推荐
			[
				{
					src:'T1HcAQBgDT1RXrhCrK.jpg',
					name:'小米Max 优惠200元',
					detail:'3GB内存＋64GB容量，玻璃版',
					price:'2099元'
				},
				{
					src:'T1LrdvBbAT1RXrhCrK.jpg',
					name:'小米手机5 高配版',
					detail:'128GB大容量，4850mAh大电池',
					price:'1799元'
				},
				{
					src:'T18EWQBjWT1RXrhCrK.jpg',
					name:'红米Pro',
					detail:'双摄像头，十核旗舰手机',
					price:'1499元'
				},
				{
					src:'T1leDjBsET1RXrhCrK.jpg',
					name:'小米笔记本',
					detail:'独立显卡、超轻薄、金属机身',
					price:'3499元'
				},
				{
					src:'T1_tEgBmVv1RXrhCrK.jpg',
					name:'小米平板2 16GB现货',
					detail:'轻薄全金属，海量内容',
					price:'999元'
				},
				{
					src:'pms_1473125484.8332236.jpg',
					name:'小米电视3S 48英寸',
					detail:'原装液晶屏，金属机身',
					price:'1999元'
				},
				{
					src:'pms_1472710764.55986027.jpg',
					name:'小米盒子3 增强版',
					detail:'高端 4K 网络机顶盒',
					price:'399元'
				},
				{
					src:'pms_1464071511.37197399.jpg',
					name:'小米手环 2',
					detail:'每天早10点开售',
					price:'149元'
				},
				{
					src:'T1CDbjBgAT1RXrhCrK.jpg',
					name:'米家 LED 智能台灯',
					detail:'无可视频闪，亮度色温无级调节',
					price:'169元'
				},
				{
					src:'T1Ay_gBKKv1RXrhCrK.jpg',
					name:'小米空气净化器2',
					detail:'10分钟，房间空气焕然一新',
					price:'699元'
				},
				{
					src:'T1F5K_BjVv1RXrhCrK.jpg',
					name:'小米Max 优惠200元',
					detail:'3GB内存＋64GB容量，玻璃版',
					price:'2099元'
				},
				{
					src:'T1HQA_BCd_1RXrhCrK.jpg',
					name:'小米手机5 高配版',
					detail:'128GB大容量，4850mAh大电池',
					price:'1799元'
				},
				{
					src:'pms_1472711253.2453066.jpg',
					name:'红米Pro',
					detail:'双摄像头，十核旗舰手机',
					price:'1499元'
				},
				{
					src:'T1MDK_B_YT1RXrhCrK.jpg',
					name:'小米笔记本',
					detail:'独立显卡、超轻薄、金属机身',
					price:'3499元'
				},
				{
					src:'T1JJ__BbYT1RXrhCrK.jpg',
					name:'小米平板2 16GB现货',
					detail:'轻薄全金属，海量内容',
					price:'999元'
				},
				{
					src:'T1izKTBvdv1RXrhCrK.jpg',
					name:'小米电视3S 48英寸',
					detail:'原装液晶屏，金属机身',
					price:'1999元'
				},
				{
					src:'T1LpWjB4bv1RXrhCrK.jpg',
					name:'小米盒子3 增强版',
					detail:'高端 4K 网络机顶盒',
					price:'399元'
				},
				{
					src:'T1bED_B__v1RXrhCrK.jpg',
					name:'小米手环 2',
					detail:'每天早10点开售',
					price:'149元'
				},
				{
					src:'pms_1473154033.83448967.jpg',
					name:'米家 LED 智能台灯',
					detail:'无可视频闪，亮度色温无级调节',
					price:'169元'
				},
				{
					src:'T1N5KjB_dT1RXrhCrK.jpg',
					name:'小米空气净化器2',
					detail:'10分钟，房间空气焕然一新',
					price:'699元'
				}
			]
			];
			var str = '';
			for(var i=0; i<rainbowInfo.length; i++){
				for(var j=0; j<rainbowInfo[i].length; j++){
					str  += 	'<li class="rainbow-item-'+(j+1)+'">'
								+	'<a class="thumb">'
								+		'<img alt="'+rainbowInfo[i][j].name+'" src="img/'+rainbowInfo[i][j].src+'" />'
								+	'</a>'
								+	'<h3 class="title"><a href="#">'+rainbowInfo[i][j].name+'</a></h3>'
								+	'<p class="desc">'+rainbowInfo[i][j].detail+'</p>'
								+	'<p class="price">'+rainbowInfo[i][j].price+'</p>'
								+'</li>&';
				}
				
			}
			arr = str.split('&');
			arr = arr.splice(0,arr.length-1);
			arr1 = arr.splice(0,10);
			this.rainbowList.eq(0).append(arr1);
			this.rainbowList.eq(1).append(arr)
			
			
		},
		brickList:$('.brick-list').eq(0),
		getData4:function(){
			var brickListInfo = [
								{
									src:'T1rQAgB7Av1RXrhCrK.jpg',
									title:'小米路由器3',
									desc:'四天线设计，更安全更稳定',
									num:'149',
									postfree:'免邮费'
								},
								{
									src:'2b69b930-a2fd-4d09-a46a-8690cb79f764.jpg',
									title:'电助力折叠自行车',
									desc:'力矩传感电助力，折叠便携设计',
									num:'2999',
									postfree:'新品'
								},
								{
									src:'0ecb87b1-9604-4f31-a4b4-29bd2c911680.jpg',
									title:'小米VR眼镜玩具版',
									desc:'观看新体验，期待总于意料之外',
									num:'49',
									postfree:'新品'
								},
								{
									src:'T1PXhgBbdT1RXrhCrK!220x220.jpg',
									title:'九号平衡车',
									desc:'年轻人的酷玩具，骑行遥控两种玩法',
									num:'1999',
									postfree:'新品'
								},
								{
									src:'pms_1464615180.86261317!220x220.jpg',
									title:'米兔智能故事机',
									desc:'宝宝又不好好吃饭，让米兔来哄宝宝吧',
									num:'199',
									postfree:'新品'
								},
								{
									src:'T1OVC_ByY_1RXrhCrK!220x220.jpg',
									title:'米家压力IH电饭煲',
									desc:'IH电磁环绕加热，让米粒在锅里跳舞',
									num:'999',
									postfree:'免邮费'
								},
								{
									src:'pms_1469583266.7193851!220x220.jpg',
									title:'小米笔记本Air 12.5英寸',
									desc:'更轻更薄，像杂志一样随身携带',
									num:'3499',
									postfree:'新品'
								},
								{
									src:'pms_1464071511.37197399!220x220.jpg',
									title:'小米笔记本Air 12.5英寸',
									desc:'无可视频闪，亮度色温无级调节',
									num:'169',
									postfree:'免邮费'
								}
							];
			var str = '';
			var i=0;
			while(i<8){
				str += '<li class="brick-item brick-item-m brick-item-m-2">'
						+	'<div class="figure figure-img">'
						+		'<a href="">'
						+			'<img src="img/'+brickListInfo[i].src+'">'
						+		'</a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+brickListInfo[i].title+'</a>'
						+	'</h3>'
						+	'<p class="desc">'+brickListInfo[i].desc+'</p>'
						+	'<p class="price">'
						+		'<span class="num">'+brickListInfo[i].num+'</span>元'
						+	'</p>'
						+	'<div class="flag flag-postfree">'+brickListInfo[i].postfree+'</div>'
						+'</li>';
						i++;
			}
			this.brickList.append(str);
		},
		brickItem : $('.tab-content'),
		
		getData5:function(){
			var brickItemInfo = [
				/*热门*/
				[
				{
					src:'T12HJvByEv1RXrhCrK.jpg',
					name:'  小米移动电源10000mAh  ',
					price:'79',
					com:'19.5万人评价',
					review:'美观小巧，便于携带，希望小米再接再厉！永远支持你！你...',
					from:' 来自于 888846438 的评价 '
				},
				{
					src:'T1ycK_BjYv1RXrhCrK.jpg',
					name:'  小米圈铁耳机  ',
					price:'99',
					com:'1.7万人评价',
					review:'没话说的，音质真的完美，很好看，我给82剩下的18我...',
					from:' 来自于 Miss童莉敏 的评价 '
				},
				{
					src:'T1eSZgBjVT1RXrhCrK.jpg',
					name:'  小米移动电源10000mAh 高配版  ',
					price:'149',
					com:'2.3万人评价',
					review:'非常棒的手感。越来越好了，小米加油！',
					from:' 来自于 journey099 的评价 '
				},
				{
					src:'T190DvB4dv1RXrhCrK.jpg',
					name:'  小米蓝牙耳机  ',
					price:'69',
					com:'9.1万人评价',
					review:'1.非常好用，戴起来很舒适2.音质不错，比某些大品牌...',
					from:' 来自于 什排地帅哥 的评价 '
				},
				{
					src:'pms_1463579883.27084326.jpg',
					name:'  小米插线板  ',
					price:'49',
					com:'25.2万人评价',
					review:'3个usb插口正好给手机和pad充电，隐藏式白色指示...',
					from:' 来自于 prinoac 的评价 '
				},
				{
					src:'T1F5K_BjVv1RXrhCrK.jpg',
					name:'  小米小钢炮蓝牙音箱2  ',
					price:'129',
					com:'1.3万人评价',
					review:'小米节礼券立减50，千值万值啊！物流很快，第二天就到...',
					from:' 来自于 潇逸云 的评价 '
				},
				{
					src:'T1MDK_B_YT1RXrhCrK.jpg',
					name:'  小米蓝牙音箱  ',
					price:'199元',
					com:'2万人评价',
					review:'199能有这效果有点惊喜',
					from:' 来自于 efunliu 的评价 '
				}
				],
				/*耳机音箱*/
				[
				{
					src:'pms_1467184989.74561304!220x220.jpg',
					name:'小米圈铁耳机 银色',
					price:'9',
					com:'1.6万人评价',
					review:'没话说的，音质真的完美，很好看，我给82剩下的18我...',
					from:' 来自于 Miss童莉敏 的评价 '
				},
				{
					src:'T1ycK_BjYv1RXrhCrK!220x220.jpg',
					name:'小米圈铁耳机',
					price:'99',
					com:'1.6万人评价',
					review:'没话说的，音质真的完美，很好看，我给82剩下的18我...',
					from:' 来自于 Miss童莉敏 的评价 '
				},
				{
					src:'T1SkV_BCd_1RXrhCrK!220x220.jpg',
					name:'小米胶囊耳机',
					price:'59',
					com:'1.3万人评价',
					review:'拿到手，感觉很炫！试了一下，音质挺好！挺喜欢！5星好评',
					from:' 来自于 程桂兴吖 的评价 '
				},
				{
					src:'T190DvB4dv1RXrhCrK!220x220.jpg',
					name:'小米蓝牙耳机',
					price:'69',
					com:'9万人评价',
					review:'1.非常好用，戴起来很舒适2.音质不错，比某些大品牌...',
					from:' 来自于 什排地帅哥 的评价 '
				},
				{
					src:'T1Tfd_BjAv1RXrhCrK!220x220.jpg',
					name:'小米小钢炮蓝牙音箱2',
					price:'129',
					com:'1.3万人评价',
					review:'很精致，小巧可爱，连接成功是女声说话提示。音质很纯很...',
					from:' 来自于 Cc大坏 的评价 '
				},
				{
					src:'T1LqYgBCWv1RXrhCrK!220x220.jpg',
					name:'小米随身蓝牙音箱',
					price:'69',
					com:'8474人评价',
					review:'超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小...',
					from:' 来自于 田密 的评价 '
				},
				{
					src:'T1yf__BjAT1RXrhCrK!220x220.jpg',
					name:'小米蓝牙音箱',
					price:'199',
					com:'1.9万人评价',
					review:'小东西有大能量，音质在这个价位真的是无敌了，很精美的...',
					from:' 来自于 语无伦次哈 的评价 '
				}
				],
				/*电源*/
				[
				{
					src:'T1AcE_Bghv1RXrhCrK.jpg',
					name:'移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'之前都不知道，还以为是18650电芯的。拿到手一看这...',
					from:' 来自于 ywtdzh 的评价 '
				},
				{
					src:'T12HJvByEv1RXrhCrK!220x220.jpg',
					name:'移动电源10000mAh',
					price:'79',
					com:'19.5万人评价',
					review:'这个小巧玲珑啊，比10400安的小了好多，感觉不错，...',
					from:' 来自于 LIN翼 的评价 '
				},
				{
					src:'T1eSZgBjVT1RXrhCrK!220x220.jpg',
					name:'移动电源10000mAh 高配版',
					price:'149',
					com:'2.2万人评价',
					review:'很薄，充电快，方便携带',
					from:' 来自于 CURGT丶FaKer 的评价 '
				},
				{
					src:'T1x8J_BgEv1RXrhCrK.jpg',
					name:'移动电源20000mAh',
					price:'149',
					com:'5万人评价',
					review:'一如既往的好评！支持小米！',
					from:' 来自于 小丹555 的评价 '
				},
				{
					src:'T1vSDQB4_T1RXrhCrK!220x220.jpg',
					name:'10000mAh小米移动电源保护套',
					price:'4.9',
					com:'2万人评价',
					review:'可好了，能有效的保护手机了，再也不用担心移动电源被磨...',
					from:' 来自于 682837881 的评价 '
				},
				{
					src:'T1jMbjB5Jv1RXrhCrK.jpg',
					name:'小米插线板（3孔位+USB）',
					price:'49',
					com:'25.1万人评价',
					review:'3个usb插口正好给手机和pad充电，隐藏式白色指示...',
					from:' 来自于 prinoac 的评价 '
				},
				{
					src:'T1vFEjBbWT1RXrhCrK!220x220.jpg',
					name:'小米USB充电器（4口）',
					price:'69',
					com:'7894人评价',
					review:'产品质量一如既往的好，小巧玲珑，方便携带，旅行必备',
					from:' 来自于 YY2TH 的评价 '
				}
				],
				/*电池存储卡*/
				[
				{
					src:'T1sRhTBsYT1RXrhCrK!220x220.jpg',
					name:'SanDisk 16GB存储卡（Class4）',
					price:'26.9',
					com:'7.9万人评价',
					review:'物美价廉，正品行货，发货迅速',
					from:' 来自于 sharph 的评价 '
				},
				{
					src:'T1ipAvB_ZT1RXrhCrK!220x220.jpg',
					name:'原装快充套装',
					price:'58',
					com:'6人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1xxVTBghv1RXrhCrK!220x220.jpg',
					name:'彩虹5号电池（10粒装）',
					price:'9.9',
					com:'7.2万人评价',
					review:'彩虹的电量，彩虹的心情，彩虹的每一天',
					from:' 来自于 醉爱你HYA 的评价 '
				},
				{
					src:'T178EjBjVT1RXrhCrK!220x220.jpg',
					name:'彩虹7号电池（10粒装）',
					price:'9.9',
					com:'4.2万人评价',
					review:'颜色亮丽，价格便宜，使用很方便好用。',
					from:' 来自于 谁会问 的评价 '
				},
				{
					src:'T1PGb_BKAv1RXrhCrK.jpg',
					name:'米兔手机U盘升级版 32GB',
					price:'79',
					com:'3万人评价',
					review:'超值正品，再也不会担心头那里时间久了坏掉，感觉升级版...',
					from:' 来自于 香草忘忧 的评价 '
				},
				{
					src:'T1gVCgBjDv1RXrhCrK.jpg',
					name:'紫5镍氢充电电池',
					price:'49',
					com:'3028人评价',
					review:'终于出了充电电池，外形时尚，喜欢',
					from:' 来自于 吴国立 的评价 '
				},
				{
					src:'T142A_BXEv1RXrhCrK!220x220.jpg',
					name:'小米车载充电器',
					price:'49',
					com:'3.1万人评价',
					review:'很好，个头小能量大，很满意',
					from:' 来自于 你再猜猜啊 的评价 '
				}
				],
				/*酷件 */
				/*热门*/
				[
				{
					src:'T1jsDgBXdv1RXrhCrK.jpg',
					name:'  小米手机5 智能翻盖保护套  ',
					price:'49',
					com:'1.9万人评价',
					review:'很不错，很好用。已推荐朋友使用。',
					from:' 来自于 舊時書生 的评价 '
				},
				{
					src:'T1t2K_B4L_1RXrhCrK.jpg',
					name:'  小米手机5 钢化玻璃贴膜(0.22mm)  ',
					price:'29',
					com:'3.4万人评价',
					review:'手感很好，是高清的不错',
					from:' 来自于 俄方热 的评价 '
				},
				{
					src:'T1jsbjBjKT1RXrhCrK.jpg',
					name:'  小米手机5 液态硅胶保护壳  ',
					price:'69',
					com:'5854人评价',
					review:'收到很惊喜，刚开始以为是有空洞的容易脏，打开发现完全...',
					from:' 来自于 那兔子 的评价 '
				},
				{
					src:'T1JgbjByhv1RXrhCrK.jpg',
					name:'  小米手机5 户外防摔保护壳  ',
					price:'39',
					com:'7136人评价',
					review:'套在手机上比较紧配，比较厚重，不过抗摔肯定很好',
					from:' 来自于 Mi_96569467 的评价 '
				},
				{
					src:'T1TDK_Bgdv1RXrhCrK.jpg',
					name:'  小米手机5 多彩半透保护壳  ',
					price:'29',
					com:'4844人评价',
					review:'手感很好，物超所值吧，恩',
					from:' 来自于 乱世风凌乱 的评价 '
				},
				{
					src:'T1QGx_BbWv1RXrhCrK.jpg',
					name:'  小米手机5 极薄防蓝光贴膜(0.14mm)  ',
					price:'49',
					com:'6851人评价',
					review:'超级棒的贴膜，手感一级棒！',
					from:' 来自于 萍踪浪影 的评价 '
				},
				{
					src:'T1_SDgB4KT1RXrhCrK.jpg',
					name:'  小米自拍杆  ',
					price:'49',
					com:'7.7万人评价',
					review:'自拍是一种病！拍起来真要命！蓝牙连接，比起插线的，简...',
					from:' 来自于 taurus1992 的评价 '
				}
				],
				/*保护套*/
				[
				{
					src:'T12AWgB5Vv1RXrhCrK!220x220.jpg',
					name:'小米手机5 智能翻盖保护套',
					price:'49',
					com:'1.8万人评价',
					review:'很好的。质量好。小米的品质。小米的心',
					from:' 来自于 爱小米BDS 的评价 '
				},
				{
					src:'T1XVWjBCYv1RXrhCrK!220x220.jpg',
					name:'小米Max 智能显示保护套',
					price:'59',
					com:'4740人评价',
					review:'官网买的放心，非常不错，比某宝手感好多了！',
					from:' 来自于 我欲望成风 的评价 '
				},
				{
					src:'pms_1469787847.44636521!220x220.jpg',
					name:'红米Pro 智能显示保护套',
					price:'29',
					com:'326人评价',
					review:'又是一款精品，喜欢，小米值得拥有！',
					from:' 来自于 174473315 的评价 '
				},
				{
					src:'T18sWvBTxv1RXrhCrK!220x220.jpg',
					name:'红米3高配版 炫彩翻盖保护套',
					price:'29',
					com:'5557人评价',
					review:'这个我感觉是我买的性价比最好的手机外套了',
					from:'来自于 煎饼 的评价'
				},
				{
					src:'T10Eb_BmAv1RXrhCrK!220x220.jpg',
					name:'红米Note3 炫彩翻页保护套',
					price:'29',
					com:'2.3万人评价',
					review:'大小合适，特别好，质量和颜色都非常棒！',
					from:'来自于 3276326381 的评价'
				},
				{
					src:'T1WLx_BgVv1RXrhCrK.jpg',
					name:'红米3标准版 炫彩翻盖保护套',
					price:'29',
					com:'7800人评价',
					review:'质量很好，老婆很喜欢',
					from:' 来自于 风中的云345 的评价 '
				},
				{
					src:'T11eEvBmYT1RXrhCrK!220x220.jpg',
					name:' 小米手机4 智能唤醒翻盖保护套',
					price:'15',
					com:'11.5万人评价',
					review:'贴好后，觉得效果不错，都习惯了它的智能唤醒，再去拿别...',
					from:' 来自于 471329631 的评价 '
				}
				],
				/*贴膜*/
				[
				{
					src:'T1cVLjBX_v1RXrhCrK.jpg',
					name:'小米手机5 极薄防蓝光贴膜',
					price:'49',
					com:'6851人评价',
					review:'没指纹，防光效果不错，赞',
					from:' 来自于 琳琳骄傲 的评价 '
				},
				{
					src:'T1y7JQBbCT1RXrhCrK!220x220.jpg',
					name:'小米Max 标准高透贴膜',
					price:'19',
					com:'7591人评价',
					review:'说是高透就是高透，贴上贴膜，带领领略高透滴全世界～～',
					from:' 来自于 148800310 的评价 '
				},
				{
					src:'T1SSJ_B4E_1RXrhCrK!220x220.jpg',
					name:'小米平板2 标准高透贴膜',
					price:'29',
					com:'1325人评价',
					review:'挺好用的，发货也快，清晰！',
					from:' 来自于 卖蘑菇的小和尚 的评价 '
				},
				{
					src:'T1qdEgBKKv1RXrhCrK.jpg',
					name:'红米Note3 钢化玻璃膜',
					price:'19',
					com:'3.7万人评价',
					review:'钢化膜表面很光滑，和手机屏幕玻璃一样，很好',
					from:' 来自于 Pioneer77 的评价 '
				},
				{
					src:'T1g7J_BsLv1RXrhCrK!220x220.jpg',
					name:'红米手机3 钢化玻璃膜',
					price:'9.9',
					com:'7833人评价',
					review:'很好，容易贴上，触感不错',
					from:' 来自于 247292055 的评价 '
				},
				{
					src:'T1t2K_B4L_1RXrhCrK!220x220.jpg',
					name:'小米手机5 钢化玻璃贴膜',
					price:'29',
					com:'3.3万人评价',
					review:'超薄，高透，手感好！很好！',
					from:' 来自于 梦中有你有我 的评价 '
				},
				{
					src:'pms_1469787992.44385373!220x220.jpg',
					name:'红米Pro 标准高透贴膜',
					price:'10',
					com:'693人评价',
					review:'实用，便宜，物有所值',
					from:' 来自于 456573665 的评价 '
				}
				],
				/*其他配件*/
				[
				{
					src:'T1xXxQBCVT1RXrhCrK!220x220.jpg',
					name:'小蚁蓝牙遥控器',
					price:'39',
					com:'2786人评价',
					review:'宝贝挺好的，开始联不上，把相机固件升级了才能联上，非...',
					from:' 来自于 老叶8 的评价 '
				},
				{
					src:'T1xXxQBCVT1RXrhCrK!220x220.jpg',
					name:'指环式防滑手机支架',
					price:'9.9',
					com:'8658人评价',
					review:'做工精细，美观，在小米官网购物放心。',
					from:' 来自于 麻辣机丝 的评价 '
				},
				{
					src:'T1WTEvBmKT1RXrhCrK!220x220.jpg',
					name:'小米蓝牙手柄',
					price:'99',
					com:'2.7万人评价',
					review:'手感超好，联上小米电视玩游戏超爽，就是电视端游戏有待...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T11oW_B4dv1RXrhCrK!220x220.jpg',
					name:'蓝牙语音体感遥控器',
					price:'99',
					com:'2501人评价',
					review:'语音识别很高，蓝牙遥控方便！',
					from:' 来自于 笛哥520 的评价 '
				},
				{
					src:'T1juCgBgxT1RXrhCrK!220x220.jpg',
					name:'手机USB Type-C数据线',
					price:'39',
					com:'1.4万人评价',
					review:'绝对正品，质量可靠，实用性高',
					from:' 来自于 chenbo1011 的评价 '
				},
				{
					src:'T13y_vBgJT1RXrhCrK!220x220.jpg',
					name:'小米千兆网线',
					price:'14.9',
					com:'3.1万人评价',
					review:'千兆线中算便宜的了，做工也精良，连接路由器与光猫的',
					from:' 来自于 al冲冠一怒 的评价 '
				},
				{
					src:'T1Zp__B5Ev1RXrhCrK!220x220.jpg',
					name:'ZMI无限拓展数据线',
					price:'29',
					com:'4955人评价',
					review:'很不错。做工也很精致。很方便',
					from:' 来自于 927667257 的评价 '
				}
				],
				/*周边*/
				/*热门*/
				[
				{
					src:'e66a939b-2645-4ddb-bfe9-c2543029e8bd.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'2e1475fd-6afc-4f3c-bca3-ce50c342642c.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'3d2ad1e5-6e04-45ae-aecb-c745a67f0d0f.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'329a5d3f-ad6f-47fc-981e-85e0bd634055.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'6ddc1df6-ce8e-4cb5-a26a-b5ef80f1adf7.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'pms_1468310472.00391359!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'5a28d943-ef5d-4920-a89a-7f1bce6c5b35.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				}
				],
				/*服装*/
				[
				{
					src:'T1i.YjBbWT1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'a2973973-b7f1-4431-988b-449c0d068419.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1ReJ_B_Kv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'357bebdd-6e77-4c43-a33c-b8287caace2e.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1GXYgBgJv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1MIC_BTLv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1m3CgBXJv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				}
				],
				/*米兔*/
				[
				{
					src:'pms_1464943812.60215816!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'pms_1464947945.39918897!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'pms_1463975728.16077005!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'pms_1463973922.4853847!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1dRZTB_xT1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1zVZjBmJv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1qvEgBKKv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				}
				],
				/*生活周边*/
				[
				{
					src:'T1yo_gBm_v1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1fADvByVv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1fADvByVv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1UmxTBQhv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'pms_1463971828.3961404!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T198bTBbAv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1eKdgB4xv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				}
				],
				/*箱包*/
				[
				{
					src:'T1RRCjBKJv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1TvJ_B_Kv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'pms_1466665347.53966019!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1G9Y_BmCv1RXrhCrK.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'6ddc1df6-ce8e-4cb5-a26a-b5ef80f1adf7.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1a3DvB7hv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				},
				{
					src:'T1FtKgBvZv1RXrhCrK!220x220.jpg',
					name:'小米移动电源5000mAh',
					price:'49',
					com:'9万人评价',
					review:'(⊙o⊙)…呃。我敢说被人抢了么。这都第三个了。第一...',
					from:'来自于 糖糖果果儿 的评价'
				}
				]
			];
			var str = '';
			var arr = [];
			var i=0;
			//console.log(brickItemInfo[i].length);
			for(var i=0; i<brickItemInfo.length; i++){
				for(var j=0; j<brickItemInfo[i].length; j++){
				str +=  '<li class="brick-item brick-item-m">'
						+	'<div class="figure figure-img">'
						+		'<a href="">'
						+			'<img src="img/'+brickItemInfo[i][j].src+'" />'
						+		'</a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+brickItemInfo[i][j].name+'</a>'
						+	'</h3>'
						+	'<p class="price">'
						+		'<span class="num">'+brickItemInfo[i][j].price+'</span>元'
						+	'</p>'
						+	'<p class="rank">'+brickItemInfo[i][j].com+'</p>'
						+	'<div class="review-wrapper">'
						+		'<a href="">'
						+			'<span class="review">'+brickItemInfo[i][j].review+'</span>'
						+			'<span class="author">'
						+				brickItemInfo[i][j].from
						+			'</span>'
						+		'</a>'
						+	'</div>'
						+'</li>&';
						//console.log(i);
				}
			}
			var brickItems = [
			/*热门*/
			[
				{
					src:'T1_lKvBKZT1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'热门'
				}
			],
				/*耳机音箱*/
			[
				{
					src:'T1_lKvBKZT1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'耳机音箱'
				}
			],
				/*电源*/
			[
				{
					src:'T1_lKvBKZT1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'电源'
				}
			],
				/*电池存储卡*/
			[
				{
					src:'T1_lKvBKZT1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'电池存储卡'
				}
			],
			/*酷件*/
			/*热门*/
			[
				{
					src:'T1_7KgB4Jv1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'热门'
				}
			],
				/*保护膜*/
			[
				{
					src:'T1_7KgB4Jv1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'保护膜'
				}
			],
				/*贴膜*/
			[
				{
					src:'T1_7KgB4Jv1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'贴膜'
				}
			],
				/*其他配件*/
			[
				{
					src:'T1_7KgB4Jv1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'其他配件'
				}
			],
			/*周边*/
				/*热门*/
			[
				{
					src:'T1yo_gBm_v1RXrhCrK.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'热门'
				}
			],
			/*服装*/
			[
				{
					src:'T1L_D_B7Jv1RXrhCrK.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'服装'
				}
			],
			/*米兔*/
			[
				{
					src:'T1MBhvBm_T1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'米兔'
				}
			],
			/*生活周边*/
			[
				{
					src:'T15AxgByEv1RXrhCrK.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'生活周边'
				}
			],
			/*箱包*/
			[
				{
					src:'T1nmhTBTKT1RXrhCrK!220x220.jpg',
					name:'红米2/红米2A能量套装',
					price:'69'
				},
				{
					type:'箱包'
				}
			]
			];
			var str1 = '';
			for(var i=0; i<brickItems.length; i++){
				str1 += '<li class="brick-item brick-item-s">'
						+	'<div class="figure figure-img">'
						+		'<a href="">'
						+			'<img src="img/'+brickItems[i][0].src+'" />'
						+		'</a>'
						+	'</div>'
						+	'<h3 class="title">'
						+		'<a href="">'+brickItems[i][0].name+'</a>'
						+	'</h3>'
						+	'<p class="price">'
						+		'<span class="num">'+brickItems[i][0].price+'</span>元'
						+	'</p>'
						+'</li>'
						+'<li class="brick-item brick-item-s">'
						+'<div class="figure figure-more">'
						+	'<a class="kk" href="">'
						+		'<i class="iconfont">&#xe628;</i>'
						+	'</a>'
						+	'<a class="more" href="">'
						+		'浏览更多'
						+		'<span>'+brickItems[i][1].type+'</span>'
						+	'</a>'
						+'</div>'
						+'</li>$';
			}
			arr = str.split('&');
			arr = arr.splice(0,arr.length-1);
			for(var i=0; i<this.brickItem.length; i++){
				arr1 = arr.splice(0,7);
				//console.log(this.brickItem.eq(i));
				this.brickItem.eq(i).append(arr1);	
			}
			arrs = str1.split('$');
			arrs = arrs.splice(0,arrs.length-1);
			
			for(var i=0; i<this.brickItem.length; i++){
				this.brickItem.eq(i).append(arrs[i]);
			}
			
		},
		//内容
		conItemList : $('.content-list .item-list'),
		contentItem:function(){
			var content = [
				//图书
				[
				{
					name:'哈利·波特与魔法石',
					desc:'哈利波特来了！',
					price:'',
					src:'8e3584b6-3169-41c6-9356-939ec79aac2b.jpg'
				},
				{
					name:'特价专区',
					desc:'精选畅销好书，特价促销，天天更新，天天特价！',
					price:'限时优惠',
					src:'T1dlVgBbbT1RXrhCrK.jpg'
				},
				{
					name:'杂志专区',
					desc:'纸媒杂志＋互联网杂志，你想看的这都有！',
					price:'同步新刊上线',
					src:'T1R3WgBjKT1RXrhCrK.jpg'
				},
				{
					name:'杂志专区',
					desc:'海量好书，享受精品阅读时光<br/>漂亮的中文排版，千万读者选择！',
					price:'前往多看阅读',
					src:'more-duokan.jpg'
				}
				],
				//MIUI
				[
				{
					name:'哈利·波特与魔法石',
					desc:'哈利波特来了！',
					price:'',
					src:'94178cd7-83e6-4ff3-8091-33263c27992e.jpg'
				},
				{
					name:'特价专区',
					desc:'精选畅销好书，特价促销，天天更新，天天特价！',
					price:'限时优惠',
					src:'7d47dde1-60fb-4ff3-8fa1-364cfc452457.jpg'
				},
				{
					name:'杂志专区',
					desc:'纸媒杂志＋互联网杂志，你想看的这都有！',
					price:'同步新刊上线',
					src:'18cbea84-27b4-485d-93ec-eba74449b9d6.jpg'
				},
				{
					name:'杂志专区',
					desc:'海量好书，享受精品阅读时光<br/>漂亮的中文排版，千万读者选择！',
					price:'前往多看阅读',
					src:'more-miui.jpg'
				}
				],
				//游戏
				[
				{
					name:'哈利·波特与魔法石',
					desc:'哈利波特来了！',
					price:'',
					src:'6032cb36-587f-4366-89ef-aefed2546552.jpg'
				},
				{
					name:'特价专区',
					desc:'精选畅销好书，特价促销，天天更新，天天特价！',
					price:'限时优惠',
					src:'T1czW_BXCv1R4cSCrK.png'
				},
				{
					name:'杂志专区',
					desc:'纸媒杂志＋互联网杂志，你想看的这都有！',
					price:'同步新刊上线',
					src:'010948ae-bd48-49c6-af12-4ec8c4a0c829.png'
				},
				{
					name:'杂志专区',
					desc:'海量好书，享受精品阅读时光<br/>漂亮的中文排版，千万读者选择！',
					price:'前往多看阅读',
					src:'more-game.jpg'
				}
				],
				//应用
				[
				{
					name:'哈利·波特与魔法石',
					desc:'哈利波特来了！',
					price:'',
					src:'T1YyJgBCYv1R4cSCrK.png'
				},
				{
					name:'特价专区',
					desc:'精选畅销好书，特价促销，天天更新，天天特价！',
					price:'限时优惠',
					src:'T1eaxgB4Ev1R4cSCrK.png'
				},
				{
					name:'杂志专区',
					desc:'纸媒杂志＋互联网杂志，你想看的这都有！',
					price:'同步新刊上线',
					src:'T15VZvB5Kv1R4cSCrK.png'
				},
				{
					name:'杂志专区',
					desc:'海量好书，享受精品阅读时光<br/>漂亮的中文排版，千万读者选择！',
					price:'前往多看阅读',
					src:'more-app.jpg'
				}
				]
			];
			str= '';
			for(var i=0; i<content.length; i++){
				for(var j=0; j<content[i].length; j++){
					str += '<li>'
							+	'<h4 class="name">'
							+		'<a href="">'+content[i][j].name+'</a>'
							+	'</h4>'
							+	'<p class="desc">'
							+		'<a href="">'+content[i][j].desc+'</a>'
							+	'</p>'
							+	'<p class="price">'
							+		'<a href="">'+content[i][j].price+'</a>'
							+	'</p>'
							+	'<div class="figure figure-img">'
							+		'<a href="">'
							+			'<img src="img/'+content[i][j].src+'" />'
							+		'</a>'
							+	'</div>'
							+'</li>&';
				}
			}
			arr = str.split('&');
			arr = arr.splice(0,arr.length-1);
			this.conItemList.each(function(k){
				arr1 = arr.splice(0,4);
				$(this).append(arr1);
			});
		}
	};
	Data.init();
});
