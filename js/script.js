$(document).ready(function() {
  var books = [{
    title: 'CSS: The Definitive Guide',
    author: 'Eric Meyer',
    link: 'http://shop.oreilly.com/product/0636920012726.do',
    type: 'css',
    illustrationLink: 'http://akamaicovers.oreilly.com/images/9780596527334/cat.gif'
  }, {
    title: 'CSS Development with CSS3',
    author: 'Zachary Kingston',
    link: 'http://shop.oreilly.com/product/0636920057970.do',
    type: 'css',
    illustrationLink: 'https://www.packtpub.com/sites/default/files/bookretailers/CSS%20Development%20with%20CSS3_500x617.jpg'
  }, {
    title: 'You Don\'t Know JS: Up & Going',
    author: 'Kyle Simpson',
    link: 'http://shop.oreilly.com/product/0636920039303.do',
    type: 'js',
    illustrationLink: 'https://images-na.ssl-images-amazon.com/images/I/41L18FvA5rL._SX331_BO1,204,203,200_.jpg'
  }, {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    link: 'http://shop.oreilly.com/product/0636920033141.do',
    type: 'js',
    illustrationLink: 'http://orm-other.s3.amazonaws.com/progjsappssplash/cover.jpg'
  }, {
    title: 'Modern JavaScript',
    author: 'unknown',
    link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
    type: 'js',
    illustrationLink: 'https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg'
  }];

  // Création des elements contenant les livres
  for (var i in books) {
    $('#card-container').append('<div class="card"></div>');
    $('.card').eq(i).append('<img src="' + books[i].illustrationLink + '"/>');
    $('.card').eq(i).append('<h3>' + books[i].title + '</h3>');
    $('.card').eq(i).append('<p>' + books[i].author + '</p>');
    $('.card').eq(i).append('<a href="' + books[i].link + '">Go Buy it !</a>');
  }

  var filter = function(filtre) {
    for (var i in books) {
      if (books[i].type === filtre) {
        $('.card').eq(i).css('display', 'block');
      } else {
        $('.card').eq(i).css('display', 'none');
      }
    }
  };

  $('#btn-js').on('click', function() {
    filter('js');
  });
  $('#btn-css').on('click', function() {
    filter('css');
  });
  $('#btn-all').on('click', function(){
    $('.card').css('display','block');
  });

});
