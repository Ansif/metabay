$(function(){ // Overall cdn js code inside this

  window.intercomSettings = {
  	api_base: "https://api-iam.intercom.io",
  	app_id: "kublar05"
  };

  // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/kublar05'
  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/kublar05';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

  // 29-9 Replace this function start
  function rSlider($id) {
  let rSliderWrapper = $($id);
  let rSliderInner = rSliderWrapper.children('.card-rstack-inner');
  let rSliderItems = rSliderInner.children();
  let rSliderItemsCount = parseInt(rSliderItems.length);
  var timerAnimation = '';
  let paginationWrapper = rSliderWrapper.find('.card-rstack-pagination');
  let arrowPrev = rSliderWrapper.find('.rprev');
  let arrowNext = rSliderWrapper.find('.rnext');

  if (rSliderItemsCount === 0) {
    return
  }

  // All items index init
  if (rSliderItemsCount > 1) {
    for (let i = 1; i <= rSliderItemsCount; i++) {
      rSliderInner.children('.w-dyn-list:nth-child(' + i + ')').find('.rstack-rimage').attr('data-rslider-index', i);
      // prev item index
      let prevItemNum = (i == 1) ? rSliderItemsCount : (i - 1);
      rSliderInner.children('.w-dyn-list:nth-child(' + i + ')').find('.rstack-rimage').attr('data-rslider-prev', prevItemNum);
      // next item index
      let nextItemNum = (i == rSliderItemsCount) ? 1 : (i + 1);
      rSliderInner.children('.w-dyn-list:nth-child(' + i + ')').find('.rstack-rimage').attr('data-rslider-next', nextItemNum);
    }
  }
  // Arrow
  if (rSliderItemsCount > 1) {
    let prevPagiNum = rSliderInner.children('.w-dyn-list:nth-child(1)').find('.rstack-rimage').attr('data-rslider-prev');
    let nextPagiNum = rSliderInner.children('.w-dyn-list:nth-child(1)').find('.rstack-rimage').attr('data-rslider-next');
    arrowPrev.attr('data-rslider-id', prevPagiNum);
    arrowNext.attr('data-rslider-id', nextPagiNum);
  } else {
    rSliderWrapper.find('.card-rstack-pagination').hide();
  }
  function rSliderImageFunc(pageId) {
    if (rSliderItemsCount === 1) {
      return
    }
    // Remove default classes
    for (let i = 1; i <= rSliderItemsCount; i++) {
      rSliderWrapper.find('.rstack-rimage').removeClass('active rstack-' + i);
    }
    let rSliderActive = rSliderWrapper.find('.rstack-rimage[data-rslider-index="' + pageId + '"]');
    let rSliderPrevNum = rSliderActive.attr('data-rslider-prev');
    let rSliderNextNum = rSliderActive.attr('data-rslider-next');
    rSliderActive.addClass('active rstack-1');
    var sq;2===rSliderItemsCount&&(sq=[{1:"rstack-1",2:"rstack-2"},{1:"rstack-2",2:"rstack-1"}]),3===rSliderItemsCount&&(sq=[{1:"rstack-1",2:"rstack-2",3:"rstack-3"},{1:"rstack-3",2:"rstack-1",3:"rstack-2"},{1:"rstack-3",2:"rstack-2",3:"rstack-1"}]),4===rSliderItemsCount&&(sq=[{1:"rstack-1",2:"rstack-2",3:"rstack-3",4:"rstack-4"},{1:"rstack-4",2:"rstack-1",3:"rstack-2",4:"rstack-3"},{1:"rstack-3",2:"rstack-4",3:"rstack-1",4:"rstack-2"},{1:"rstack-4",2:"rstack-3",3:"rstack-2",4:"rstack-1"}]),5===rSliderItemsCount&&(sq=[{1:"rstack-1",2:"rstack-2",3:"rstack-3",4:"rstack-4",5:"rstack-5"},{1:"rstack-5",2:"rstack-1",3:"rstack-2",4:"rstack-3",5:"rstack-4"},{1:"rstack-4",2:"rstack-5",3:"rstack-1",4:"rstack-2",5:"rstack-3"},{1:"rstack-3",2:"rstack-4",3:"rstack-5",4:"rstack-1",5:"rstack-2"},{1:"rstack-2",2:"rstack-3",3:"rstack-4",4:"rstack-5",5:"rstack-1"}]),6===rSliderItemsCount&&(sq=[{1:"rstack-1",2:"rstack-2",3:"rstack-3",4:"rstack-4",5:"rstack-5",6:"rstack-6"},{1:"rstack-6",2:"rstack-1",3:"rstack-2",4:"rstack-3",5:"rstack-4",6:"rstack-5"},{1:"rstack-5",2:"rstack-6",3:"rstack-1",4:"rstack-2",5:"rstack-3",6:"rstack-4"},{1:"rstack-4",2:"rstack-5",3:"rstack-6",4:"rstack-1",5:"rstack-2",6:"rstack-3"},{1:"rstack-3",2:"rstack-4",3:"rstack-5",4:"rstack-6",5:"rstack-1",6:"rstack-2"},{1:"rstack-2",2:"rstack-3",3:"rstack-4",4:"rstack-5",5:"rstack-6",6:"rstack-1"}]);
    let currentSliderIndex = (parseInt(pageId) - 1);
    let sliderSq = sq[currentSliderIndex];

    Object.keys(sliderSq).forEach(function(key) {
      setTimeout(function() {
        rSliderWrapper.find('.rstack-rimage[data-rslider-index="' + key + '"]').addClass(sliderSq[key]);
      }, 200);            
    });
    arrowPrev.attr('data-rslider-id', rSliderPrevNum);
    arrowNext.attr('data-rslider-id', rSliderNextNum);
  }
  if ($(window).width() > 767) {
    var itemIndex = 1;
    timerAnimation = setInterval(function() {
      itemIndex++;
      if (itemIndex > rSliderItemsCount) {
        itemIndex = 1;
      }
      rSliderImageFunc(itemIndex);
    }, 3000);
  }
  $(document).on('click', $id + ' .rnext, ' + $id + ' .rprev', function(e) {
    e.preventDefault();
    clearInterval(timerAnimation);
    let pageId = $(this).attr('data-rslider-id');
    rSliderImageFunc(pageId);
  });
  if ($(window).width() < 768) {
    $(document).on('swiped-left', $id, function(e) {
      $($id + ' .rnext').trigger('click');
    });
    $(document).on('swiped-right', $id, function(e) {
      $($id + ' .rprev').trigger('click');
    });
  }
  }   
  // 29-9 Replace this function end

  $(function() {
      //*************************************************************
      // Perk slider
      //*************************************************************
                 
   if ($('#perk-slider').length !== 0) { 
      var perkSlider = $('#perk-slider').owlCarousel({
          margin: 0,
          center: false,
          loop: true,
          dots: true,
          items: 1,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          mouseDrag: false,
          touchDrag: false,
          dotsContainer: ".perk-trigger-wrap"
      });
      $(".perk-trigger-link").on('click', function(e) {
          e.preventDefault();
          let $this = $(this);
          let id = $this.attr('data-link');
          let slideTo = $this.attr('data-slide-no');
          $('.perk-trigger-link').removeClass('active');
          $this.addClass('active');
          perkSlider.trigger('to.owl.carousel', [slideTo, 300]);

      });
      // Go to the next item
      $('.perk-slider-left-arrow').on('click', function() {
          // console.log($(this).index());
          perkSlider.trigger('prev.owl.carousel');
      });
      // Go to the previous item
      $('.perk-slider-right-arrow').on('click', function() {
          perkSlider.trigger('next.owl.carousel');
      }); 
  }
  //*************************************************************
  // Releted slider
  //*************************************************************
  if ($('#related-slider').length !== 0) {
  var relatedSlider = $('#related-slider').owlCarousel({
    margin: 0,
    center: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  // Go to the next item
  $('.slider-left-arrow').on('click', function() {
    relatedSlider.trigger('prev.owl.carousel');
  });
  // Go to the previous item
  $('.slider-right-arrow').on('click', function() {
    relatedSlider.trigger('next.owl.carousel');
  });
  }
  //*************************************************************
  // Rarity slider
  //*************************************************************
  if ($('#rarity-content-slider').length !== 0) {
  var raritySlider = $('#rarity-content-slider').owlCarousel({
    margin: 0,
    center: false,
    loop: true,
    dots: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    dotsContainer: '.rarity-small-image-wrap'
  });

  $(".rarity-small-image-wrap a").on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    let slideTo = $this.attr('data-slide-no');
    $('.rarity-small-image-wrap > a').removeClass('active');
    $this.addClass('active');
    raritySlider.trigger('to.owl.carousel', [slideTo, 300]);
  });
  raritySlider.on('changed.owl.carousel', function(event) {
    let idx = event.item.index;
    let id = $('.owl-item').eq(idx).find('.rarity-content-item').attr('id');
    
    $('.rarity-large-image').removeClass('active');
    $("." + id + "-image").addClass('active');
  });

  // Go to the next item
  $('.rarity-slider-left-arrow').on('click', function() {
    // console.log($(this).index());
    raritySlider.trigger('prev.owl.carousel');
  });
  // Go to the previous item
  $('.rarity-slider-right-arrow').on('click', function() {
    raritySlider.trigger('next.owl.carousel');
  });
  }
  //*************************************************************
  // toggle button
  //*************************************************************
  $(".toggle-button").click(function() {
  $(this).text(function(i, text) {
    return text === "See Less -" ? "See All +" : "See Less -";
  })
  });
  //*************************************************************
  // collection filter items
  //*************************************************************
  $(".all-link-wrap > .all-link").addClass('is-active');
  $(".nft-collection-item > .filter-link").on('click', function() {
  if ($(".all-link-wrap > .all-link").hasClass('is-active')) {
    $(".all-link-wrap > .all-link").removeClass('is-active')
  }
  });
  $($(".all-link-wrap > .all-link")).on('click', function() {
  if ($(this).hasClass('is-active')) {} else {
    $(".all-link-wrap > .all-link").addClass('is-active');
  }
  });
  //*************************************************************
  // collection url fix for #perks-section
  //*************************************************************
  if ($(".collection-item-button-wrap").length !== 0) {
  let target = $(".collection-item-button-wrap").find('a.perk-target-button');
  target.each(function() {
    let link = $(this).attr('href');
    $(this).attr('href', link + '#perks-section');
  });
  }
  });

  //*************************************************************
  // Slider collection url fix for #perks-section
  //*************************************************************        
  if ($("a.view-perks-collection").length !== 0) {
  let target = $("a.view-perks-collection");
  target.each(function() {
  let link = $(this).attr('href');
  $(this).attr('href', link + '#perks-section');
  });
  }
  //*************************************************************
  // Fixed header function
  //*************************************************************
  $('body').addClass('header-fixed-active');
  $(window).scroll(function() {
  if ($(document).scrollTop() > 120) {
      $('.header-wrap').addClass('header-hidden').removeClass('header-visible');
  } else {
      $('.header-wrap').addClass('header-visible').removeClass('header-hidden');
  }
  });
  let oldValue = 0;
  $(window).scroll(function() {
  newValue = window.pageYOffset;
  if(oldValue - newValue < 0){
      $('body').addClass('header-fixed-deactive').removeClass('header-fixed-active');
      $('body').removeClass('is-sticky');
  } else if(oldValue - newValue > 0){
      $('.header-wrap').addClass('header-visible').removeClass('header-hidden');
      $('body').addClass('header-fixed-active').removeClass('header-fixed-deactive');
      $('body').addClass('is-sticky');
  }
  oldValue = newValue;
  });
  $(window).scroll(function() {
  if ($(document).scrollTop() < 121) {
      $('body').removeClass('is-sticky');
  } else {   
  }
  });

  const provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com');
  const abi = [{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_SUPPLY",
      "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "price",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unclaimedSupply",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  // Here you go
  $(function() {
    // API Keys
    const address_data = [{
        'name': 'Wukong',
        'id': '0x98896EcA32a1065b0347328fb326343F3AA90D66'
      }
    ]
    // Utility func
    function get_address_data(name) {
      return address_data.filter(
        function(address_data) {
          return address_data.name == name
        }
      );
    }
    if ($(document).find('.nft-column').length !== 0) {
      $(document).find('.nft-column').each(function() {
        let $this = $(this);
        $this.addClass('added');
        let target_name_wrapper = $this.find('.target-client-name');
        let target_name = target_name_wrapper.text();
        let contact_info = get_address_data(target_name);
        if(typeof(contact_info[0]) === "undefined") return;
        let contact_info_id = contact_info[0].id;
        let get_info = new ethers.Contract(contact_info_id, abi, provider);
        let result = async () => {
          let name = await get_info.name();
          let maxSupply = await get_info.MAX_SUPPLY();
          let totalSupply = await get_info.totalSupply();
          let price = (await get_info.price() * 1e-6);
          let unclaimed = maxSupply - totalSupply;

          //$this.find('.name').text(name);
          if (parseInt(price) > 0) {
            $this.find('.price').text(price);
          } else {
            $this.find('.price').text('Free');
          }
          $this.find('.minted').text(totalSupply);
          $this.find('.supply').text(maxSupply);
          $this.find('.unclaimed').text(unclaimed);
          $this.find('.supply-with-unclaimed').text(unclaimed + '/' + maxSupply);
        }
        result();
      });
    }
  });

  // All coming soon popup codes here.
  $('.notify-popup-link-alt').each(function(){
    let name = $(this).parents('.item-slider-content-wrap').find('.name').text();

    if( name.length > 0 ) {
      $(this).attr('data-target-name', name);
    }
  });

  $('.notify-popup-link-alt').each(function(){
    let name = $(this).parents('.collection-list-item').find('.name').text();

    if( name.length > 0 ) {
      $(this).attr('data-target-name', name);
    }
  });

  $('.notify-popup-link-alt').each(function(){
    let name = $(this).parents('.rstack-rimage').find('.name').text();

    if( name.length > 0 ) {
      $(this).attr('data-target-name', name);
    }
  });
    
  $('.notify-popup-link-alt').each(function(){
    let name = $(this).parents('.drop-single-content-wrap').find('.name').text();

    if( name.length > 0 ) {
      $(this).attr('data-target-name', name);
    }
  });

  $('.notify-popup-link-alt').on('click', function(e){
    e.preventDefault();

    let id = $(this).attr('data-id');
    let targetId = $(this).attr('data-target-id');
    let creatorName = $(this).attr('data-target-name');
    
    $.magnificPopup.open({
      items: {
        src: '#' + targetId,
        type: 'inline',
        midClick: true
      }                     
    }, 0);

    setTimeout(function(){
      $('#Creator-Name').attr('value', creatorName);
    }, 2000);

  });

}); // Overall cdn js code inside this