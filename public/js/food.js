	var meal = {
		move: function () {
			var oUl = document.getElementById('food');
			var oUlHeightAbs = Math.abs(oUl.offsetTop),
				oUlH = oUl.offsetHeight / 2;
			if (oUlHeightAbs > oUlH) {
				oUl.style.top = '0';
			}
			oUl.style.top = oUl.offsetTop + (-45) + 'px';
		},
		getData: function (type) {
			$.ajax({
					url: 'http://127.0.0.1:8000',
					type: 'get',
					dataType: 'jsonp',
					data: {
						type: type
					}
				})
				.done(function (data) {
					var lis = data.map(function (item, index, array) {
						return '<li>' + item.title + '</li>';
					});
					$('#food').html(lis.join(''));
					$('#stop').show();
					timer = setInterval(this.move, 50);
					//无缝滚动菜单
				}.bind(this))
				.fail(function (data) {
					console.log("error");
				});
		}
	}
	$('#time').on('click', '.food-btn', function () {
		var types = {
			breakfast: 1,
			lunch: 2,
			supper: 3
		}
		meal.getData(types[$(this).data('type')]);
	});

	var foodNameTxt;
	$('body').on('click', '#stop', function () {
		window.clearInterval(timer);
		var index = (parseInt($('#food').css('top')) / 45 - 1).toString().slice(1);
		foodNameTxt = $('#food li')[index - 1].innerHTML;
		var oConfirmMsginnerHTML = '咱今天就吃"' + foodNameTxt;
		$('#confirm').show().find('#food-name2').text(oConfirmMsginnerHTML);
		$('#confirm').siblings('.box').hide();
	});

	document.getElementById('confirm').addEventListener('click', function (e) {　
		switch (e.target.id) {
			case 'confirm-no':
				$('#mood-sad').show().siblings('.box').hide();
				$('.message').text(foodNameTxt + '已黯然失色躲在角落检测身体营养指数哭到妆都花了还是会深思熟虑如何才能博君子一笑即使还是会痛定思痛。')
				break;
			case 'confirm-yes':
				$('#mood-happy').show().siblings('.box').hide();
				$('.message').text('做到最好只为博得君子莞尔一笑' + foodNameTxt + '此时正在犄角旮旯歇斯底里的狂笑并享受被君子翻牌的自豪感和即将被食用的快乐感。')
				break;
		}
	}, false);

	$('.box').on('click', '.mood-btn', function () {
		$(this).parents('.box').hide();
	});