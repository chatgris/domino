(function() {
  window.Domino = (function() {
    function Domino(opts, callback) {
      var _base, _base2, _base3;
      this.opts = opts;
      (_base = this.opts).inner || (_base.inner = 3);
      (_base2 = this.opts).outer || (_base2.outer = 3);
      (_base3 = this.opts).separator || (_base3.separator = '...');
      this.opts.current_page = parseInt(this.opts.current_page);
      callback(this.paginate());
    }
    Domino.prototype.paginate = function() {
      if (this.opts.per_page > this.opts.total_entries) {
        return;
      }
      this.pagination = '<ul>';
      this.set_num_pages();
      this.build_pagination();
      return this.pagination += '</ul>';
    };
    Domino.prototype.add_page = function(page, css) {
      return this.pagination += "<li><a href='" + this.opts.path + page + "\' class='" + css + "'>" + page + "</li>";
    };
    Domino.prototype.add_separator = function() {
      return this.pagination += "<li>" + this.opts.separator + "</li>";
    };
    Domino.prototype.add_current_page = function() {
      return this.add_page(this.opts.current_page, 'current');
    };
    Domino.prototype.pre_current = function() {
      var end, page, start, _results;
      start = this.opts.current_page - this.opts.inner;
      end = this.opts.current_page - 1;
      _results = [];
      for (page = start; start <= end ? page <= end : page >= end; start <= end ? page++ : page--) {
        if (page > 0) {
          _results.push(this.add_page(page, 'inner'));
        }
      }
      return _results;
    };
    Domino.prototype.post_current = function() {
      var end, page, start, _results;
      start = this.opts.current_page + 1;
      end = this.opts.current_page + this.opts.inner;
      _results = [];
      for (page = start; start <= end ? page <= end : page >= end; start <= end ? page++ : page--) {
        if (page <= this.num_page) {
          _results.push(this.add_page(page, 'inner'));
        }
      }
      return _results;
    };
    Domino.prototype.outer_start = function() {
      var marker, page, _ref;
      marker = this.opts.current_page - this.opts.outer;
      if (marker > 1) {
        for (page = 1, _ref = this.opts.outer; 1 <= _ref ? page <= _ref : page >= _ref; 1 <= _ref ? page++ : page--) {
          if (page < marker) {
            this.add_page(page, 'outer');
          }
        }
        return this.add_separator();
      }
    };
    Domino.prototype.outer_end = function() {
      var marker, page, start, _ref, _results;
      marker = this.opts.current_page + this.opts.outer;
      if (marker < this.num_page) {
        start = this.num_page - this.opts.outer;
        this.add_separator();
        _results = [];
        for (page = start, _ref = this.num_page; start <= _ref ? page <= _ref : page >= _ref; start <= _ref ? page++ : page--) {
          if (page > marker) {
            _results.push(this.add_page(page, 'outer'));
          }
        }
        return _results;
      }
    };
    Domino.prototype.build_pagination = function() {
      this.outer_start();
      this.pre_current();
      this.add_current_page();
      this.post_current();
      return this.outer_end();
    };
    Domino.prototype.set_num_pages = function() {
      return this.num_page = Math.ceil(this.opts.total_entries / this.opts.per_page);
    };
    return Domino;
  })();
}).call(this);
