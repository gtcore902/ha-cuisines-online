// Management of mainView Image
window.addEventListener('load', function(e) {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      document.getElementById("leftEffect").style.transform = "scaleX(1)";
      document.getElementById("rightEffect").style.transform = "scaleX(1)";
      document.getElementById("topEffect").style.transform = "scaleY(1)";
    } else if (window.scrollY == 0) {
      document.getElementById("leftEffect").style.transform = "scaleX(0)";
      document.getElementById("rightEffect").style.transform = "scaleX(0)";
      document.getElementById("topEffect").style.transform = "scaleY(0)";
    }
  });
});

// Mobile management navigation button
window.addEventListener('load', () => {
  let toggleButton = document.getElementById('toggleNav');
  let navigationMenu = document.querySelector('.navigation');
  toggleButton.addEventListener('click', () => {
    if (!toggleButton.classList.contains('active')) {
      toggleButton.classList.add('active');
    } else if (toggleButton.classList.contains('active')) {
      toggleButton.classList.remove('active');
    }
    if (!navigationMenu.classList.contains('toggle')) {
      navigationMenu.style.transform = 'scaleY(1)';
      navigationMenu.classList.add('toggle')
    }
    else if(navigationMenu.classList.contains('toggle')) {
      navigationMenu.style.transform = 'scaleY(0)';
      navigationMenu.classList.remove('toggle')
    }
  });
  let liensClicked = document.querySelectorAll('li');
  for (var element of liensClicked) {
    element.addEventListener('click', () => {
      let screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenSize <= 767) {
        navigationMenu.style.transform = 'scaleY(0)';
        navigationMenu.classList.remove('toggle');
        toggleButton.classList.remove('active');
      }
    });
  }
  document.addEventListener('scroll', () => {
    let screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenSize <= 767) {
      navigationMenu.style.transform = 'scaleY(0)';
      navigationMenu.classList.remove('toggle');
      toggleButton.classList.remove('active');
    }
  });
});

// Scroll into view
window.addEventListener('load', () => {
  let navigationLink = document.querySelectorAll('.navigationLink');
  for (var element of navigationLink) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      let destination = document.getElementById(e.target.innerHTML);
      destination.scrollIntoView();
    });
  }
  let topLink = document.querySelector('.topLink');
  topLink.addEventListener('click', function(e) {
    window.scrollTo(0, 0);
  });
  document.querySelector('.scrollSvg').addEventListener('click', function() {
    document.getElementById('présentation').scrollIntoView();
  });
});

// management upArrow scroll up
window.addEventListener('load', () => {
  document.addEventListener('scroll', () => {
  let upArrow = document.getElementById('upArrow');
  // console.log(upArrow);
  if (window.scrollY <= 0) {
    upArrow.style.opacity = 0;
    upArrow.style.visibility = "hidden";
  } else if(window.scrollY >= 500) {
    upArrow.style.opacity = 1;
    upArrow.style.visibility = "inherit";
  }
})
  upArrow.addEventListener('click', () => {
      window.scrollTo(0, 0);
    })
})

// encode script email function
window.addEventListener("load", function () {
      let target = document.querySelectorAll('.mailJavascript');
      for (var element of target) {
        let name = "fake" ;
        let domain = "fakemail.com" ;
        let newAhref = document.createElement('a');
        newAhref.style.textDecoration = "none";
        newAhref.style.color = "inherit";
        newAhref.style.display = "inline-block";
        newAhref.style.animation = "none";
        newAhref.href = "mailto:" + name + '@' + domain;
        newAhref.innerHTML = name + '@' + domain;
        element.appendChild(newAhref);
      }
    })

// Animate element on scroll
window.addEventListener('load', function() {
  let sizePage = window.innerHeight;
  let animatable = document.querySelectorAll('.animatable');
  document.addEventListener('scroll', function() {
    for (var element of animatable) {
      if (element.getBoundingClientRect().top + 60 <= sizePage) {
        element.classList.add('fadeInUp');
      }
    }
  });
  // play video on scroll
  let video = document.querySelector('video');
  let witness = false;
  document.addEventListener('scroll', function() {
    if (video.getBoundingClientRect().bottom <= sizePage) {
      if (witness == false) {
        video.play().then(witness = true);
      }
    }
    // if video offside top
    if (video.getBoundingClientRect().bottom < 0) {
      video.pause();
    }
    // if video offside bottom
    if (video.getBoundingClientRect().top > sizePage) {
      video.pause();
    }
  });
});

Splitting();


// if max width screen 767px set attribut eager to img grid3d for scroll snap
window.addEventListener('load', function() {
  let screenSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let sizePage = window.innerHeight;
  let firstImg = document.querySelector('.one > img');
  let tabImgGridReal = document.querySelectorAll('.one > img, .two > img, .three > img, .four > img, .five > img, .six > img, .seven > img');
  if (screenSize <= 767) {
      document.addEventListener('scroll', function() {
        if (firstImg.getBoundingClientRect().top <= sizePage) {
          for (var element of tabImgGridReal) {
            if (element.getBoundingClientRect().top <= sizePage) {
              element.setAttribute('loading', "eager");
            }
          }
        }
      });
  }
});
