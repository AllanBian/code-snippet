(function(win){
	win.addEventListener('DOMContentLoaded', function(e){
		lazyImage({
			target: 'div'
		});
		setTimeout(function(){
			lazyImage();
		}, 200)
	}, false)

	// lazyImage
	function lazyImage(options) {
		this.lazyRecord = [];
		this.queue = [];
		this.finish = false;
		this.isloading = false;
		this.top = 0;
		this.options = {
			target: 'img', // img div
			selector: '[data-lazy-src]',
			selectorOld: '.wscnph'
		};

		Object.assign(this.options, options || {});

		if (this instanceof lazyImage) {
			return this.init()
		} else {
			return new lazyImage(options)
		}
	}

	lazyImage.prototype.init = function(){
		this.getNodes(this.options);
		return this;
	};

	lazyImage.prototype.getNodes = function(){
		var nodes;
		if (this.options.target === 'img') {
			nodes = document.querySelectorAll(this.options.target + this.options.selector);
			if (nodes.length !== 0) {
				for(var i = 0; i < nodes.length; i++) {
					if (!nodes[i].classList.contains('lazy_load_finish')){
						this.lazyRecord.push({
							top: nodes[i].offsetTop,
							node: nodes[i]
						})
					}
				}
				this.listen();
			}
		}

		if (this.options.target === 'div') {
			nodes = document.querySelectorAll(this.options.target + this.options.selector);
			if (nodes.length !== 0) {
				for(var i = 0; i < nodes.length; i++) {
					if (!nodes[i].classList.contains('lazy_load_finish')){
						this.lazyRecord.push({
							top: nodes[i].offsetTop,
							node: nodes[i]
						})
					}
				}
				this.show();
			}
		}
		return this;
	};

	lazyImage.prototype.listen = function(){
		var that = this;
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		var top = scrolltop + document.documentElement.clientHeight;
		this.top = top;
		this.check();
		win.addEventListener('scroll', function(e){
			var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
			if (!that.finish && that.lazyRecord.length > 0) {
				top = scrolltop + document.documentElement.clientHeight;
				that.top = top;
				that.check();
			}
		},false);
	};

	lazyImage.prototype.show = function(){
		var node, src;
		if (this.lazyRecord.length) {
			for(var i = 0; i < this.lazyRecord.length; i++) {
				node = this.lazyRecord[i]['node'];
				src = this.zipImage(node.dataset.lazySrc, 0);
				node.style.background = `url(${src})`
			}
		}
	};

	// 将需要符合条件需要处理的节点推入queue
	lazyImage.prototype.check = function(){
		var that = this;
		var item = this.lazyRecord.length ? this.lazyRecord[0] : null;
		if (item && item.top <= this.top && this.isloading === false) {
			that.queue.push(this.lazyRecord.shift());
			that.loading();
		}
	};

	// 对queue中的节点进行处理
	lazyImage.prototype.loading = function(){
		var item, src, that = this, nextItem;
		setTimeout(function(){
			if (that.queue.length > 0) {
				item = that.queue.shift();
				src = item.node.dataset.lazySrc;
				that.isloading = true;
				item.node.src = that.zipImage(src, 30);
				item.node.onload = function(e){
					if(!e.target.classList.contains('lazy_load_finish')) {
						e.target.classList.add('lazy_load_finish');
					}
					that.fixTop(e.target.height)
					that.isloading = false;
					console.log('加载图片成功,还有' + that.lazyRecord.length + '个图片待处理');
					nextItem = that.lazyRecord.length !== 0 ? that.lazyRecord[0] : null;
					if (nextItem && nextItem.top <= that.top) {
						that.check();
					}
				}
			}
		}, 0)
	};

	lazyImage.prototype.fixTop = function(height){
		if (this.lazyRecord.length) {
			for(var i = 0; i < this.lazyRecord.length; i++) {
				this.lazyRecord[i].top += height;
			}
		} else {
			this.finish = true
		}
	};

	lazyImage.prototype.zipImage = function(url, p_width){
		var w = (document.documentElement.clientWidth - p_width) * 2;
		var type = /\.(\w+)(\?|$)/g.exec(url)[1];
	  var format = `x-oss-process=image/resize,w_${w}/format,${type}`;
	  var regReplace = /(https:\/\/[^?]*)(\?*)(.*)/;
	  return url.replace(regReplace, `$1?${format}`);
	};
})(window)
