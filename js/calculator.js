$(document).ready(function(){
  //Prices

  var prices = {
    bronze5: 8,
    bronze4: 16,
    bronze3: 24,
    bronze2: 32,
    bronze1: 40,
    silver5: 49,
    silver4: 60,
    silver3: 72,
    silver2: 85,
    silver1: 99,
    gold5: 116,
    gold4: 134,
    gold3: 153,
    gold2: 173,
    gold1: 194,
    platinum5: 224,
    platinum4: 254,
    platinum3: 286,
    platinum2: 320,
    platinum1: 356,
    diamond5: 404,
    diamond4: 484,
    diamond3: 574,
    diamond2: 684,
    diamond1: 814,
    master5: 1034,
    master4: 1034,
    master3: 1034,
    master2: 1034,
    master1: 1034
  }

  var addPicture = function(selector, item, division) {
    $(selector)
      .attr("src", pathToPicture + item + division + ".png");
  };

  var addPrice = function(selector, price) {

      if(price > 0) {
        $(selector).text(price + "€");
      } else {
        $(selector).text('Desired division must be higher than current league!');
        $('.button_pay').prop("disabled", true);
      }

  }

  // for basket form 1


  // Current league

  // var pathToPicture = "http://calculate/wp-content/themes/shop-isle/assets/images/";
  // var pathToPicture = "/wp-content/themes/shop-isle/assets/images/";
  var pathToPicture = "images/";

  var form1 = {};

  form1.addDataToPaymentSystem = function() {
    $('#input_business').val('alfonsolol94@hotmail.es');
    $('#input_name').val(form1.item1 + ' ' + form1.division1 + ' > ' + form1.item2 + ' ' + form1.division2);
    $('#input_currency').val('EUR');
    if (form1.calculation() > 0) {
      $('#input_price').val(form1.calculation());
    }
  }

  // current league
  form1.item1 = $('#form1 .item1 option:selected').data('item');
  form1.division1 = $('#form1 .division1 option:selected').data('division');
  // desire league
  form1.item2 = $('#form1 .item2 option:selected').data('item');
  form1.division2 = $('#form1 .division2 option:selected').data('division');

  // your server
  form1.server = $('#form1 .server1').data('server');
  form1.username = $('#user1').val();
  form1.password = $('#pass1').val();

  form1.calculation = function() {
    var price = prices[form1.item2 + form1.division2] - prices[form1.item1 + form1.division1];
    return price;
  };

  addPicture('#form1 .img1', form1.item1, form1.division1);
  addPicture('#form1 .img2', form1.item2, form1.division2);
  addPrice('#price1', form1.calculation());
  form1.addDataToPaymentSystem();

  // Current league

  $('#form1 .item1').change(function() {
    form1.item1 = $(this).children('option:selected').data('item');
    addPicture('#form1 .img1', form1.item1, form1.division1);
  });

  $('#form1 .division1').change(function() {
    form1.division1 = $(this).children('option:selected').data('division');
    addPicture('#form1 .img1', form1.item1, form1.division1);
  });

  // desire league

  $('#form1 .item2').change(function() {
    form1.item2 = $(this).children('option:selected').data('item');
    addPicture('#form1 .img2', form1.item2, form1.division2);
    if (form1.item2 == 'master') {
      $('#form1 .division2 option:first-child')
        .prop('selected', 'selected')
        .siblings()
        .prop('disabled', true);
    } else {
      $('#form1 .division2 option')
        .prop('disabled', false);
    }
  });

  $('#form1 .division2').change(function() {
    form1.division2 = $(this).children('option:selected').data('division');
    addPicture('#form1 .img2', form1.item2, form1.division2);
  });

  // calculation, add price for all select

  $('#form1 select:not(.server1)').change(function() {

    form1.calculation();
    addPrice('#price1', form1.calculation());
    form1.addDataToPaymentSystem();
  });

  // your server

  $('#form1 .server').change(function() {
    form1.server = $(this).children('option:selected').data('server');
  });

  $('#form1 #user1, #form1 #pass1').change(function() {
    form1.username = $('#form1 #user1').val();
    form1.password = $('#form1 #pass1').val();
  });



////////////////////////////////////////////////////////////////////////////////////////////////////
///// Boost Pack

  var form2 = {};

  form2.addDataToPaymentSystem = function() {
    $('#input_business_2').val('alfonsolol94@hotmail.es');
    $('#input_name_2').val(form2.item);
    $('#input_currency_2').val('EUR');
    $('#input_price_2').val($('#form2 .item').val());
  }

  // current league
  form2.item = $('#form2 .item option:selected').data('item');

  // your server
  form2.server = $('#form2 .server').data('server');
  form2.username = $('#user2').val();
  form2.password = $('#pass2').val();

  addPicture('#form2 .img', form2.item, '');
  addPrice('#price2',  $('#form2 .item').val());
  form2.addDataToPaymentSystem();

  $('#form2 .item').change(function() {
    form2.item = $(this).children('option:selected').data('item');
    addPicture('#form2 .img', form2.item, '');
    addPrice('#price2',  $('#form2 .item').val());
    form2.addDataToPaymentSystem();
  });

  $('#form2 .server').change(function() {
    form2.server = $(this).children('option:selected').data('server');
  });

  $('#form2 #user2, #form2 #pass2').change(function() {
    form2.username = $('#form2 #user2').val();
    form2.password = $('#form2 #pass2').val();
  });

//////////////////////////////////////////////////////////////////////////////////
///////// Net wins


  $(function () {

      // net wins slider
      $('#slider-range-max1').slider({
          range: 'max',
          min: 3,
          max: 10,
          value: 10,
          slide: function (event, ui) {
            $('.amount1').val(ui.value);
          },
          change: function(event, ui) {
            form3.amount1 = parseInt($('#form3 .amount1').val());
            addPrice('#price3',  calculation());
            form3.addDataToPaymentSystem = function() {
              $('#input_business_3').val('alfonsolol94@hotmail.es');
              $('#input_name_3').val(form3.item + ' ' + form3.division);
              $('#input_currency_3').val('EUR');
              $('#input_price_3').val(calculation());
            }
            form3.addDataToPaymentSystem();
          }
      });
      $('.amount1').val($('#slider-range-max1').slider('value'));
      form3.amount1 = parseInt($('#form3 .amount1').val());
      addPrice('#price3',  calculation());
      form3.addDataToPaymentSystem = function() {
        $('#input_business_3').val('alfonsolol94@hotmail.es');
        $('#input_name_3').val(form3.item + ' ' + form3.division);
        $('#input_currency_3').val('EUR');
        $('#input_price_3').val(calculation());
      }
      form3.addDataToPaymentSystem();

      // placements mathes slider
      $('#slider-range-max2').slider({
          range: 'max',
          min: 3,
          max: 10,
          value: 10,
          slide: function (event, ui) {
            $('.amount2').val(ui.value);
          },
          change: function(event, ui) {
            form4.amount2 = parseInt($('#form4 .amount2').val());
            addPrice('#price4', form4.calculation());
            form4.addDataToPaymentSystem = function() {
              $('#input_business_4').val('alfonsolol94@hotmail.es');
              $('#input_name_4').val(form4.item);
              $('#input_currency_4').val('EUR');
              $('#input_price_4').val(form4.calculation());
            }
            form4.addDataToPaymentSystem();
          }
      });
      $('.amount2').val($('#slider-range-max2').slider('value'));
      form4.amount2 = parseInt($('#form4 .amount2').val());
      addPicture('#form4 .img', form4.item, '1');
      addPrice('#price4', form4.calculation());
      form4.addDataToPaymentSystem = function() {
        $('#input_business_4').val('alfonsolol94@hotmail.es');
        $('#input_name_4').val(form4.item);
        $('#input_currency_4').val('EUR');
        $('#input_price_4').val(form4.calculation());
      }
      form4.addDataToPaymentSystem();

      // duu q slider
      $('#slider-range-max3').slider({
          range: 'max',
          min: 3,
          max: 10,
          value: 10,
          slide: function (event, ui) {
            $('.amount3').val(ui.value);
          },
          change: function(event, ui) {
            form5.amount3 = parseInt($('#form5 .amount3').val());
            addPrice('#price5', form5.calculation());
            form5.addDataToPaymentSystem = function() {
              $('#input_business_5').val('alfonsolol94@hotmail.es');
              $('#input_name_5').val(form5.item + ' ' + form5.division);
              $('#input_currency_5').val('EUR');
              $('#input_price_5').val(form5.calculation);
            }
            form5.addDataToPaymentSystem();
          }
      });
      $('.amount3').val($('#slider-range-max3').slider('value'));
      form5.amount3 = parseInt($('#form5 .amount3').val());
      addPicture('#form5 .img', form5.item, form5.division);
      addPrice('#price5', form5.calculation());
      form5.addDataToPaymentSystem = function() {
        $('#input_business_5').val('alfonsolol94@hotmail.es');
        $('#input_name_5').val(form5.item + ' ' + form5.division);
        $('#input_currency_5').val('EUR');
        $('#input_price_5').val(form5.calculation);
      }
      form5.addDataToPaymentSystem();

      // placements mathes data
      $('#form4 .item').change(function() {
        form4.item = $(this).children('option:selected').data('item');
        addPicture('#form4 .img', form4.item, '1');
        addPrice('#price4', form4.calculation());
      });

      $('#form4 .server').change(function() {
        form4.server = $(this).children('option:selected').data('server');
      });

      $('#form4 #user4, #form4 #pass4').change(function() {
        form4.username = $('#form4 #user4').val();
        form4.password = $('#form4 #pass4').val();
      });

        // duo q data
        $('#form5 .item').change(function() {
          form5.item = $(this).children('option:selected').data('item');
          addPicture('#form5 .img', form5.item, form5.division);
          addPrice('#price5', form5.calculation());
        });

        $('#form5 .division').change(function() {
          form5.division = $(this).children('option:selected').data('division');
          addPicture('#form5 .img', form5.item, form5.division);
          addPrice('#price5', form5.calculation());
        });

        $('#form5 select:not(.server5)').change(function() {
          form5.addDataToPaymentSystem();
        });

        $('#form5 .server').change(function() {
          form5.server = $(this).children('option:selected').data('server');
        });

        $('#form5 #user5').change(function() {
          form5.username = $('#form5 #user5').val();
        });

  });

  var form3 = {};

  form3.prices = {
    bronze5: 3,
    bronze4: 3,
    bronze3: 3,
    bronze2: 3,
    bronze1: 3,
    silver5: 3,
    silver4: 3,
    silver3: 4,
    silver2: 5,
    silver1: 5,
    gold5: 5,
    gold4: 5,
    gold3: 6,
    gold2: 7,
    gold1: 7,
    platinum5: 8,
    platinum4: 8,
    platinum3: 9,
    platinum2: 12,
    platinum1: 13,
    diamond5: 17,
    diamond4: 18,
    diamond3: 25,
    diamond2: 28,
    diamond1: 29,
    //not valid price
    master5: 39,
    master4: 39,
    master3: 39,
    master2: 39,
    master1: 39
  }

  var calculation = function() {
    var price = form3.prices[form3.item + form3.division] * form3.amount1;
    return price;
  };


  // current league
  form3.item = $('#form3 .item option:selected').data('item');
  form3.division = $('#form3 .division option:selected').data('division');

  form3.addDataToPaymentSystem = function() {
    $('#input_business_3').val('alfonsolol94@hotmail.es');
    $('#input_name_3').val(form3.item + ' ' + form3.division);
    $('#input_currency_3').val('EUR');
    $('#input_price_3').val(calculation());
  }
  form3.addDataToPaymentSystem();

  // your server
  form3.server = $('#form3 .server option:selected').data('server');
  form3.username = $('#user3').val();
  form3.password = $('#pass3').val();

  addPicture('#form3 .img', form3.item, form3.division);

  $('#form3 .item').change(function() {
    form3.item = $(this).children('option:selected').data('item');
    addPicture('#form3 .img', form3.item, form3.division);
    addPrice('#price3',  calculation());
  });

  $('#form3 .division').change(function() {
    form3.division = $(this).children('option:selected').data('division');
    addPicture('#form3 .img', form3.item, form3.division);
    addPrice('#price3',  calculation());
  });

  $('#form3 select:not(.server3)').change(function() {
    form3.addDataToPaymentSystem();
  });

  $('#form3 .server').change(function() {
    form3.server = $(this).children('option:selected').data('server');
  });

  $('#form3 #user3, #form3 #pass3').change(function() {
    form3.username = $('#form3 #user3').val();
    form3.password = $('#form3 #pass3').val();
  });

});

