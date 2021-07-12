<template>
<div>

        <div class="search-container-tags">
            <div id="search-column-1">

            </div>
            <div id="search-column-2">

            </div>
            <div id="search-column-3">

            </div>  
    </div>
    <div class="carous">
           <swiper
            :slides-per-view="6"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            >   
                <swiper-slide><img src="../../src/assets/ics/carrot.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/apple.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/bananas.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/carrot.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/apple.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/bananas.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/carrot.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/apple.png" alt=""></swiper-slide>
                <swiper-slide><img src="../../src/assets/ics/bananas.png" alt=""></swiper-slide>
        </swiper>
    </div>
     
</div>

</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

export default {
    name: 'Tag',
    components:{
          Swiper,
      SwiperSlide,
    },
    data: function(){
        return{
            images: [
                {id: 1, src: "https://source.unsplash.com/random/400x520"},
                {id: 2, src: "https://source.unsplash.com/random/400x620"},
                {id: 3, src: "https://source.unsplash.com/random/400x730"},
                {id: 4, src: "https://source.unsplash.com/random/400x840"},
                {id: 5, src: "https://source.unsplash.com/random/500x660"},
                {id: 6, src: "https://source.unsplash.com/random/500x720"},
                {id: 7, src: "https://source.unsplash.com/random/500x830"},
                {id: 8, src: "https://source.unsplash.com/random/500x930"},
                {id: 9, src: "https://source.unsplash.com/random/300x430"},
                {id: 10, src: "https://source.unsplash.com/random/300x430"},
                {id: 11, src: "https://source.unsplash.com/random/300x530"},
                {id: 12, src: "https://source.unsplash.com/random/300x630"},
                {id: 13, src: "https://source.unsplash.com/random/300x730"},
                {id: 14, src: "https://source.unsplash.com/random/600x730"},
                {id: 15, src: "https://source.unsplash.com/random/600x830"},
                {id: 16, src: "https://source.unsplash.com/random/600x900"},
                {id: 17, src: "https://source.unsplash.com/random/700x800"},
            ],
            icons:[
                {id: 1, src: '/src/assets/ics/apple.png' },
                {id: 2, src: '/src/assets/ics/carrot.png' },
                {id: 3, src: '/src/assets/ics/bananna.png' },
                {id: 1, src: '/src/assets/ics/apple.png' },
                {id: 2, src: '/src/assets/ics/carrot.png' },
                {id: 3, src: '/src/assets/ics/bananna.png' },
            ],
            title: 
            `
            <div>
                <span class="small-dot"></span> 
                <span class="small-dot"></span> 
                <span class="small-dot"></span> 
                <span class="small-dot"></span>
                <span class="small-dot"></span>
                <span class="small-dot"></span>
                <span class="small-dot"></span>
            </div>   
            <span>Ancebote</span>
            `,
        }
    },
    mounted: function(){
        this.fillSearchInput();
    },
    methods:{
        fillSearchInput: function(){
            let searchCounter = 1;
            let column = '';
            document.querySelector('#search-column-2').innerHTML+= `<div class="search-page-title-life">${this.title}</div>`;
            this.images.forEach(item => {
                if(searchCounter < 3){
                    column = document.querySelector('#search-column-' + searchCounter);
                    column.innerHTML += 
                    `
                    <div class="inner-div">
                        <a href="#"><img src="${item.src}" alt="${item.id}"></a>
                    </div>
                    `;
                    searchCounter++;
                }else{
                    column = document.querySelector('#search-column-' + searchCounter);
                    column.innerHTML += 
                    `
                    <div class="inner-div">
                        <a href="#"><img src="${item.src}" alt="${item.id}"></a>
                    </div>
                    `;
                    searchCounter = 1;
                }
                
            });
        },
        onSwiper(swiper) {
             console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        },
    },
}
</script>

<style lang="scss">

@import '../scss/main.scss';

	img {
		width: 100%;
		border-radius: 8px;
		margin-bottom: 10px;
	}
	.search-container-tags{
		display: flex;

		color: #fff;
		.search-page-title {
			height: 20vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
        .search-page-title-life{
            display:grid;
            grid-template-columns: 1fr;
            height: 20vh;
            text-align: center;
            div{
                display: flex;
                justify-content: center;
                align-items: flex-end;
            }
            span{
                margin-top: 10px;
                letter-spacing: 7px;
                text-transform: uppercase;
                font-size: 10px;
            }
        }
		.inner-div {
			margin: 8px 4px;
			height: 40vh;
		}
		img {
			flex-shrink: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
        .mini-nav-tags{
            width:100%;
            background-color: #000;
            padding: 3px 0;
            letter-spacing: 3px;
            position:absolute;
            bottom: 10vh;
            a{
                color: $secondary;
                text-transform: uppercase;
                &:hover{
                // color: $hover-color
                }
                &.tag-icon-link{
                    display: flex;
                    font-size: 12px;
                    text-transform: capitalize;
                    .tag-icon{
                    width: 15px;
                    margin: 0;
                    }
                }    
                &.router-link-active{
                color: $hover-color;
                }
            }     
        }
	}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.carous{
    z-index: 99;
    position: fixed;
    bottom: 10%;
    color: #fff;
    width: 100%;
    background-color: lighten($trans-black, 20);
    padding-top:10px;
    img{
        width: 40px;
    }
    div{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>


