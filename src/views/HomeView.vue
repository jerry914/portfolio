<template lang="pug">
div#app(v-motion-fade)
  .container
    .info-container
        img.profile-img(:src='profileImage', alt='Profile Image')
        .personal-info
            h1 Chieh-Jui Ho 何捷睿
            p Email: jerry.ho@iss.nthu.edu.tw | Phone: +886 976792285
            br
            p Hello! I'm Jerry, a tech enthusiast with a heart for <strong>human-AI interaction</strong>, dedicated to making <strong>education</strong> and <strong>well-being</strong> better for everyone. I've ventured into the realms of AI, web development, and virtual reality, aiming to transform challenges into innovative solutions. My work spans creating engaging learning platforms to researching technologies that support mental health.

    .education
      h2 Education
      .education-details
        h3 PhD in Service Science
        p.school-name National Tsing Hua University, Taiwan (2022 - present)
        h3 BA Interdisciplinary Program of Technology and Art
        p.school-name National Tsing Hua University, Taiwan (2018 - 2022)
        p Second Specialty: Computer Science
        p Studies focused: Virtual Reality & Human-Computer Interaction
        img.education-img(src='https://raw.githubusercontent.com/jerry914/mywebsite/master/img/ipta.png')
        

    .publications
      h2 Publications
      .publications-details
        ol
            li You, C. W., Hung, M. W., Hou, C. T., <strong>Ho, C. -J.</strong>, Yuan, C. W., Bi, N., & Huang, M. C. (2023). Trigger or Treat: Using Technology to Facilitate the Perception of Cravings and Corresponding Cues for Achieving Clinical-friendly Drug Psychotherapy. Proceedings of the ACM on Human-Computer Interaction, 7(CSCW1), 1-26.
            li <strong>Ho, C.-J.</strong>, Hou, C.-T., Hung, M.-W., Yuan, C. W., Bi, N., Huang, M.-C., & You, C. (2021). CravingProbe: A system combining virtual reality and Biofeedback Technologies to Assist Drug psychotherapy. Adjunct Proceedings of the 2021 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2021 ACM International Symposium on Wearable Computers.
            li Hung, M.-W., Hou, C.-T., <strong>Ho, C.-J.</strong>, Lu, H.-S., Yuan, C. W., Bi, N., Liu, S.-W., Huang, M.-C., & You, C.-W. (2021). Challenges and opportunities in developing systems to assist patients in recovering from gambling addiction. Adjunct Proceedings of the 2021 ACM International Joint Conference on Pervasive and Ubiquitous Computing and Proceedings of the 2021 ACM International Symposium on Wearable Computers.
            li Hung, M.-W., Hou, C.-T.,<strong>Ho, C.-J.</strong> , Yuan, C. W., Bi, N., Chen, S.-H., Huang, M.-C., & You, C.-W. (2021). Exploring the opportunities and challenges of enabling clinical-friendly drug psychotherapy with Virtual Reality and Biofeedback Technologies. Extended Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems.

    .work-experience
      h2 Work Experience
      .experience-details
        .job
          h3 Communications Intern, Taiwan ASML Hsinchu (2022 - 2023)
          p Collaborated with internal divisions and external organizations to advance the company's ESG vision in community engagement through education, culture, and local outreach programs
          .job-detial-container
            img.job-detial-item.project-img(src='https://raw.githubusercontent.com/jerry914/mywebsite/master/img/ASML.jpg' style="width:50%;")
        .job
          h3 Full-end Web Developer, Consultation Center of Tsing Hua University (2022)
          p Develop a consultation and case dispatching system to speed up the case dispatching process. The front-end of the system uses the Vue.js framework; the back-end uses Node.js to build a web server.
          .job-detial-container
            p.job-detial-item <strong>Honer:</strong> CTCI Scholarship <a href="https://www.ctci.org.tw/8838/talent/ctci-scholarship/44762/44911/" target="_blank">Link</a>
        .job
          h3 
            span Frontend Developer, 
            a.job-link(href="http://www.phys.nthu.edu.tw/~aicmt/AIFR.html" target="_blank") Artificial Intelligence for Fundamental Research (AIFR) Group,
            span Taiwan (2020-2022)
          p Utilized Unity to develop a Virtual Reality system for clinical psychotherapy.
        .job
          h3 
            span Research Assistant, 
            a.job-link(href="https://nthu-ubicomp-lab.github.io/#/" target="_blank") UbiComp Lab in NTHU,
            span Taiwan (2020-2023)
          p   Collaborated with engineering team to build user-friendly AI application websites.
          .job-detial-container
            p.job-detial-item <strong>Selected Project:</strong> Exploring the Opportunities and Challenges of Enabling Clinical-friendly Drug Psychotherapy with Virtual Reality and Biofeedback Technologies <a href="https://dl.acm.org/doi/10.1145/3411763.3451585" target="_blank">Link</a>
            .video-container(style="margin:auto")
              iframe.job-detial-item(id="youtube-player-5" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="A System Design for Combining VR and Biofeedback Tech. to Assist Drug Psychotherapy (MIMSVAI 2021)" width="400" height="225" src="https://www.youtube.com/embed/mtVRF1HeZgI?si=1nJCRLwQ1jk-NMf_")
        .job
          h3 Content Associate Intern, Junyi Academy, Taiwan (2019-2021)
          p Developed online courses related to computer science, specializing in web development, Python, Scratch, microcontrollers, and IoT.
          .job-detial-container
            img.job-detial-item.project-img(src='https://raw.githubusercontent.com/jerry914/mywebsite/master/img/junyi.jpg' style="width:50%;")
    .skills
      h2 Skills
      p Full-stack development: Vue.js, Ruby, Node.js, Database control(SQL)
      p Version control - Git and Github Flow
      p Cloud development: Practiced in AWS services like EC2, lambda, ML applications
      p Interactive design: Unity (for VR projects), Python, Processing, Arduino, Raspberry Pi

</template>

<script>
import profileImage from '@/assets/profile.jpeg';
// import profileImage from '@/assets/profile.png';
export default {
  name: 'App',
  data() {
    return {
        profileImage
    }
  }
}
</script>
<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1280px;
  margin: auto;
  padding: 20px;
  text-align: left;
}

h1, h2, h3 {
  margin-bottom: 10px;
}

h1 {
  font-size: 28px;
}

h2 {
  font-size: 24px;
  color: #444;
  border-bottom: 2px solid #444;
  padding-bottom: 6px;
}

h3 {
  font-size: 20px;
  margin-top: 15px;
}

p, li {
  font-size: 16px;
  margin-bottom: 10px;
}

ul {
  list-style-position: inside;
}
.info-container {
    display: flex;
}
.personal-info {
  text-align: left;
  margin-bottom: 40px;
  padding: 10px 40px;
}
.profile-img {
  width: 200px;
  border-radius: 5px;
  margin: 0 auto 20px;
  display: block;
}

.education, .publications, .work-experience, .skills {
  margin-bottom: 20px;
}
.job-detial-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.job-detial-item {
    margin: 10px;
}
.education-img {
    width: 100%;
}
.project-img {
    margin: auto;
}
.job, .education-details, .publications-details {
  margin-left: 20px;
}

.skills p, .skills li {
  margin-bottom: 5px;
}
.job-link {
    color: #444;
}

@media screen and (max-width: 900px) {
    .info-container {
        flex-wrap: wrap;
    }
    .personal-info {
        padding: 10px 20px;
    }
    .project-img {
        width: 100% !important;
    }
}

</style>

