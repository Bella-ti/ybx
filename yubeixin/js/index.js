$(function(){
	
	var Xiaomi = {
		cartMenu : $('.cart-menu'),
		cartMini : $('.cart-mini'),
		topbarCart : $('.topbar-cart'),
		navCategoryNo : $('.nav-category-no'),
		navItem : $('.nav-item'),
		selectCart:$('.nav-item .item-children .children-list'),
		headerNavMenu : $('.header-nav-menu'),
		categoryItem : $('.category-item'),
		hotSearchWords : $('.search-hot-words a'),
		searchText : $('.search-text'),
		resultList : $('.result-list'),
		searchBtn : $('.search-btn'),
		keyWordList : $('.keyword-list'),
		user : $('.topbar-info a:first'),
		timer1 : null,
		init:function(){
			this.topbarCartHover();
			this.navItemHover();
			this.searchTextInput();
			this.categoryItemHover();
			this.autoPlay();
			this.uiWrapperHover();
			this.uiNextClick();
			this.uiPrevClick();
			this.circlesClick();
			
			this.startAutoPlay();
			this.controlPrevClick();
			this.controlNextClick();
			this.controlHover();
			
			
			this.controlPrevClick1();
			this.controlNextClick1();
			
			this.brickItemHover();
			this.brickNavHover();
			
			this.userLogin();
			//this.keywordList();
			
		},
		/*购物车*/
		topbarCartHover:function(){
			var _this = this;
			this.topbarCart.hover(function(){
				clearInterval(_this.timer1);
				_this.topbarCart.addClass('hover');
				_this.cartMenu.slideDown();
			},function(){
				_this.timer1 = setTimeout(function(){
					_this.cartMenu.slideUp(200);
					_this.topbarCart.removeClass('hover');
				},500);
				
			});
		},
		/*导航*/
		/*克隆节点*/
		newNode:function(obj){
			var itemChildren = obj.find('.item-children');
			var cloneElem = itemChildren.clone();
			this.headerNavMenu.append(cloneElem);
		},
		/*选项卡变换*/
		navItemHover:function(){
			var _this = this;
			_this.navCategoryNoHover();
			for(var i=0; i<_this.navItem.length-2; i++){
				this.navItem.not('.nav-category').eq(i).hover(function(){
					_this.headerNavMenu.empty();
					_this.newNode($(this));
					_this.headerNavMenu.slideDown();
				},function(){});
			}
			
		},
		timer3:null,
		/*选项卡盒子显示*/
		navCategoryNoHover:function(){
			var _this = this;
			this.navCategoryNo.hover(function(){
				clearInterval(_this.timer3);
				_this.headerNavMenu.show();
			},function(){
				_this.timer3 = setTimeout(function(){
					 _this.headerNavMenu.slideUp();
				},200);
			});
		},
		/*search-text 获取焦点*/
		searchTextInput:function(){
			var searchInfo = [
				['小米手机5',11],
				['空气净化器2',1],
				['活塞耳机',4],
				['小米路由器',8],
				['移动电源',21],
				['运动相机',3],
				['小蚁摄像机',2],
				['小米体重秤',1],
				['小米插线板',13],
				['配件优惠套装',32]
			];
			var _this = this;
			var str = '';
			for(var i=0; i<searchInfo.length; i++){
					str  += 	'<li data-key="'+searchInfo[i][0]+'">'
							+		'<a href="">'+searchInfo[i][0]
							+			'<span class="result">约有'+searchInfo[i][1]+'件</span>'
							+		'</a>'
							+	'</li>';
				
			}
			this.resultList.append(str);
			this.searchText.on('focus',function(){
				_this.searchText.css('border-color','#ff6700');
				_this.searchBtn.css('border-color','#ff6700');
				_this.hotSearchWords.fadeOut(200);
				_this.keyWordList.show();
			});
			this.searchText.on('blur',function(){
				_this.searchText.css('border-color','#e0e0e0');
				_this.searchBtn.css('border-color','#e0e0e0');
				_this.hotSearchWords.fadeIn();
				_this.keyWordList.hide();
			});
		},
		/*左边选项卡*/
		categoryList:$('.site-category-list .category-item'),
		cateListItem:$('.site-category-list .category-item .children'),
		categoryItemHover:function(){
			for(var i=0; i<this.categoryList.length;i++){
				this.categoryList.eq(i).hover(function(){
				$(this).find('.children').show();
			},function(){
				$(this).find('.children').hide();
			});
			}
			
		},
		/*淡入淡出轮播*/
		now : 0,
		next : 0,
		imgArr : $('.xm-slider .slide img'),
		uiWrapper : $('.ui-wrapper'),
		uiPrev : $('.ui-direction .ui-prev'),
		uiNext : $('.ui-direction .ui-next'),
		circles : $('.ui-circle .ui-circle-link'),
		timer : null,
		/*更换图片*/
		switchImg:function(){
			this.imgArr.eq(this.now).animate({
				'opacity': 0
			},500);
			this.imgArr.eq(this.next).animate({
				'opacity': 1
			},500);
			this.circles.eq(this.now).removeClass('active');
			this.circles.eq(this.next).addClass('active');
			this.now = this.next;
		},
		/*自动播放*/
		autoPlay:function(){
			var _this = this;
			this.timer = setInterval(function(){
				_this.next++;
				_this.next %= _this.imgArr.length;
				_this.switchImg();
			},2000);
		},
		/*鼠标移入移出*/
		uiWrapperHover:function(){
			var _this = this;
			this.uiWrapper.hover(function(){
				clearInterval(_this.timer);
			},function(){
				_this.autoPlay();
			});
		},
		/*点击下一张*/
		uiNextClick:function(){
			var _this = this;
			this.uiNext.click(function(){
				_this.next++;
				_this.next %= _this.imgArr.length;
				_this.switchImg();
			});
		},
		/*点击上一张*/
		uiPrevClick:function(){
			var _this = this;
			this.uiPrev.click(function(){
				_this.next--;
				if(_this.next <= -1){
					_this.next = _this.imgArr.length - 1;
				}
				_this.switchImg();
			});
		},
		/*点击小圆圈*/
		circlesClick:function(){
			var _this = this;
			this.circles.each(function(k,v){
				$(v).click(function(){
					_this.next = k;
					_this.switchImg();
				});
			});
		},
		rainbowList:$('.xm-carousel-wrapper .rainbow-list'),
		//小米明星产品
		timer2: null,
		xmControls :$('.xm-controls'),
		controlPrev : $('.more  .control-prev'),
		controlNext : $('.more  .control-next'),
		moveLeft:function(){
			var _this = this;
			this.rainbowList.eq(0).animate({
				'margin-left':'-1226px'
			},400,function(){
				_this.controlNext.eq(0).addClass('control-disabled');
				_this.controlPrev.eq(0).removeClass('control-disabled');
			});
		},
		moveRight:function(){
			var _this = this;
			this.rainbowList.eq(0).animate({
				'marginLeft':0
			},400,function(){
				_this.controlPrev.eq(0).addClass('control-disabled');
				_this.controlNext.eq(0).removeClass('control-disabled');
			});
		},
		swithStartGoods:function(){
			var _this = this;
			marginLeft = parseInt( _this.rainbowList.eq(0).css('marginLeft') );
			if(marginLeft == 0){
				_this.moveLeft();
			}else if(marginLeft ==-1226){
				_this.moveRight();
			}
		},
		startAutoPlay:function(){
			var _this = this;
			this.timer2 = setInterval(function(){
				_this.swithStartGoods();
			},6000);
		},
		controlHover:function(){
			var _this = this;
			this.xmControls.hover(function(){
				clearInterval(_this.timer2);
			},function(){
				setTimeout(function(){
					_this.swithStartGoods();
				},6000);
			});
		},
		controlPrevClick:function(){
			var _this = this;
			this.controlPrev.eq(0).click(function(){
				marginLeft = parseInt( _this.rainbowList.eq(0).css('marginLeft') );
				if(marginLeft != 0){
					_this.moveRight();
				}
			});
		},
		controlNextClick:function(){
			var _this = this;
			this.controlNext.eq(0).click(function(){
				marginLeft = parseInt( _this.rainbowList.eq(0).css('marginLeft') );
				if(marginLeft == 0){
					_this.moveLeft();
				}
			});
		},
		/*page-main 选项卡*/
		brickItem:$('.brick-item'),
		brickItemHover:function(){
			var _this = this;
			for(var i=0; i<this.brickItem.length; i++){
				this.brickItem.eq(i).hover(function(){
					$(this).find('.review-wrapper').animate({
						height:76,
						opacity:1
					},500);
				},function(){
					$(this).find('.review-wrapper').animate({
						height:0,
						opacity:0
					},0);
				});
			}
		},
		brickNav:$('.J_brickNav .J_brickTabSwitch li'),
		tabContent:$('.brick-list.tab-content'),
		brickNavHover:function(){
			var _this = this;
			this.brickNav.each(function(k){
				$(this).hover(function(){
					$(this).addClass('active').siblings().removeClass('active');
				_this.tabContent.eq(k).addClass('active').siblings().removeClass('active');
				});
				
			});
		},
		/*为你推荐*/
		index:0,
		controlPrevClick1:function(){
			var _this = this;
			this.controlPrev.eq(1).click(function(){
				_this.index++;
				if(_this.index < 0){
					_this.index = 0;
				}
				if(_this.index >= 4){
					_this.controlPrev.eq(1).addClass('control-disabled');
					_this.controlNext.eq(1).removeClass('control-disabled');
					return;
				}
				_this.rainbowList.eq(1).animate({
					'marginLeft':'-1240'*_this.index
				},400);
			});
		},
		controlNextClick1:function(){
			var _this = this;
			this.controlNext.eq(1).click(function(){
				_this.index--;
				if(_this.index > 4){
					_this.index = 3;
					console.log(_this.index);
				}
				if(_this.index < 0){
					_this.controlPrev.eq(1).removeClass('control-disabled');
					_this.controlNext.eq(1).addClass('control-disabled');
					return;
				}else{
					_this.rainbowList.animate({
						'marginLeft':'-1240'*_this.index
					},400);
				}
			});
		},
		//用户登录，显示用户名
		userLogin:function(){
			var userinfo =  $.cookie('userinfo') || '{}' ;
			if(userinfo != 'undefined'){
				userinfo = JSON.parse(userinfo);
				this.user.html(userinfo.phone);
			}
		},
		
	};
	Xiaomi.init();
	/*左右滑动构造器*/
	function SlideBanner(obj){
		this.banner = obj;
		this.imgWrapper = obj.find('.item-list');
		this.circleItem =  obj.find('.pager');
		this.imgs =  obj.find('.item-list li');
		this.index = 0;
		this.imgWidth = this.imgs.eq(0).width();
		this.imgsWidth = this.imgWidth*this.imgs.length;
		this.control = obj.find('.control');
		this.controlPre =  obj.find('.control-prev');
		this.controlNext = obj.find('.control-next');
	}
	SlideBanner.prototype = {
		constructor: SlideBanner.prototype.constructor,
		__proto__: SlideBanner.prototype.__proto__,
		init: function(){
			this.leftBtnClick();
			this.rightBtnClick();
			this.circleClick();
			this.objHover();
		},
		leftBtnClick:function(){
			var _this = this;
			this.controlPre.click(function(){
				_this.index--;
				if(_this.index <= 0){
					_this.index = 0	;
				}
				_this.imgAnimate();
			});
		},
		rightBtnClick:function(){
			var _this = this;
			this.controlNext.click(function(){
				_this.index++;
				if(_this.index >= _this.imgs.length){
					_this.index = _this.imgs.length-2;
					return;
				}
				_this.imgAnimate();
			});
		},
		circleClick:function(){
			var _this = this;
			this.circleItem.each(function(k){
				_this.circleItem.eq(k).click(function(){
					_this.index = k;
					_this.imgAnimate();
				});
			});
		},
		objHover:function(){
			var _this = this;
			this.banner.hover(function(){
				_this.control.animate({
					opacity:1
				},500);
			},function(){
				_this.control.animate({
					opacity:0
				},200);
			});
		},
		imgAnimate: function(){
			var _this = this;
			this.imgWrapper.animate({
				marginLeft:-this.imgWidth*this.index
			},500,function(){
				_this.circleItem.eq(_this.index).addClass('pager-active').siblings().removeClass('pager-active');
			});	
		}
	}
	var banner1 = new SlideBanner($('#item1'));
	banner1.init();
	var banner2 = new SlideBanner($('#item2'));
	banner2.init();
	var banner3 = new SlideBanner($('#item3'));
	banner3.init();
	var banner4= new SlideBanner($('#item4'));
	banner4.init();
	
	//go-top
	var  Gotop = {
			top: $('.go-top'),
			a:0,
			timer:null,
			init:function(){
				this.scroll();
				this.topClick();
			},
			scroll:function(){
				var that = this;
				$(window).scroll(function(){
					that.a = $(document).scrollTop();//获取滚动条高度
					if(that.a > 500){
						that.top.fadeIn(500);
					}
					if(that.a <= 300){
						that.top.fadeOut(500);
					}
				});
			},
			
			topClick:function(){
				var that = this;
				that.top.click(function(){
					that.a = $(document).scrollTop();
					clearInterval(that.timer);
					that.timer =setInterval(function(){
						that.a -= 30;
						$(document).scrollTop(that.a);
						if (that.a<=0){
							clearInterval(that.timer);	
							that.top.fadeOut(500);	 
						}
					},13);
				});
			}
		}
		Gotop.init();
});
