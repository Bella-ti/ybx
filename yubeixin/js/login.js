$(function(){
	var Login = {
		telInput : $('.labelbox input[name=phone]'),
		telError : $('.err_tip').eq(0),
		pswInput : $('.labelbox input[name=password]'),
		pswError : $('.err_tip').eq(1),
		logInput : $('input[type=submit]'),
		init:function(){
			this.telCheck();
			this.pswCheck();
			this.submitClick();
			this.codeClose();
			this.ercodeClick();
		},
		infoCheck:function(reg,obj,error){
			var reg = new RegExp(reg);
			obj.on('blur',function(){
				var value = obj.val();
				if(value == 0){
					error.find('span').text(obj.attr('placeholder'));
					error.show();
					$(this).parent().addClass('active');
					return;
				}
				if(!reg.test(value)){
					error.find('span').text(obj.data('check'));
					error.show();
					$(this).parent().addClass('active');
					return;
				}
				$(this).parent().removeClass('active');
				error.hide();
			});
			obj.on('input',function(){
				var value = obj.val();
				$(this).parent().removeClass('active');
				error.hide();
			});
		},
		/*手机号*/
		telCheck:function(){
			//
			this.infoCheck('^1[3|4|5|7|8][0-9]\\d{8}$',this.telInput,this.telError);
		},
		/*密码验证
			长度6-16位
			不能为同一个字符
			不能全是数字
			只能有数字、字母和常用特殊字符*/
		pswCheck:function(){
			this.infoCheck('^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z_！~￥$%@#&+]+$',this.pswInput,this.pswError);
		},
		/*点击登录*/
		submitClick:function(){
			var _this = this;
			this.logInput.on('click',function(){
				var phone = _this.telInput.val();
				var psw = _this.pswInput.val();
				//var flag = true;
				var userInfo = $.cookie('userinfo') ;
/*				$.getJSON('js/userReg.json',function(result){//数据库数据登录
					for(var i in result){
						if(phone == result[i].phone && psw == result[i].psw){
							//console.log(phone);
							var userInfo = {
								phone : phone,
								psw : psw,
								isLogin : true
							};
							console.log(phone,result[i].phone);
							console.log(psw,result[i].psw);
							flag = false;
							//console.log(flag);
							$.cookie('userinfo',JSON.stringify(userInfo),{expires:7,path:'/yubeixin'});
							location.href = 'index.html';
							break;
						}
					}
				});*/
				//console.log(flag);
				//if(flag){
					if(userInfo != undefined){//cookie 数据登录
						//alert(1);
						userInfo = JSON.parse(userInfo);
						if(phone == userInfo.phone && psw == userInfo.psw){
							userInfo.isLogin = true;
							$.cookie('userinfo',JSON.stringify(userInfo),{expires:7,path:'/yubeixin'});
							location.href = 'index.html';
						}else{
							_this.pswError.text('用户名或密码不正确,请重试！');
							_this.pswError.show();
							flag = false;
						}
					}
				//}
			});
		},
		/*二维码*/
		codeClose:function(){
			$('.code_close').click(function(){
				$(this).parent().parent().hide();
				$('#main_container').show();
			});
		},
		ercodeClick:function(){
			$('.ercode').click(function(){
				$(this).parents('.reg_frame').hide();
				$('.ercode_area').show();
			});
		}
	};
	Login.init();
});
