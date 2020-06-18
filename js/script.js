$(document).ready(function() {
  $('.btn-email-gen').on('click', function() {
    const email = 'wangyihan' + '716'.split('').reverse().join('') + '@gmail.com'
    $('.email-generated').html('Email: <a href="mailto:' + email + '">' + email + '</a>')
  })
});

var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1278055084'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1278055084%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));