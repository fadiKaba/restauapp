<template>
      <div class="search">
        
        <router-view></router-view>

        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="search-container-hotsopt">
                <div id="search-hotsopt-column-1">

                </div>
                <div id="search-hotsopt-column-2">

                </div>
                <div id="search-hotsopt-column-3">

                </div>       
            </div>
        </div>
        <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
        <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
        <Searchmodule :isOpen="isOpen"></Searchmodule>
        <Searchicons @openSearchModule= "openSearchModule"></Searchicons>
    </div>
    
</template>

<script>

import Searchmodule from './Searchmodule.vue';
import Searchicons from './Searchicons.vue';

export default {
    name: 'Search',
    components:{
        Searchicons, Searchmodule,
    },
    data: function(){
        return{
            isOpen: false,
        }
    },
    methods: {
        openSearchModule: function($event){
            this.isOpen = !this.isOpen;
        }
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


</style>