////////////////////////////////////////////////////////////////////////////////////
////////Placement matches

  var form4 = {};

  form4.prices = {
    master: 10, // not valid price
    diamond: 7,
    platinum: 6,
    gold: 4,
    silver: 3.5,
    bronze: 2,
    unranked: 3
  };


  // current league
  form4.item = $('#form4 .item option:selected').data('item');

  // your server
  form4.server = $('#form4 .server option:selected').data('server');
  form4.username = $('#user4').val();
  form4.password = $('#pass4').val();

  form4.calculation = function(){
    var price = form4.prices[form4.item] * form4.amount2;
    return price;
  };

  form4.addDataToPaymentSystem = function() {
    $('#input_business_4').val('alfonsolol94@hotmail.es');
    $('#input_name_4').val(form4.item);
    $('#input_currency_4').val('EUR');
    $('#input_price_4').val(form4.calculation());
  }
  form4.addDataToPaymentSystem();

  $('#form4 select:not(.server4)').change(function() {
    form4.addDataToPaymentSystem();
  });

///////////////////////////////////////////////////////////////////////
/////////Duo q

  var form5 = {};

  form5.prices = {
    bronze5: 4,
    bronze4: 4,
    bronze3: 4,
    bronze2: 4,
    bronze1: 4,
    silver5: 5,
    silver4: 5,
    silver3: 5,
    silver2: 5,
    silver1: 6,
    gold5: 6,
    gold4: 6,
    gold3: 6,
    gold2: 6,
    gold1: 7,
    platinum5: 8,
    platinum4: 8,
    platinum3: 8,
    platinum2: 8,
    platinum1: 9,
    diamond5: 17,
    diamond4: 18,
    diamond3: 20,
    diamond2: 23,
    diamond1: 25,
    // not valid price
    master5: 39,
    master4: 39,
    master3: 39,
    master2: 39,
    master1: 39
  };

  // current league
  form5.item = $('#form5 .item option:selected').data('item');
  form5.division = $('#form5 .division option:selected').data('division');

  // your server
  form5.server = $('#form5 .server option:selected').data('server');

  // your name
  form5.username = $('#user5').val();

  form5.calculation = function(){
    var price = form5.prices[form5.item + form5.division] * form5.amount3;
    return price;
  };

  form5.addDataToPaymentSystem = function() {
    $('#input_business_5').val('alfonsolol94@hotmail.es');
    $('#input_name_5').val(form5.item + ' ' + form5.division);
    $('#input_currency_5').val('EUR');
    $('#input_price_5').val(form5.calculation);
  }
  form5.addDataToPaymentSystem();