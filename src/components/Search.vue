<template>
      <div class="search">

       <div class="contents">
             <div v-if="selectedContent == 'arts'">
				 <Art></Art>
			 </div>
			 <div v-if="selectedContent == 'hotspots'">
				 <Hotspot></Hotspot>
			 </div>
			 <div v-if="selectedContent == 'lifes'">
				 <Life></Life>
			 </div>gt
			 <div v-if="selectedContent == 'tags'">
				 <Tag></Tag>
			 </div>
	   </div>
    

        <Searchmodule :isOpen="isOpen"></Searchmodule>
    </div>
        

		<!-- Search icons container -->
	    <div class="search-icons-container">
			<div class="search-icons-inner-container">
				<div><button id="location-btn" :class="!isHiddenLocationContainer  ? selectedContent != 'tags'? 'move-down': 'move-down-tags': ''" @click="showLocationContainer()">
					<img class="img-location" :src="require('/src/assets/ics/location.png')" alt="location">
				</button></div>
				<div>
					<button :class="['scroll-btn', !isHiddenLocationContainer ? 'hide-right' : '']">
						<img class="img-scroll" :src="require('/src/assets/ics/scroll.png')" alt="scroll" >
					</button>
				</div>
				<div>
					<button :class="!isHiddenLocationContainer ? 'hide-right' : ''" @click="openSearchModule()" id="search-btn">
						<img class="img-loup" :src="require('/src/assets/ics/loupe.png')" alt="loupe">
					</button>
				</div>
			</div>

			<div class="mini-nav">
				<button 
                @click="removeTransletTop(), selectedContent = 'arts'" :class="[selectedContent == 'arts'? 'selected-content': '']">
                Art</button>
				<button 
                @click="removeTransletTop(), selectedContent = 'hotspots'" :class="[selectedContent == 'hotspots'? 'selected-content': '']">
                Hotspot</button>
				<button 
                @click="removeTransletTop(), selectedContent = 'lifes'" :class="[selectedContent == 'lifes'? 'selected-content': '']">
                02:59</button>
				<button 
                :class="['tag-icon-link', selectedContent == 'tags'? 'selected-content': '']" @click="transletTop(), selectedContent = 'tags'" >
                <img class="tag-icon" :src="require('/src/assets/ics/tag.png')">
                Tags</button> 

			</div>

			<div id="locations-container" :class="isHiddenLocationContainer ? 'hide-r' : 'show-r'">
				<ul>
					<li  
					v-for="location in locations" 
					:key="location.id"
					:class="['location-element',selectedLocation == location.title? 'color-selected' : '']"
					@click="chooseLocation(location.title, $event), clearLocation(location.title, $event)"
					>{{location.title}}
					</li>
				</ul>
				<!-- <div class="check-icon-container">
				<button><img class="check-icon" :src="require('/src/assets/ics/check.png')" alt=""></button>
				</div> -->
			</div>
			<div :class="['check-icon-container',isHiddenLocationContainer ? 'hide-r' : 'show-r' ]">
				<button @click="setLocation()">
					<img class="check-icon" :src="require('/src/assets/ics/check.png')" alt="">
				</button>
			</div> 

    	</div>
		<!-- Search icons container -->
    
</template>

<script>

import Searchmodule from './Searchmodule.vue';
import Searchicons from './Searchicons.vue';
import Art from './Art.vue';
import Hotspot from './Hotspot.vue';
import Life from './Life.vue';
import Tag from './Tag.vue';

export default {
    name: 'Search',
    components:{
        Searchicons, Searchmodule, Art, Hotspot, Life, Tag
    },
    data: function(){
        return{
           isOpen: false,
           locations: [
               {id: 1, title: 'Germany'},
               {id: 1, title: 'USA'},
               {id: 1, title: 'Japan'},
               {id: 1, title: 'France'},
               {id: 1, title: 'China'},
           ],
           isHiddenLocationContainer: true,
           locationC: '',
           selectedLocation: '',
		   selectedContent: 'arts',
       } 
        },
	mounted:function(){
		this.activeTranslate();
	},
    methods: {
        openSearchModule: function($event){
            console.log('open')
            this.isOpen = !this.isOpen;
        },
        showLocationContainer: function(){
            this.isHiddenLocationContainer = !this.isHiddenLocationContainer;
            document.querySelectorAll('.location-element').forEach(el => {
                if(el.innerHTML != this.selectedLocation){
                   el.classList.remove('color-selected'); 
                }else{
                    el.classList.add('color-selected')
                }
            });
        },
        setLocation: function(){
            this.selectedLocation = this.locationC;
            this.isHiddenLocationContainer = !this.isHiddenLocationContainer;
        },
        chooseLocation: function(loc, event){     
            this.locationC = loc;
            document.querySelectorAll('.location-element').forEach(el => {
                el.classList.remove('color-selected');
            });
            event.target.classList.add('color-selected')

        },
        clearLocation: function(title, event){
           if(this.selectedLocation == title){
              event.taget.classList.add('color-selected');
           }
        },
        transletTop: function(){
            document.querySelector('.search-icons-inner-container').classList.add('translate-top');
        },
        removeTransletTop: function(){
            document.querySelector('.search-icons-inner-container').classList.remove('translate-top');
        },
        activeTranslate: function(){
            if(document.querySelector('.mini-nav button:nth-child(4)').classList.contains('router-link-active')){
                if(!document.querySelector('.search-icons-inner-container').classList.contains('translate-top')){
                  document.querySelector('.search-icons-inner-container').classList.add('translate-top');
                }      
            }
        },
    },
}
</script>

