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
                    text: 'Created: 2022 Sprint',
                    body: '<h1>Spy Light</h1><p>We turned our classroom into a MIDI instrument installation. We unplugged the daylight lamps and replaced them with lamps made of controllable LED strips. By integrating a Raspberry Pi, we gained control over the color of the LED strips.</p><p>Participants can connect to the interface via their cell phones, granting them the freedom to manipulate the light bar at will. As they make their choices, the light bar transforms, showcasing a dynamic array of colors and patterns.</p><p>But it doesn\'t stop there—music accompanies the visual display. As the light bar changes color, the music adapts in sync, creating a captivating and immersive experience.</p><p>What makes this installation truly unique is its collaborative nature. Anyone can join in, playing together to create a symphony of light and sound. It\'s an interactive and engaging art form that brings people together.</p><p>Step into the world of "Spy Light" and discover the joy of controlling light and music through your fingertips. It\'s a fusion of technology, art, and human expression, offering a transformative and mesmerizing journey.</p>'
                },
                {
                    name: 'dino-run',
                    title: 'Dino Run',
                    tags: ['#Raspberry Pi', 'Processing'],
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3naT_fbw-04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    images: [''],
                    link: '',
                    text: 'Created: 2021 Summer',
                    body: '<p>"Dino Run: Physical Edition" brings to life the exhilarating experience of Google Chrome\'s offline dinosaur game in a tangible and interactive form. This creative project combines the power of Raspberry Pi and Processing to create a physical version of the beloved dinosaur game. Get ready to ride the dinosaur, jump over cacti, and aim for a high score, but beware, hitting a cactus means game over!</p><p>Have you ever found yourself frustrated with a slow or interrupted internet connection, only to find solace in Google Chrome\'s charming offline dinosaur game? "Dino Run: Physical Edition" takes that nostalgic experience and elevates it to a whole new level.</p><p>In this physical adaptation, participants can actually ride the dinosaur as they navigate the treacherous desert landscape. Construct with a Raspberry Pi and Processing, the game environment comes to life, complete with obstacles and challenges. With each jump, participants must time their movements carefully to dodge cacti and avoid collision. A single misstep means losing the game and having to start again.</p><p>"Dino Run: Physical Edition" invites players to immerse themselves in a playful and interactive experience. The physicality of the game adds an extra layer of engagement, as participants can feel the excitement and adrenaline as they control the dinosaur\'s movements. It\'s a thrilling combination of technology, nostalgia, and physical interaction.</p><p>Whether you\'re reliving the joy of the Google Chrome dinosaur game or encountering it for the first time, "Dino Run: Physical Edition" offers a unique and captivating experience. Get ready to jump, dodge, and run as you embark on a thrilling adventure in this physical adaptation of the popular offline game. How far can you make it before the cacti bring your dino run to an end?</p>'
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
                    title: 'Impression Tsinghua - Jumping Marble',
                    tags: ['#marble',"#laser cutting", "#3D Print"],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/uF_Hw3-noXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    images: ['https://drive.google.com/uc?export=view&id=1ccDk2twyFoaDZxqSL_brrUTWVDy-w73N','https://drive.google.com/uc?export=view&id=1pJuu6KhOwv-nioM6LK_PxDXRN15QQWsd','https://drive.google.com/uc?export=view&id=1nuxZIny4eEZ0SInx0dYNbgwh07VUc_Un','https://drive.google.com/uc?export=view&id=1a7A-kPphw3uIofdz2eYBXRBV_jo2qIS1'],
                    link: 'https://techart.nthu.edu.tw/THE2019/cross-media-2019/%e8%ba%8d%e5%8b%95%e5%bd%88%e7%8f%a0/',
                    text: 'Created: 2019 Summer',
                },
                {   
                    name: 'lightArt',
                    title: 'Impression Tsinghua-Flower Tsinghua',
                    tags: ['#LED','#Arduino'],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6dERp8GAffI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    images: ['https://drive.google.com/uc?export=view&id=1uBHA-vTjDiw44ngD0f5_OYfgRDXsHoNd','https://drive.google.com/uc?export=view&id=1W_BoW9rPKLhw-KZn6e6Yhw2iOoBg-S5D'],
                    link: 'https://techart.nthu.edu.tw/THE2019/cross-media-2019/%e8%8a%b1%e8%aa%9e%e6%b8%85%e8%8f%af/',
                    text: 'Created: 2019 Summer',
                    body: ''
                },
                {
                    name: "magicClock",
                    title: "Little Ming's Magic Clock",
                    tags: ["#Processing", "#face detection"],
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/obnwbJ0qgsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: "Date of Creation: Winter 2018",
                    body: "<h3>Motivation</h3><div>One day, the teacher took the students on a field trip to a magical museum. The teacher introduced them to unique clocks that belonged to each person. The speed of the clock's hour hand would slow down as a person's intelligence quotient (IQ) increased. Everyone joyfully found their own clocks except for Little Ming. He couldn't find his and asked the teacher in distress, 'Teacher, why can't I find my clock?' After thinking for a while, the teacher suddenly exclaimed, 'Ah! I took your clock to use it as a fan...' We wanted to bring Little Ming's clock to life. After intense debates, we decided to make a simple yet challenging memory game determine the IQ and influence the clock's speed. In the game, players need to remember the positions of garden eels and click them in order. Each correct answer earns a point and advances to the next level. An incorrect answer results in the player's picture being captured, and they see themselves appearing on the virtual clock.</div>"
                },
                {
                    "name": "creator",
                    "title": "Programmatic Weaving Series",
                    "tags": ["#Processing", "#3D"],
                    "video": '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fxMRFplesrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    "text": "Date of Creation: Spring 2020",
                    "images": ["https://drive.google.com/uc?export=view&id=14h6bpPbycZU8fCrhMS9HqxzXPURiDbjp", "https://drive.google.com/uc?export=view&id=1khdeAYyQcRJyMrZvYr0UtGdzBBOUopDw", "https://drive.google.com/uc?export=view&id=1CSerdNAbRu5JlmnGje1ytBpQcjvWC9SI", "https://drive.google.com/uc?export=view&id=1jO7uNJdPmofU4z2ut65ZNg82a520CtnL", "https://drive.google.com/uc?export=view&id=1d3ekYSq0-cNzA07oKLhBp_aIeQZwwU9q"],
                    "link": "https://www.youtube.com/watch?v=kgjCyCfx-hc&list=PL16mWWvmOPO3Lmdiy2BOBM8Ey37Xx4v3e",
                    "body": "<div>This series consists of five works, each representing various blooming flowers. I believe that even in the most impoverished places, beautiful flowers can blossom.</div><h3>Work Introduction</h3><div>In the Programmatic Weaving series, I explore the intersection of technology and art to create mesmerizing three-dimensional representations of flowers. Through the power of Processing, I bring these virtual flowers to life, showcasing their delicate petals, vibrant colors, and intricate patterns.</div>"
                },
                {
                    "name": "chesweeper",
                    "title": "Periodic Table Minesweeper",
                    "tags": ["#P5.js"],
                    "video": '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cxGfMhwO3LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    "text": "Date of Creation: Summer 2018",
                    "link": "https://jerry914.github.io/Chesweeper/",
                    "body": "<div>Tired of memorizing the periodic table? Try Periodic Table Minesweeper!</div><h3>Work Introduction</h3><div>In the Periodic Table Minesweeper game, I combined the challenge of the classic Minesweeper game with the elements of the periodic table. Players can test their knowledge of the elements while having fun and strategizing to avoid mines hidden within the table.</div>"
                },
                {
                    name: 'chicken',
                    title: 'Chicken Attack',
                    video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-OftYFll5qQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    text: 'Date of Creation: Summer 2019',
                    images: ['https://drive.google.com/uc?export=view&id=1iuGmli0davOC1kt9QIKnmYKN7yczT2W5'],
                    tags: ['#Unity'],
                    body: '<div>被17年的洗腦神曲深深支配，只好來一場 Chicken Attack。</div>'
                },
                {
                    name: 'mg',
                    title: 'Arduino！',
                    tags: ['After Effects','Expression'],
                    images: ['https://drive.google.com/uc?export=view&id=1aZVbtZZ3KovhsDQboloh3c3I3oR0d37W'],
                    text: 'Date of Creation: Sprint 2020',
                    body: '<div>Arduino is like a time machine for the mind, with so many fun things to explore.</div><br><div>First time playing with Adobe AE\'s Expression, absolutely love this way of playing.</div>'
                },
                {
                    name: 'disconnect',
                    title: 'Disconnect',
                    tags: ['P5.js','Pure Data'],
                    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tYBtRFNiCSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    images: ['https://raw.githubusercontent.com/jerry914/mywebsite/master/img/av (4).jpg'],
                    text: 'Date of Creation: Sprint 2021',
                    body: '<p>"Disconnect" is an audio-visual performance that explores the concept of disconnection in our modern digital age. Through a captivating blend of visual art and audio elements, this artwork invites viewers to contemplate the effects of technology on our lives and the importance of finding moments of disconnect.</p><p>Step into a mesmerizing world where fantasy and reality converge. Experience the transformation of a small dinosaur, symbolizing the various fantasies and dreams that arise when we detach ourselves from the constant stream of digital information. The artwork serves as a reminder to embrace moments of disconnection and allow our minds to wander freely.</p><p>Utilizing the power of P5.js and Pure Data, "Disconnect" creates a multisensory experience, engaging both the visual and auditory senses. The carefully crafted visuals and synchronized audio elements take viewers on a journey of introspection and contemplation.</p>'
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