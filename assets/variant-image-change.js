$(document).ready(function() {
  thumbnails = $('img[src*="/products/"]').not(':first');
  if (thumbnails.length) {
    thumbnails.bind('click', function() {
      var arrImage = $(this).attr('src').split('?')[0].split('.');
      var strExtention = arrImage.pop();
      var strRemaining = arrImage.pop().replace(/_[a-zA-Z0-9@]+$/,'');
      var strNewImage = arrImage.join('.')+"."+strRemaining+"."+strExtention;
      if (typeof variantImages[strNewImage] !== 'undefined') {
          productOptions.forEach(function (value, i) {
           optionValue = variantImages[strNewImage]['option-'+i];
           if (optionValue !== null && $('.single-option-selector:eq('+i+') option').filter(function() { return $(this).text() === optionValue }).length) {
             $('.single-option-selector:eq('+i+')').val(optionValue).trigger('change');
           }
        });
      }
    });
  }
});