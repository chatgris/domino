DOMINO
======

Javascript pagination helper.


Dependency
----------

None.


Installation
------------

Just include `src/domino.js`.


Usage
-----

Domino takes a few options, and a callback.

To append a html list of paginated links in the dom :

Coffeescript :

    new Domino {
      current_page: 23,
      per_page: 10,
      total_entries: 233,
      path: 'posts/page/',
      inner: 3,
      outer: 3
    }, (paginated)->
      $('#paginate').append paginated

Javascript :

    new Domino({
      current_page: 23,
      per_page: 10,
      total_entries: 233,
      path: 'posts/page',
      inner: 3,
      outer: 3
    }, function(paginated) {
      $('#paginate').append(paginated);
    });


Note on Patches/Pull Requests
-----------------------------

* Fork the project.
* Make your feature addition or bug fix.
* Add tests for it. This is important so I don't break it in a future version unintentionally.
* Commit, do not mess with rakefile, version, or history. (if you want to have your own version, that is fine but bump version in a commit by itself in another branch so I can ignore when I pull)
* Send me a pull request. Bonus points for topic branches.


Copyright
---------

MIT. See LICENSE for further details.
