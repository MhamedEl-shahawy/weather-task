<template>
  <div>
  <div class="container">

            <div class="strips">
                  <div class="s-one"></div>
                  <div class="s-two"></div>
                  <div class="s-three"></div>
            </div>

            <div class="top-bar">

            <ul>

                

                  <li>
                        <div class="logo">
                              <span>Weather Channal</span>
                        </div>
                  </li>

                  <li>
                        <div class="search">
                              <i class="fa fa-search"></i>
                        </div>
                  </li>

                  <li>
                        <div class="menu-btn">
                              <span class="one"></span>
                              <span class="two"></span>
                        </div>
                  </li>

            </ul>

            </div>

            <div class="data">

            <div class="contact">
                  <span>Contact</span>
            </div>
            <div class="about">
                 <span>About us</span>
            </div>
            <div class="privacy">
                 <span>Privacy</span>
            </div>
            <div class="tag">
                  <span>You're not lucky, <br> You worth it</span>
            </div>

            <div class="year">2020</div>

            <div class="arrow-left">
                  <i class="fa fa-arrow-left"></i>
            </div>

            <div class="arrow-right">
                  <i class="fa fa-arrow-right"></i>
            </div>

            <div class="add">
                  <i class="fa fa-plus"></i>
            </div>

            </div>

         <div class="icons">
               <img src="../assets/icon_1.png" />

         </div>
         

            <div class="title">
                  <span>Weather Channel<br> Live temps</span>
            </div>
         <div class="icons left-200">
               <img src="../assets/icon_3.png" />

         </div>
            <div class="line"></div>

            

            <div class="tag-line">
                  <router-link to="/weather">
                   <a>Discover Temperatures</a>
                  </router-link>
            </div>
   <div class="icons top-200">
               <img src="../assets/icon_7.png" />

         </div>
            <div class="media">
                  <ul>
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-twitter"></i></li>
                  </ul>
            </div>

      </div>
  </div> 
</template>

<script>
  export default {
    name:"home",
    
  }
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html, body {
  margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
  font-family: 'montserrat', sans-serif;
}

.s-one {
      position: absolute;
      width: 1px;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
      left: 25%;
}

.s-two {
      position: absolute;
      width: 1px;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
      left: 50%;
}

.s-three {
      position: absolute;
      width: 1px;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
      left: 75%;
}

.top-bar ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
}

.top-bar ul li {
      list-style: none;
      line-height: 46px;
      padding: 16px 32px;
      margin: 0 16px;
}

.menu-btn {
      position: fixed;
      right: 20px;
      padding: 16px 0 0 0;
      width: 40px;
      height: 40px;
}

.one, .two {
      position: absolute;
      background: #000;
      width: 30px;
      height: 2px;
}

.two {
      margin-top: 12px;
}



.logo {
      position: fixed;
      left: 180px;
      font-family: "Charm";
      font-weight: bolder;
      font-size: 20px;
}

.search {
      position: fixed;
      right: 160px;
}

.contact,.about,.privacy {
      padding: 10px 30px;
      position: fixed;
      left: -20px;
      top: 180px;
      transform: rotate(-90deg);
}
.about{
       top:300px;
}
.privacy{
      top:400px;
      padding-top:25px;
}
.icons{
       position: fixed;
      top: 500px;
      left: 100px;
      padding: 10px 30px;
      animation: jumping 9s ease-in-out 2s infinite alternate;
      animation-delay: 1s;
      transition: all .9s ease 5s;
}
.left-200{
      left:700px;
      top:300px;
      animation-delay: 1.2s;

}
.top-200{
      left:800px;
      top:500px;
      animation-delay: 1.5s;

}
.icons img{
       max-width:100%;
       
}
.tag {
      position: fixed;
      top: 166px;
      left: 152px;
      padding: 10px 30px;
}

.year {
      position: fixed;
      top: 556px;
      left: 152px;
      padding: 10px 30px;
}

.arrow-left {
      position: fixed;
      top: 686px;
      left: 42px;
      padding: 10px 30px;
}

.arrow-right {
      position: fixed;
      top: 686px;
      left: 132px;
      padding: 10px 30px;
}

.add {
      position: fixed;
      top: 556px;
      left: 382px;
      font-size: 20px;
      padding: 10px 30px;
}

.img img {
      width: 46%;
}

.img {
      position: fixed;
      z-index: 0;
      top: 24.6%;
      left: 38%;
}

.title {
      position: fixed;
      font-size: 62px;
      position: absolute;
      top: 276px;
      left: 862px;
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 700;
      line-height: 1.15;
}

.line {
      position: fixed;
      left: 360px;
      top: 200px;
      background: #000;
      width: 180px;
      height: 1px;
}

.e-shop {
      padding: 10px 30px;
      position: fixed;
      left: 1020px;
      top: 180px;
      transform: rotate(90deg);
}

.tag-line {
      position: fixed;
      top: 490px;
      left: 692px;
      padding: 10px 30px;
      color: grey;
      cursor: pointer;
}
.tag-line a{
    text-decoration:none;
    color:#000;
} 
.media ul {
      list-style: none;
      position: fixed;
      right: 20px;
      top: 70%;
      padding: 10px 10px;
}

.media ul li {
      font-size: 18px;
      margin: 24px 0;
}

/* animations */

.title span {
      opacity: 0;
      animation: appear-text 0.0001s linear forwards;
      animation-delay: 2s;
}

.title:after {
      content: "";
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: #000;
      position: absolute;
      animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      animation-delay: 1.4s;
}

.tag-line span {
      opacity: 0;
      animation: appear-text 0.0001s linear forwards;
      animation-delay: 2.2s;
}

.tag-line:after {
      content: "";
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: #000;
      position: absolute;
      animation: rev-block 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
      animation-delay: 1.8s;
}

@keyframes rev-block {
      0% {
            left: 0%;
            width: 0%;
      }

      50% {
            left: 0;
            width: 100%;
      }

      100% {
            left: 100%;
            width: 0%;
      }
}

@keyframes appear-text {
      0% {
            opacity: 0;
      }

      100% {
            opacity: 1;
      }
}




@keyframes jumping {
      0% {
                transform: translateY(0px) translateX(0) rotate(0) scale(1);
    opacity: .8;
      }
      25%{
          transform:translateX(-10px) rotate(20deg) scale(0.8);
          opacity: .9;
      }
      50% {
            transform: translateY(-15px) translateX(-15px) rotate(10deg) scale(0.9);
            opacity: .8;
      }

      75% {
                transform: translateY(-20px) translateX(-20px) rotate(20deg) scale(0.75);
    opacity: .6;
      }
      85%{
            transform: translateY(-25px) translateX(-25px) rotate(20deg) scale(0.9);
    opacity: .7;
      }
      100%{
                transform: translateY(-15px) translateX(-15px) rotate(0) scale(0.95);
    opacity: .85;
      }
}
</style>
  