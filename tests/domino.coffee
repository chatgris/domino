content = undefined

test 'should return nothing', ->
  new Domino {
    current_page: 1,
    per_page: 10,
    total_entries: 8
  }, (paginated)->
    content = paginated
  equal content, undefined, 'nothing to paginate'

test 'should return a default list', ->
  new Domino {
    current_page: 23,
    per_page: 10,
    total_entries: 233,
    path: 'posts/page/'
  }, (paginated)->
    content = paginated
  equal content, "<ul><li><a href='posts/page/1' class='outer'>1</li><li><a href='posts/page/2' class='outer'>2</li><li><a href='posts/page/3' class='outer'>3</li><li>...</li><li><a href='posts/page/20' class='inner'>20</li><li><a href='posts/page/21' class='inner'>21</li><li><a href='posts/page/22' class='inner'>22</li><li><a href='posts/page/23' class='current'>23</li><li><a href='posts/page/24' class='inner'>24</li></ul>", 'haz a list'


test 'should accept separator options', ->
  new Domino {
    current_page: 23,
    per_page: 10,
    total_entries: 233,
    path: 'posts/page/',
    separator: '|'
  }, (paginated)->
    content = paginated
  equal content, "<ul><li><a href='posts/page/1' class='outer'>1</li><li><a href='posts/page/2' class='outer'>2</li><li><a href='posts/page/3' class='outer'>3</li><li>|</li><li><a href='posts/page/20' class='inner'>20</li><li><a href='posts/page/21' class='inner'>21</li><li><a href='posts/page/22' class='inner'>22</li><li><a href='posts/page/23' class='current'>23</li><li><a href='posts/page/24' class='inner'>24</li></ul>", 'haz a list'

test 'should accept inner option', ->
  new Domino {
    current_page: 17,
    per_page: 10,
    total_entries: 233,
    path: 'posts/page',
    inner: 1
  }, (paginated)->
    content = paginated
  equal content, "<ul><li><a href='posts/page1' class='outer'>1</li><li><a href='posts/page2' class='outer'>2</li><li><a href='posts/page3' class='outer'>3</li><li>...</li><li><a href='posts/page16' class='inner'>16</li><li><a href='posts/page17' class='current'>17</li><li><a href='posts/page18' class='inner'>18</li><li>...</li><li><a href='posts/page21' class='outer'>21</li><li><a href='posts/page22' class='outer'>22</li><li><a href='posts/page23' class='outer'>23</li><li><a href='posts/page24' class='outer'>24</li></ul>"


test 'should accept outer option', ->
  new Domino {
    current_page: 17,
    per_page: 10,
    total_entries: 233,
    path: 'posts/page',
    inner: 1,
    outer: 1
  }, (paginated)->
    content = paginated
  equal content, "<ul><li><a href='posts/page1' class='outer'>1</li><li>...</li><li><a href='posts/page16' class='inner'>16</li><li><a href='posts/page17' class='current'>17</li><li><a href='posts/page18' class='inner'>18</li><li>...</li><li><a href='posts/page23' class='outer'>23</li><li><a href='posts/page24' class='outer'>24</li></ul>"
