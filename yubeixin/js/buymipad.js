$(function(){
	var Buy = {
		category : $('.site-header .nav-category .site-category'),
		navCategory : $('.site-header .nav-category'),
		canSelect : $('.version').not('.stockout'),
		noClick : $('.version').not('.active'),
		next : $('.btn'),//下一步
		img : $('.step-title img'),//手机图片
		stpeTitle : $('.step-title b span'),//小米平板2
		storag : $('.version.active .memory'),//16G
		coloType : $('.version.active'),//香槟金
		shor : $('.next-info .shortage'),//库存2件
		price : $('.version.active .p-rice'),//999元
		init:function(){
			this.cateHover();
			this.selectHover();
			this.nextClick();
			
		},
		/*全部商品分类*/
		cateHover : function(){
			var _this = this;
			this.navCategory.hover(function(){
				_this.category.show();
			},function(){
				_this.category.hide();
			});
		},
		/*可选与不可选*/
		selectHover :function(){
			var flag = {stu:true};
			var _this = this;
			this.canSelect.click(function(){
				$(this).toggleClass('active').parent().siblings().find('.version').removeClass('active');
				$(this).removeClass('hover');
				_this.nextShow();
				flag.stu = false;
			});
			if(flag.stu){
				this.canSelect.hover(function(){
					$(this).addClass('hover');
				},function(){
					$(this).removeClass('hover');
				});
			}
		},
		nextShow:function(){
			if(this.canSelect.parent().has('.active').length == 2){
				this.next.addClass('active');
			}else{
				this.next.removeClass('active');
			}
		},
		/*点击下一步
			获取数据，存到cookie ,跳转到购物车页面
		*/
		nextClick:function(){
			var _this = this;
			var user = $.cookie('userinfo') || '{}';
			user = JSON.parse(user);
			this.next.click(function(){
				if(!user.isLogin){
					location.href='login.html';
					return;
				}
				if(_this.canSelect.parent().has('.active').length == 2){
					//console.log($('.next-info .shortage'));
					var info = {
						gid :$('.version.active .colo').data('id'),
						src : _this.img.attr('src'),//手机图片
						name : _this.stpeTitle.text(),//小米平板2
						color :$('.version.active .colo').text(),//香槟金
						memory : $('.version.active .memory').data('sto'),//16G
						shorta : $('.version.active .colo').data('stock'),//库存2件
						pri : $('.version.active .p-rice').text(),//999元
						count:$('.version.active .colo').data('amount')
					};
					var userCart = $.cookie('goodsInfo');
					userCart = userCart || '{}';
					userCart = JSON.parse(userCart);
					if(!userCart[info.gid]){
						userCart[info.gid] = {
							gid :info.gid,
							src : info.src,//手机图片
							name : info.name,//小米平板2
							color :info.color,//香槟金
							memory : info.memory,//16G
							shorta : info.shorta,//库存2件
							pri : info.pri,//999元
							count:info.count
						}
						//console.log(userCart[info.gid]);
					}else{
						//console.log(info.count);
						userCart[info.gid].count += parseInt(info.count);
					}
					//console.log(info.shorta);
					$.cookie('goodsInfo',JSON.stringify(userCart),{expires:7,path:'/yubeixin'});
					//console.log(JSON.stringify(userCart));
					location.href = 'cart.html';
				}
			});
		}
	};
	$('#footer').load('index.html #site-footer');
	$('#foot').load('index.html #site-info');
	Buy.init();
});