<style scoped lang="scss">

@import '../scss/main.scss';

.search {
	padding: 1.5%;
	background-color: #000;
	img {
		width: 100%;
		border-radius: 8px;
		margin-bottom: 10px;
	}
	// .search-container{
	//     display: flex;
	//     flex-wrap: no-wrap;
	//     column-gap: 7px;
	//     .search-column{
	//         flex: 33%;
	//         max-width: 33%;
	//     }
	// }
}

.search-view {
	transition: 1s;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: $trans-black;

	#search-container-1 {
		text-align: center;
		.input-container {
			position: relative;
			text-align: center;
			margin-top: 4%;
			input {
				position: absolute;
				background-color: #fff;
				left: 5%;
				top: 5px;
				width: 90%;
				padding: 12px 15px;
				border-radius: 10px;
				border: none;
				z-index: 2;
                &:focus{
                    outline: none;
                }
			}
			#search-result {
				position: absolute;
				background-color: lighten($trans-black, 40);
				left: 5%;
				top: 35px;
				width: 90%;
				margin: auto;
				text-align: left;
				border-radius: 0 0 10px 10px;
				padding: 15px 0px 5px 6px;
				z-index: 1;

				ul {
					margin: 0;
					padding: 0;
					li {
						display: grid;
						grid-template-columns: 1fr 11fr;
						justify-items: center;
						align-items: center;
						color: #fff;
						margin-bottom: 3px;
						span:nth-child(2) {
							justify-self: start;
							text-align: left;
						}
					}
				}
			}
		}
	}
	
}

* {
	box-sizing: border-box;
}

.search-icons-container {
		position: fixed;
		bottom: 7%;
		left: 0;
		width: 100%;

        .search-icons-inner-container{
            display: grid;
            grid-template-columns: 1fr;
            justify-items: end;
            transition: 0.3s;
            button{
                margin-right: 10px;
                transition: 0.6s;
            }
            .img-location{
                width: 25px;
            }
            .img-scroll{
                width: 29px;
            }
            .img-loup{
                width: 29px;
            }
            &.translate-top{
                transform: translateY(-8vh);
            }
        }
	}

    .mini-nav{
        width:100%;
        background-color: #000;
        display: flex;
        justify-content: space-around;
        padding: 3px 0;
        letter-spacing: 3px;
        button{
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
            &.selected-content{
              color: $hover-color;
            }
        }     
    }

    #locations-container{
        background-color: $primary;
        color: $secondary;
        overflow: scroll;
        height: 25vh;
        position: fixed;
        width: 100%;
        transition: 0.3s;
        bottom: 20vh;
       &.hide{
           left: -100vh;
           }
        ul{
            margin: 0;
            padding:0;
           li{
            margin: 18px 0px;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 5px;
            } 
        }   
    }

    .check-icon-container{ 
            text-align: right;  
            position:absolute;
            bottom: 15vh;
            right: 4vw;
            .check-icon{
                width: 15px;
                margin: 0;
                margin-right: 15px;        
            }
        }
    .color-selected{
        color: $hover-color;
    }
    .hide-r{
     animation: hide-r .7s forwards;
    }

    .show-r{
     animation: show-r 0.7s forwards;
    }

    .hide-right{
        transform: translateX(30vw);
    }
    .move-down{
        transform: translateY(-21vh);
    }
    .move-down-tags{
        transform: translateY(-13vh);
    }
    
    @keyframes hide-r {
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(-100vh);
        }
    }
    @keyframes show-r {
        0%{
            transform: translateX(-100vh);
        }
        100%{
            transform: translateX(0);
        }
    }

@media screen and (min-width: 791px) {
    @keyframes hide-r {
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(-200vh);
        }
    }
    @keyframes show-r {
        0%{
            transform: translateX(-200vh);
        }
        100%{
            transform: translateX(0);
        }
    }
    .move-down{
        transform: translateY(8vw);
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    #locations-container::-webkit-scrollbar {
    display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    #locations-container{
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }
}


</style>