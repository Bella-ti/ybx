$(function(){
	var Register = {
		/*地区*/
		listWrap : $('.listwrap'),
		lisRecord : $('.list .record'),
		selCode : $('#select-cycode-result'),
		countryContainer : $('.country-container'),
		telInput : $('.labelbox input[name=phone]'),
		telError : $('.err_tip').eq(0),
		pswInput : $('.labelbox input[name=password]'),
		pswError : $('.err_tip').eq(1),
		codeInput : $('.labelbox input[name=icode]'),
		icode : $('.code-image'),
		codeError : $('.err_tip').eq(2),
		subInput : $('input[type=submit]'),
		init:function(){
			this.listWrapSelect();
			this.telCheck();
			this.pswCheck();
			this.codeCheck();
			this.subInputClick();
		},
		listWrapSelect:function(){
			var _this = this;
			this.listWrap.on('click',function(e){
				e.stopPropagation();
				_this.countryContainer.toggle();
			});
			this.lisRecord.on('click',function(){
				var rec = $(this).text();
				var selCode = $('#select-cycode-result');
				selCode.text(rec);
			});
			$(document).on('click',function(){
				_this.countryContainer.hide();
			});
		},
		//用户信息
		userInfoStu:
		    {
				tel:false,
				psw:false,
				code:false
			},
		
		/*手机号*/
		telCheck:function(){
			var _this = this;
			this.telInput.on('blur',function(){
				var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
				var value = $(this).val();
				if(value == 0){//用户名为空
					_this.telError.find('span').text($(this).attr('placeholder'));
					_this.telError.show();
					$(this).parent().addClass('active');
					return;
				}
				if(!reg.test(value)){//手机号不合法
					_this.telError.find('span').text($(this).data('check'));
					_this.telError.show();
					$(this).parent().addClass('active');
					return ;
				}
				$(this).parent().removeClass('active');
				_this.telError.hide();
				/*ajax判断合法*/
				var tel = $(this).val();
				_this.userInfoStu.tel = true;
				$.getJSON('js/userReg.json',function(result){
					
					for(var i in result){
						if(result[i].phone == tel){
							_this.userInfoStu.tel = false;
							break;
						}
					}
					//console.log(_this.userInfo);
					if(_this.userInfoStu.tel){
						_this.telInput.parent().parent().find('span').text('手机号可用');
					}else{
						_this.telError.find('span').text('手机号已注册');
						_this.telError.show();
						_this.telInput.parent().addClass('active');
					}
				});
			});
			this.telInput.on('input',function(){
				$(this).parent().removeClass('active');
				_this.telError.hide();
			});	
		},
		/*密码验证
			长度6-16位
			不能为同一个字符
			不能全是数字
			只能有数字、字母和常用特殊字符*/
		pswCheck:function(){
			var _this = this;
			this.pswInput.on('blur',function(){
				var reg = new RegExp('^(?=.{6,16}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z_！~￥$%@#&+]+$');
				var value = $(this).val();
				if(value == 0){
					_this.pswError.find('span').text($(this).attr('placeholder'));
					_this.pswError.show();
					$(this).parent().addClass('active');
					//_this.userInfoStu.psw = false;
					return ;
				}
				if(!reg.test(value)){
					_this.pswError.find('span').text($(this).data('check'));
					_this.pswError.show();
					$(this).parent().addClass('active');
					//_this.userInfoStu.psw = false;
					return ;
				}
				$(this).parent().removeClass('active');
				_this.pswError.hide();
				return _this.userInfoStu.psw = true;
			});
			this.pswInput.on('input',function(){
				$(this).parent().removeClass('active');
				_this.pswError.hide();
			});
		},
		/*验证码*/
		codeCheck:function(){
			var _this = this;
			this.codeInput.on('blur',function(){
				var value = _this.icode.html();
				var val = _this.codeInput.val();
				if(val == 0){
					_this.codeError.find('span').text($(this).data('null'));
					_this.codeError.show();
					$(this).parent().addClass('active');
					//_this.userInfoStu.code = false;
					return;
				}
				if(value != val){
					_this.codeError.find('span').text($(this).data('check'));
					_this.codeError.show();
					$(this).parent().addClass('active');
					//_this.userInfoStu.code = false;
					return;
				}
				$(this).parent().removeClass('active');
				_this.codeError.hide();
				_this.userInfoStu.code = true;
				return;
				
			});
			this.codeInput.on('input',function(){
				$(this).parent().removeClass('active');
				_this.codeError.hide();
			});
		},
		//点击注册
		subInputClick:function(){
			var _this = this;
			this.subInput.on('click',function(){
				var flag = true;
				for(var i in _this.userInfoStu){
					//console.log(_this.userInfoStu[i]);
					if(!_this.userInfoStu[i]){
						flag = false;
						break;
					}
				}
				if(flag){
					var userInfo = {
						phone : _this.telInput.val(),
						psw : _this.pswInput.val(),
						isLogin : false
					};
					$.cookie('userinfo',JSON.stringify(userInfo),{expires:7,path:'/yubeixin'});
					//console.log($.cookie('userinfo'));
					location.href = 'login.html';
				}
			});
		}
		
	};
	Register.init();
});
