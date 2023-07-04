<template lang="pug">
#IntroPage
    router-link(to='/')
        .introBw
    .introContainer
        router-link(to='/')
            .exitBtn X
        h1 {{pageDatas[idx].title}}
        .tagContainer
            h3.tag(v-for="tag in pageDatas[idx].tags")  {{tag}} | 
        .youtube(v-if="pageDatas[idx].video" v-html="pageDatas[idx].video")
        a#myhref(v-if="pageDatas[idx].link" :href="pageDatas[idx].link" target="blank") Link
        p {{pageDatas[idx].text}}
        p(v-if="pageDatas[idx].Authors") Authors: {{pageDatas[idx].Authors}}
        .htmlContainer(v-if="pageDatas[idx].body" v-html="pageDatas[idx].body")
        br
        img.images(v-for="img in pageDatas[idx].images" :src="img")
</template>

<script>
export default {
    data() {
        return {
            idx: 0,
            pageDatas: [
                {
                    name: 'error',
                    title: 'Hi! Something went wrong, please go back!',
                },
                {
                    name: 'homo-vegetation',
                    title: 'Homo Vegetation',
                    tags: ['#Raspberry Pi','#Motor Control'],
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p0Bj8D2mRLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    Authors: 'DSU / Jerry / Lihan',
                    images: ['https://mag.clab.org.tw/wp-content/uploads/2021/04/I2A4149.jpg'],
                    link: 'https://mag.clab.org.tw/clabo-wave/homo-vegetation/',
                    text: 'Created: 2021 Spring',
                    body: '<p>Introduction:</p><p>"Homo Vegetation" is a captivating art installation that explores the interplay between language, emotions, and the natural world. Using Raspberry Pi and motor control systems, this interactive installation responds to viewers\' Twitter comments, triggering the watering of plants with pH solutions based on the sentiment of the messages. Experience how words can shape and impact a living creature in this thought-provoking installation.</p><p>In "Homo Vegetation," viewers are invited to engage with a Twitter-based interface, where their comments directly influence the well-being of the garden\'s plants. Each message is analyzed using sentiment analysis techniques, determining its emotional tone. Positive or uplifting comments result in the plants receiving a nutrient-rich, pH-balanced solution, while negative or critical remarks lead to a deviation from the plants\' ideal conditions.</p><p>This interactive experience prompts reflection on the power of language and its impact on the natural world. "Homo Vegetation" serves as a reminder of the interconnectedness between our words, emotions, and the well-being of the environment. Explore how your comments can influence and shape a living ecosystem in this captivating and immersive installation.</p>'
                },
                {
                    name: 'phenomenon-monitoring',
                    title: 'Phenomenon Monitoring',
                    tags: ['#Virtual Reality','#Unity'],
                    Authors: 'Jerry / Miko',
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/B-TcxzfviaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    images: [],
                    text: 'Created: 2022 Summer',
                    body: '<p>Introduction: "Phenomenon Monitoring" is an innovative art installation that merges the realms of virtual reality and tangible installations to create a captivating experience for participants. Step into a virtual world where you navigate through intricately designed routes, all within the confines of a small square of physical space in the real world.</p><p>In this immersive installation, participants are transported into a digital landscape through the power of virtual reality. Equipped with VR headsets and controllers, they embark on a journey where their movements and interactions are intricately mapped to the virtual environment. Despite the limited physical space, the virtual world opens up limitless possibilities for exploration and discovery.</p><p>Within this confined square of space, participants encounter mesmerizing phenomena and intriguing landscapes, defying the boundaries of physical reality. Each route presents a unique and mesmerizing experience, from surreal landscapes to mind-bending illusions, inviting participants to question the nature of perception and reality itself.</p><p>"Phenomenon Monitoring" offers an opportunity for participants to explore the interplay between physical limitations and virtual possibilities. By confining the physical space, the installation challenges our preconceived notions of the boundaries that define our reality. It invites participants to question how our perception of space and movement can be expanded and transformed within the realm of virtuality.</p>'
                },
                {
                    name: 'spy-light',
                    title: 'Spy Light',
                    tags: ['#Raspberry Pi', 'websocket', 'P5.js','#LED strip'],
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RT_9gS8ZfZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    Authors: 'Jerry / Heidi',
                    images: [],
                    link: '',
                    text: 'Created: 2022 Summer',
                    body: ''
                },
                {
                    name: 'dino-run',
                    title: 'Dino Run',
                    tags: ['#Raspberry Pi', 'Processing'],
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3naT_fbw-04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    images: [''],
                    link: '',
                    text: 'Created: 2022 Summer',
                    body: ''
                },
                {   
                    name: 'myFriend',
                    title: 'Soulmate in Motion',
                    tags: ['#Arduino','#3D Print',"#woodworker"],
                    images: ['https://drive.google.com/uc?export=view&id=1cHglteZrI0JieJ-n7Bfj2fB6suyemkII'],
                    link: 'https://sites.google.com/gapp.nthu.edu.tw/designhumanfactors2018-1/%E4%BD%95%E6%8D%B7%E7%9D%BF?authuser=0',
                    text: 'Created: 2018 Winter',
                    body: '<h3>Introduction:</h3><div>"Soulmate in Motion" is a captivating art installation that explores the intricate relationship between human emotions and the desire for a meaningful connection. Created by an artist with a passion for Arduino, 3D printing, and woodworking, this artwork delves into the complexities of human interaction and the longing for a genuine friend.</div><br><div>The artist\'s introspective nature and difficulty in relating to others in the real world serve as the inspiration behind this mesmerizing creation. Faced with the futility of daydreaming, the artist embarks on a personal journey to manifest their ideal companion. Using a combination of innovative techniques, the artist crafts a sentient sculpture that becomes their trusted confidant.</div><br><div>At the core of the installation lies a red LED lamp, pulsating in synchronization with a simulated heartbeat. This dynamic light display not only symbolizes the presence of a genuine companion but also instills a sense of security for the artist. The 3D-printed heart shape embodies the emotional essence of the artwork, showcasing the artist\'s desire for a heartfelt connection.</div><br><div>The meticulously designed structure features three stepping motors, reminiscent of kite lines, which suspend the heart-shaped sculpture in mid-air. Through careful control and precise movements, the artwork glides gracefully and leisurely, evoking a serene and contemplative atmosphere. This deliberate motion allows the artist to grasp and comprehend the actions and intentions of their artificial companion, reinforcing the sense of connection and understanding.</div><br><div>With "Soulmate in Motion," the artist delves into the intricacies of human relationships, expressing their yearning for an authentic bond. The artwork invites viewers to reflect on their own experiences, pondering the complexities of human nature and the longing for a meaningful connection in a world filled with uncertainty.</div> <div>Through a harmonious blend of technology, craftsmanship, and artistic expression, "Soulmate in Motion" offers a profound exploration of the human condition, revealing the artist\'s desire for a genuine connection and their quest for understanding in an increasingly complex world.</div>'
                },
                {   
                    name: 'marble',
                    title: '印象清華-躍動彈珠',
                    tags: ['#會動','#marble','#凸輪軸',"#woodworker"],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/uF_Hw3-noXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    images: ['https://drive.google.com/uc?export=view&id=1ccDk2twyFoaDZxqSL_brrUTWVDy-w73N','https://drive.google.com/uc?export=view&id=1pJuu6KhOwv-nioM6LK_PxDXRN15QQWsd','https://drive.google.com/uc?export=view&id=1nuxZIny4eEZ0SInx0dYNbgwh07VUc_Un','https://drive.google.com/uc?export=view&id=1a7A-kPphw3uIofdz2eYBXRBV_jo2qIS1'],
                    link: 'https://techart.nthu.edu.tw/THE2019/cross-media-2019/%e8%ba%8d%e5%8b%95%e5%bd%88%e7%8f%a0/',
                    text: '製作日期：2019夏'
                },
                {   
                    name: 'lightArt',
                    title: '印象清華-花語清華',
                    tags: ['#LED','#Arduino'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6dERp8GAffI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    images: ['https://drive.google.com/uc?export=view&id=1uBHA-vTjDiw44ngD0f5_OYfgRDXsHoNd','https://drive.google.com/uc?export=view&id=1W_BoW9rPKLhw-KZn6e6Yhw2iOoBg-S5D'],
                    link: 'https://techart.nthu.edu.tw/THE2019/cross-media-2019/%e8%8a%b1%e8%aa%9e%e6%b8%85%e8%8f%af/',
                    text: '製作日期：2019夏',
                    body: '<div>負責燈光製作，第一次嘗試控制大量LED，得到超多慘痛教訓，參展真是太有趣了。</div>'
                },
                {
                    name: 'magicClock',
                    title: '小明的魔法時鐘',
                    tags: ['#Processing','#face detection'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/obnwbJ0qgsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2018冬',
                    body: '<h3>作品動機</h3><div>有一天，老師帶學生們去一座神奇的博物館戶外教學，老師介紹這裡有屬於每個人的獨一無二的時鐘，時針的轉速會隨著一個人的智商越高而越慢。每個人都快樂地找到屬於自己的時鐘，只有小明一直找不到，他苦惱地問老師：「老師老師，我怎麼都找不到我的時鐘？」老師想了很久，突然大喊一聲：「啊！你的時鐘被我拿來當電風扇了……」我們想讓小明的時鐘實現，經歷了激烈的爭辯，決定讓簡單又不失難度的記憶遊戲成為決定智商的依據，並影響時鐘轉速。遊戲時玩家須記住花園鰻出現的位置，答題時照順序點擊即可，答對可得一分並進入下一關，答錯會被擷取頭像，然後看到自己出現在虛擬時鐘上。</div>'
                },
                {
                    name: 'creator',
                    title: '程式織花系列',
                    tags: ["#Processing",'#3D'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fxMRFplesrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2020春',
                    images: ['https://drive.google.com/uc?export=view&id=14h6bpPbycZU8fCrhMS9HqxzXPURiDbjp','https://drive.google.com/uc?export=view&id=1khdeAYyQcRJyMrZvYr0UtGdzBBOUopDw','https://drive.google.com/uc?export=view&id=1CSerdNAbRu5JlmnGje1ytBpQcjvWC9SI','https://drive.google.com/uc?export=view&id=1jO7uNJdPmofU4z2ut65ZNg82a520CtnL','https://drive.google.com/uc?export=view&id=1d3ekYSq0-cNzA07oKLhBp_aIeQZwwU9q'],
                    link: 'https://www.youtube.com/watch?v=kgjCyCfx-hc&list=PL16mWWvmOPO3Lmdiy2BOBM8Ey37Xx4v3e',
                    body: '<div>這系列一共有五部作品，分別代表各種盛開的花朵。我相信，不管是再多貧脊的地方，都能綻放出美麗的花朵。</div>'
                },
                {
                    name: 'chesweeper',
                    title: '週期表踩地雷',
                    tags: ["#P5.js"],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cxGfMhwO3LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2018夏',
                    link: 'https://jerry914.github.io/Chesweeper/',
                    body: '<div>背週期表太無聊？試試週期表踩地雷！</div>'
                },
                {
                    name: 'chicken',
                    title: 'Chicken Attack',
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-OftYFll5qQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: '製作日期：2019夏',
                    images: ['https://drive.google.com/uc?export=view&id=1iuGmli0davOC1kt9QIKnmYKN7yczT2W5'],
                    tags: ['#Unity'],
                    body: '<div>被17年的洗腦神曲深深支配，只好來一場 Chicken Attack。</div>'
                },
                {
                    name: 'mg',
                    title: 'Arduino！',
                    tags: ['After Effects','Expression'],
                    images: ['https://drive.google.com/uc?export=view&id=1aZVbtZZ3KovhsDQboloh3c3I3oR0d37W'],
                    text: '製作日期：2020春',
                    body: '<div>Arduino簡直是精神時光屋，有好多值得玩樂的事物。</div><br><div>第一次玩Expression，太喜歡這個玩法了。</div>'
                },
                {
                    name: 'disconnect',
                    title: 'Disconnect',
                    tags: ['P5.js','Pure Data'],
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tYBtRFNiCSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    images: ['https://raw.githubusercontent.com/jerry914/mywebsite/master/img/av (4).jpg'],
                    text: '製作日期：2021春',
                    body: ''
                }
            ]
        }
    },
    created(){
        this.findIdx(this.$route.params.name);
        window.scrollTo(0,0);
    },
    methods: {
        backHome: function(){
            this.$router.path=({path: ''});
        },
        findIdx(name){
            for(var i=0;i<this.pageDatas.length;i++){
                if(name==this.pageDatas[i].name){
                    this.idx=i;
                    break;
                }
            }

        }
    }
}
</script>
<style scoped>
.introBw {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #222;
  opacity: 0.6;
  z-index: 1; }

.introContainer {
  position: absolute;
  top: 100px;
  left: calc( 10% - 50px);
  padding: 50px;
  width: 80%;
  background-color: white;
  z-index: 2; }

.exitBtn {
  position: absolute;
  clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
  width: 100px;
  height: 60px;
  top: 0;
  right: 0;
  background-color: #F3AA29;
  color: #415270;
  font-size: 40px;
  line-height: 60px;
  transition: 0.7s;
  cursor: pointer; }
  .exitBtn:hover {
    color: #EE6300;
    width: 150px;
    clip-path: polygon(0% 0%, 100% 0, 100% 100%, 20% 100%); }

.tagContainer {
  margin: 20px; }

.tag {
  display: inline; }

#myhref {
  text-decoration: none;
  color: #F3AA29;
  display: block;
  margin: 20px; }

.youtube {
  display: block;
  margin: auto;
  margin-bottom: 20px;
  width: 640px;
  height: 360px; }

@media only screen and (min-width: 640px) {
  .youtube {
    width: 640px;
    height: 360px; } }

@media only screen and (max-width: 640px) {
  .youtube {
    position: relative;
    left: 0;
    width: 100%;
    height: 60vw; }
  .images {
    width: 100%;
    height: auto; } }

.images {
    width: 60%;
    height: auto;
}
.htmlContainer {
  text-align: left;
  width: 80%;
  margin: auto; }

</style>