$(function(){
	var cartHandler = {
		init:function(){
			this.handleData();
			this.deleteGood();
			this.increaseClick();
			//this.refresh();
			this.decreaseClick();
			this.handleInput();
			this.selectGood();
			this.deleteMore();
			this.selectAll();
			this.totalPrice();
			//this.cartEmpty();
		},
		/*读取cookie*/
		readCart: function(){
			this.cart = $.cookie('goodsInfo') || {};
			//console.log($.cookie('goodsInfo'));
			this.cart = JSON.parse(this.cart);
		},
		setCart: function(){
			$.cookie('goodsInfo',JSON.stringify(this.cart),{expires:7,path:'/yubeixin'});
		},
		handleData:function(){
			this.readCart();
			var cartStr = '';
			/*
				color:"香槟金"
				memory:"16G"
				name:"小米平板2"
				pri:"999元"
				shorta:"库存2件"
				src:"img/0df5d106-ab01-4013-87de-a9793094245d.png" 
				count:数量
			*/
			//console.log(this.cart);
			for(var key in this.cart){
				var obj = this.cart[key];
				//console.log(obj);
				cartStr += '<div class="item-box" data-id='+obj.gid+'>'
							+	'<div class="item-table J_cartGoods" >'
							+		'<div class="item-row clearfix" >'
							+			'<div class="col col-check">'
							+				'<i class="iconfont icon-checkbox J_itemCheckbox">√</i>'
							+			'</div>'
							+			'<div class="col col-img">'
							+				'<a href="">'
							+					'<img src="'+obj.src+'">'
							+				'</a>'
							+			'</div>'
							+			'<div class="col col-name">'
							+				'<h3 class="name">'
							+					'<a href="javascript:;"> '+obj.name + obj.color + obj.memory+'</a>'
							+				'</h3>'
							+				'<p class="desc">'
							+					'<span>适配机型：</span> '+obj.name+' <br/>'
							+					'<span class="stock">库存<span>'+obj.shorta+'</span>件</span>'
							+				'</p>'
							+			'</div>'
							+			'<div class="col col-price">'+obj.pri+'</div>'
							+			'<div class="col col-num">'
							+				'<div class="change-goods-num clearfix J_changeGoodsNum">'
							+					'<a href="javascript:;" class="arrow-a J_minus">-</a>'
							+					'<input class="goods-num J_goodsNum" type="text" name="2154800007_0_buy" value="'+obj.count+'" />'
							+					'<a href="javascript:;" class="arrow-b J_minus">+</a>'
							+				'</div>'
							+			'</div>'
							+			'<div class="col col-total">'
							+				obj.count*parseInt(obj.pri)
							+				'<p class="pre-info"></p>'
							+			'</div>'
							+			'<div class="col col-action">'
							+				'<a href="javascript:void(0)" data-msg="确定删除吗？" class="del J_delGoods">x</a>'
							+			'</div>'
							+		'</div>'
							+	'</div>'
							+'</div>';
			}
			$('.list-body').append(cartStr);
		},
		//删除单个
		deleteGood:function(){
			var _this = this;
			$('.col-action .del').click(function(){
				if(confirm('确定删除宝贝吗？')){
					var goodBox = $(this).parents('.item-box');
					var id = $(this).parents('.item-box').data('id');
					goodBox.remove();
					console.log(_this.cart[id]);
					delete _this.cart[id];
					_this.setCart();
				}
			
			});
		},
		//数据处理
		optionHandle: function(obj,val){
			//处理总价
			var money = obj.parents('.item-row').find('.col-total');
			var price = obj.parents('.item-box').find('.col-price');
			var totalMoney = val * parseFloat(price.text());
			totalMoney = totalMoney.toFixed(2);
			money.text(totalMoney);
			//console.log(totalMoney);
			var gid = obj.parents('.item-box').attr('data-id');
			this.cart[gid].count = val;
			this.cart[gid].count
			//重新存储cookie
			this.setCart();
		},
		//文本框处理
		handleInput: function(){
			var _this = this;
			console.log()
			$('.goods-num').on('input propertychange',function(){
				//处理上限
				var max = parseInt( $(this).parents('.item-row').find('.col-name .stock span').text() );
				var val = parseInt( $(this).val() );
				if(val >= max){
					val = max;
				}
				//合法性验证
				var reg = /^[1-9]\d*$/;
				if(!reg.test(val)){
					val = 1;
				}
				_this.optionHandle($(this),val);
				_this.totalPrice();
				$(this).val(val);
			});
		},
		//数量加
		increaseClick: function(){
			var _this = this;
			$('.arrow-b').click(function(){
				//判断有没有达上限
				var max = parseInt( $(this).parents('.item-row').find('.col-name .stock span').text() );
				var val = parseInt( $(this).prev().val() );
				//console.log(max);
				if(val >= max){
					return ;
				}
				val++;
				_this.optionHandle($(this),val);
				_this.totalPrice();
				$(this).prev().val(val);
			});
		},
		//数量减
		decreaseClick: function(){
			var _this = this;
			$('.arrow-a').click(function(){
				//判断有没有达下限
				var val = parseInt( $(this).next().val() );
				if(val <= 1){
					return ;
				}
				val--;
				_this.optionHandle($(this),val);
				_this.totalPrice();
				$(this).next().val(val);
			});
		},
		//删除所选宝贝
		deleteMore:function(){
			var _this = this;
			$('.J_delete').click(function(){
				if(confirm('确定删除所选宝贝吗？')){
					var goodBox = $('.item-box .icon-checkbox-selected').parents('.item-box');
					var id = goodBox.data('id');
					goodBox.remove();
					console.log(_this.cart[id]);
					delete _this.cart[id];
					_this.setCart();
				}
			});
		},
		//复选框状态
		selectGood:function(){
			var _this = this;
			$('.item-row .icon-checkbox').click(function(){
				$(this).toggleClass('icon-checkbox-selected');
				var judge = $('.item-row .icon-checkbox').hasClass('icon-checkbox-selected');
				if(judge){
					$('.list-head .icon-checkbox').removeClass('icon-checkbox-selected');
				}
				_this.totalPrice();
			});
		},
		//点击全选
		selectAll:function(){
			var _this = this;
			$('.list-head .icon-checkbox').click(function(){
				$(this).toggleClass('icon-checkbox-selected');
				if($(this).hasClass('icon-checkbox-selected')){
					$('.item-row .icon-checkbox').addClass('icon-checkbox-selected');
				}else{
					$('.item-row .icon-checkbox').removeClass('icon-checkbox-selected');
				}
			_this.totalPrice();	
			});
		},
		//结算价格
		totalPrice:function(){
			var money = 0;
			var total = $('.item-row .icon-checkbox-selected').parents('.item-row').find('.col-total');
			total.each(function(k){
				money += parseFloat( total.eq(k).text() );
			});
			money = money.toFixed(2);
			$('.total-price em').text(money);
		},
		/*//购物车为空
		cartEmpty:function(){
			if($('.cart-goods-list .list-body').hasClass('item-box')){
				$('.cart-empty').show();
				$('#J_cartBox').hide();
			}else{
				$('.cart-empty').hide();
				$('#J_cartBox').show();
				
			}
		}*/
	};
	$('#footer').load('index.html #site-footer');
	$('#foot').load('index.html #site-info');
	cartHandler.init();
});
