window.onload = () =>{
    
    const navAnchors = document.querySelectorAll('.nav-anchor');
    
    const pageProfessionalName = document.getElementById('professionalName');
    const pageProfessionalSub = document.getElementById('professionalSub');
    const pageProfessionalDate = document.getElementById('professionalDate');                    
    const pageProfessionalSpotlightLeft = document.querySelector('.professional-spotlight-left');
    const pageProfessionalSpotlightRight = document.querySelector('.professional-spotlight-right');
    const pageProfessionalSpotlightContainer = document.getElementById('professionalSpotLight');
    const professionalDetailsContainer = document.getElementById('professionalDetails');
    const globalContainer = document.getElementById('globalContainer');

    const spotlightAnimation = pageProfessionalSpotlightContainer.animate(
        [ { opacity: 0 }, { opacity: 0.7 } ],
          { duration: 1000 }
    );

    const detailsAnimation = professionalDetailsContainer.animate(
        [ { transform: 'translateX(25%)' }, { transform: 'translateX(0%)' } ],        
          { duration: 1000, easing: 'ease-out' }
    );

    let currentPageIndex = 0;

    const singers = [
        {
            professionalName: 'Queen Madonna',
            professionalSub: 'Pop Singer',
            professionalDate: '17/04/2021',
            professionalSpotlightLeft: "./assets/model-leftside.jpg",
            professionalSpotlightRight: "./assets/model-rightside.png"
        },
        {
            professionalName: 'Princess Britney',
            professionalSub: 'Pop Singer',
            professionalDate: '16/04/2021',
            professionalSpotlightLeft: "./assets/brit-model-leftside.jpg",
            professionalSpotlightRight: "./assets/brit-model-rightside.png"
        },
        {
            professionalName: 'Diva Kali',
            professionalSub: 'Pop Singer',
            professionalDate: '15/04/2021',
            professionalSpotlightLeft: "./assets/kali-model-leftside.png",
            professionalSpotlightRight: "./assets/kali-model-rightside.png"
        }
    ]
    
    const background = [
        `radial-gradient(#2B3760, #0B1023)`,
        `radial-gradient(#4E3022, #161616)`,
        `radial-gradient(#2B4342, #161616)`
    ];
    
    //opacity: 0.7;
    //animation: fadeIn 1.5s ease-in-out; 

    navAnchors.forEach((navAnchor, index) => {
        navAnchor.addEventListener('click', function () {
            currentPageIndex = index;            
            changeAnchor(this);
            updatePage();
        });
    });

    function changeAnchor(anchor){        
        navAnchors.forEach ((element) => { element.classList.remove('active'); });
        anchor.classList.add('active');        
    }
    
    function updatePage(){      
        pageProfessionalName.innerText = singers[currentPageIndex].professionalName;
        pageProfessionalSub.innerText = singers[currentPageIndex].professionalSub;
        pageProfessionalDate.innerText = singers[currentPageIndex].professionalDate; 
        pageProfessionalSpotlightLeft.src = singers[currentPageIndex].professionalSpotlightLeft;
        pageProfessionalSpotlightRight.src = singers[currentPageIndex].professionalSpotlightRight;        
        
        globalContainer.style.background = background[currentPageIndex];

        if(spotlightAnimation.playState != "finished"){
            spotlightAnimation.cancel();
            detailsAnimation.cancel();            
        }
        
        spotlightAnimation.play();
        detailsAnimation.play();        
    } 
}