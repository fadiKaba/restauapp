<template>
    <div class="search-icons-container">

        <div class="search-icons-inner-container">
            <div><button id="location-btn" :class="!isHiddenLocationContainer ? 'move-down': ''" @click="showLocationContainer()">
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
            <router-link @click="removeTransletTop()" to="/arts">Art</router-link>
            <router-link @click="removeTransletTop()" to="/hotspots">Hotspot</router-link>
            <router-link @click="removeTransletTop()" to="/lifes">02:59</router-link>
            <router-link class="tag-icon-link" @click="transletTop()" to="/tags"><img class="tag-icon" :src="require('/src/assets/ics/tag.png')">Tags</router-link>
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
</template>

<script>
export default {
    name: 'Searchicons',
    data: function(){
       return{
           isOpen: true,
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
       } 
    },
    mounted:function(){
      this.activeTranslate();
    },
    methods: {
        openSearchModule: function(){
            this.$emit('openSearchModule', this.isOpen);
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
            console.log('dd')
            if(document.querySelector('.mini-nav a:nth-child(4)').classList.contains('router-link-active')){
                console.log('dd')
                if(!document.querySelector('.search-icons-inner-container').classList.contains('translate-top')){
                  document.querySelector('.search-icons-inner-container').classList.add('translate-top');
                }
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>

  @import '../scss/main.scss';

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
        transform: translateY(-20vh);
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