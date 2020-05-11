function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

      // innen jon az uj
      let imagesData = [{
        photo: "./images/kep1.jpg",
        title: "Canvas",
        description: "In Canvas, you play as a painter competing in an art competition."
    }, {
        photo: "./images/kep1.jpg",
        title: "Everdell",
        description: "Within the charming valley of Everdell, beneath the boughs of towering trees, among meandering streams and mossy hollows, a civilization of forest critters is thriving and expanding."
    }, {
        photo: "./images/kep2.jpg",
        title: "Teotihuacan: City of Gods",
        description: "Travel back in time to the greatest city in Mesoamerica."
    }, {
        photo: "./images/kep3.jpg",
        title: "Wingspan",
        description: "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games."
    },  {
        photo: "./images/kep4.jpg",
        title: "Spirit Island",
        description: "Spirit Island is a complex and thematic cooperative game about defending your island home from colonizing Invaders"
    }];
    
    
    //creating thumbnails
    imagesData.forEach((element, index) => {
        $('#thumbnail_container').append(`
            <div class="thumbnail" data-index=${index}>
                <img src=${element.photo} alt=${element.title} data-index=${index}>
                <div class="thumbnail_title_cont"><div class="thumbnail_title">${element.title}</div></div>
            </div>
        `);
    });
    
    
    //function to show slected image
    const loadPhoto = (photoNumber) => {
        $('#photo').attr("src", imagesData[photoNumber].photo);
        $('#title').text(imagesData[photoNumber].title);
        $('#description').text(imagesData[photoNumber].description);
         
        //highlighting selected thumbnail
        $('.thumbnail img').css('border', 'none');
        $(`.thumbnail[data-index=${photoNumber}] img`).css('border', '0.4vmin solid gray');
    }
    
    //make the info div the same width as the current image
    document.getElementById("photo").onload = () => {
        $(".info").width($("#photo").width()+"px");
        $(".info").css("display","block");
    }
    //do the same when the browser windows is resized
    window.onresize = () => {
        $(".info").width($("#photo").width()+"px");
        $(".info").css("display","block");
    }
    
    
    //initial view
    let currentPhoto = 0;
    loadPhoto(currentPhoto);
    
    
    // navigation events
    $('#left').click(() => {
        if (currentPhoto > 0) {
            currentPhoto--;
        } else {
            currentPhoto = imagesData.length - 1;
        }    
        loadPhoto(currentPhoto);
    });
    
    $('#right').click(() => {
        if (currentPhoto < 4) {
            currentPhoto++;
        } else {
            currentPhoto = 0;
        }    
        loadPhoto(currentPhoto);
    });
    
    $('.thumbnail').click(() => {
        loadPhoto($(event.target).attr('data-index'));
    });