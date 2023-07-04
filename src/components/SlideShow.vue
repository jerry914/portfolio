<template lang="pug">
div#slideshow-container
    .mySlides.mySlides1
        a(:href="jumpBar[0].link" target="blank")
            img#slideImg(:src="jumpBar[0].media.info.src")
    .mySlides.mySlides2(v-for='(jumpImage,index) in jumpBar' v-if="index!=0 &&index!= jumpBar.length-1")
        a(:href="jumpImage.link" target="blank")
            img#slideImg(:src="jumpImage.media.info.src")
    .mySlides.mySlides3
        a(:href="jumpBar[jumpBar.length-1].link" target="blank")
            img#slideImg(:src="jumpBar[jumpBar.length-1].media.info.src")
    .slideTextBlock
        h1#slideTextBlockTitle {{jumpBar[slideIndex-1].title}}
        p {{jumpBar[slideIndex-1].subtitle}}
    .dotContainer
        span.dot(v-for="(dot,index) in jumpBar" @click='currentSlide(index+1)')

</template>


<script>
var slideIndex = 1;
var slide;
export default {

    data() {
        return {
            slideIndex: 1
        }
    },
    props: ['jump-bar'],
    methods: {
        plusSlides(n) {
            this.showSlides(slideIndex += n);
        },

        currentSlide(n){
            this.showSlides(slideIndex = n);
        },

        showSlides(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            var subWidth = 14/(slides.length-2);
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            var numSubBlock = 0;
            for (i = 0; i < slides.length; i++) {
                //slides[i].style.display = "none"; 
                if(i!=slideIndex-1){
                    if(slideIndex==slides.length){
                        if(i!=0){
                            slides[i].style= "-webkit-clip-path : polygon("+(86+subWidth*numSubBlock)+"% 0, "+(86+subWidth*(numSubBlock+1))+"% 0, "+(83+subWidth*(numSubBlock+1))+"% 100%, "+(83+subWidth*numSubBlock)+"% 100%)";  //else block 
                            numSubBlock ++;
                        }
                    }
                    else{
                        if(i!=slideIndex){
                            slides[i].style= "-webkit-clip-path : polygon("+(86+subWidth*numSubBlock)+"% 0, "+(86+subWidth*(numSubBlock+1))+"% 0, "+(83+subWidth*(numSubBlock+1))+"% 100%, "+(83+subWidth*numSubBlock)+"% 100%)";  //else block 
                            numSubBlock ++;
                        }
                    }
                    
                }
            }
            if(slideIndex==slides.length){
                slides[0].style= "-webkit-clip-path : polygon(70% 0, 86% 0, 83% 100%, 75% 100%)";  //second block when slideIndex come to the end 
            }
            else{
                slides[slideIndex].style= "-webkit-clip-path : polygon(70% 0, 86% 0, 83% 100%, 75% 100%)";  //second block
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", "");
            }
            slides[slideIndex-1].style = "-webkit-clip-path : polygon(0 0, 70% 0, 75% 100%, 0 100%)";  //first block
            dots[slideIndex-1].className += "active";
            this.slideIndex = slideIndex;
        }
    },
    created() {
        slide = setInterval(() => this.plusSlides(1), 3000);
    },
    beforeUnmount(){
        clearInterval(slide);
    }
}       
</script>

<style>

#slideshow-container {
    position: relative;
    left: 0px;
    background-color: #1E4059;
    width: 50vw;
    max-height: calc( 100vw / 4); }
  
  .mySlides {
    cursor: pointer;
    overflow: hidden;
    transition: 0.4s; }
  
  .mySlides:hover {
    opacity: 0.5;
    top: -1px;
    right: 1px; }
  
  .mySlides1 {
    -webkit-clip-path: polygon(0 0, 70% 0, 75% 100%, 0 100%);
    position: absolute;
    animation-name: fade;
    animation-duration: 2s;
    animation-timing: ease-in-out;
    animation-delay: 0.2s; }
  
  .mySlides2 {
    -webkit-clip-path: polygon(70% 0, 86% 0, 83% 100%, 75% 100%);
    position: absolute;
    animation-name: fade;
    animation-duration: 2s;
    animation-timing: ease-in-out;
    animation-delay: 0.3s; }
  
  .mySlides3 {
    -webkit-clip-path: polygon(86% 0, 100% 0, 100% 100%, 83% 100%);
    animation-name: fade;
    animation-duration: 2s;
    animation-timing: ease-in-out;
    animation-delay: 0.4s; }
  
  .dotContainer {
    position: absolute;
    bottom: 35px;
    left: 48%; }
  
  .dot {
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    margin-top: 10px;
    background-color: #EE6300;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease; }
  
  .active, .dot:hover {
    background-color: #F3AA29; }
  
  .slideTextBlock {
    position: absolute;
    bottom: 5%;
    text-align: left;
    margin-left: 1%;
    background-color: #ffecbe;
    opacity: 0.75;
    padding: 10px;
    cursor: pointer;
    font-size: 1.2em;
    line-height: 2em; }
  
  #slideTextBlockTitle {
    margin: 15px;
    color: black; }
  
  .slideTextBlock:hover {
    background-color: #EE6300;
    color: #F3AA29; }
  
  @keyframes fade {
    from {
      opacity: 0; }
    to {
      opacity: 1; } }
  
  @media only screen and (min-width: 480px) {
    #slideImg {
      width: 100%; }
    .mySlides {
      width: 100%; } }
  
  @media only screen and (max-width: 480px) {
    #slideImg {
      height: 360px;
      width: 100%; }
    .mySlides {
      width: 100%;
      height: 360px; } }
  
  @keyframes entryBlock {
    from {
      opacity: 0; }
    to {
      opacity: 1; } }
  
  * {
    transition: 0.6s; }
    
</style>