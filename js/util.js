/**
 * 获取或修改盒子模型
 * @param {Object} obj		需要修改的盒子模型
 * @param {Object} attr		需要修改的属性
 * @param {Object} val		修改的内容
 */
function css(obj, attr, val) {
	if (arguments.length == 3) { // 修改
		/*if (obj.currentStyle){
			if (attr == 'opacity'){
				obj.currentStyle.filter = 'alpha(opacity:' + val + ')';
			}else{
				obj.style[attr] = val;
			}
		}else{
			if (attr == 'opacity'){
				obj.style[attr] = val / 100;
			}else{
				obj.style[attr] = val;
			}
		}	*/
		if (obj.currentStyle && attr == 'opacity') { // 如果返回的不是undefined(转换为false)就是IE浏览器
			obj.style.filter = 'alpha(opacity:' + val + ')';
		} else if (attr == 'opacity') {
			obj.style[attr] = val / 100;
		} else {
			//obj.style[attr] = val + 'px';
			obj.style[attr] = val;
		}
	} else if (arguments.length == 2) { // 获取
		if (obj.currentStyle) {
			if (attr == 'opacity') {
				return parseInt(obj.currentStyle.filter.split(':'));
			} else {
				return parseInt(obj.currentStyle[attr]);
			}
		} else {
			if (attr == 'opacity') {
				return parseInt(Math.round(getComputedStyle(obj, null)[attr] * 100));
			} else {
				var value = parseInt(getComputedStyle(obj, null)[attr]);
				return value;
			}
		}
	}
}

/**
 * 实现简单的动画效果
 * @param {Object} obj				需要动画效果的盒子模式
 * @param {Object} attr				修改的属性
 * @param {Object} target			修改的最终值
 * @param {Object} fn				动画完成后需要执行的其它代码
 */
/*function animation(obj, attr, target, fn){
	// 清空定时器
	clearInterval(obj.timeHandler);
	obj.timeHandler = setInterval(function(){
		console.log(attr);
		// 当前位置
		var cur = css(obj, attr);
		// 判断是否需要结束动画
		if (cur != target){
			// 计算速度
			var speed = (target - cur) / 10;
			// 如果speed>0向上取整，其它情况向下同整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			
			if (attr == 'opacity'){
				css(obj, attr, cur + speed);	
			}else{
				css(obj, attr, cur + speed + 'px');
			}
			
		
		}else{
			// 结束动画，清空定时器
			clearInterval(obj.timeHandler);
			// 回调函数 ，调用者本身不执行回调函数的代码，是由调用的函数在某个时刻自动执行
			if (fn){	// 检查用是否有传递一个回调函数 
				fn();	
			}
		}
	}, 30);
	

}*/

/**
 * 实现简单的动画效果
 * @param {Object} obj				需要动画效果的盒子模式
 * @param {Object} json				需要修改部分的JSON数据格式
 * @param {Object} fn				动画完成后需要执行的其它代码
 */
function animation(obj, json, fn) {
	// 清空定时器
	clearInterval(obj.timeHandler);
	obj.timeHandler = setInterval(function() {
		// 增强的for循环，可用在数据或json数据格式中，把in后的数组的每次提取一条数组赋值给in前面声明的变量
		/*
		 * var arr = [1,2,3,4,5];
		 * for (var i=0;i<arr.length;i++){console.log(arr[i]);}
		 * for (var j in arr)}{console.log(j);}
		 * 两种遍历数组的方式都是一样的
		 */
		var stop = true;		// 默认需要执行完成本次定时任务后关闭定时器
		
		for (var attr in json) {	// attr得到的是json的key(键)
			// 当前位置
			var cur = css(obj, attr);
			var target = json[attr];
			// 判断是否需要结束动画
			if (cur != target) {
				// 计算速度
				var speed = (target - cur) / 10;
				//console.log(cur+','+target+','+speed)
				// 如果speed>0向上取整，其它情况向下同整
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if (attr == 'opacity') {
					css(obj, attr, cur + speed);
				} else {
					css(obj, attr, cur + speed + 'px');
				}
				stop = false;	// 只需要能执行动画就不能结束定时器
			}  
		}
		
		if (stop){
			// 结束动画，清空定时器
			clearInterval(obj.timeHandler);
			// 回调函数 ，调用者本身不执行回调函数的代码，是由调用的函数在某个时刻自动执行
			if (fn) { // 检查用是否有传递一个回调函数 
				fn();
			}
		}
	}, 30);

}

function sample(obj, json, ratio, fn){
	if (!ratio || typeof ratio == 'string'){
		ratio = 10;
	}
}
