<template>
    <div class="search-view display-none">
       <div id="search-container-1">
           <div class="input-container">
               <input @keyup="search()" v-model="typing" ref="sinput" type="text" id="search-input" autocomplete="off">
               <div v-if="results.length > 0"  id="search-result" >
                   <ul>
                      <li v-for="result in resComputed" :key="result.id"><span class="dot"></span> <span>{{result.description}}</span></li>
                   </ul>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    //:class="['display-none', result.length > 0? 'display-show-fast':'']"
    name: 'Searchmodule',
    props:{
        isOpen: Boolean,
    },
    data: function(){
        return{
            isOp: false,
               data: [
                {id: 1, description: "Fish"},
                {id: 2, description: "Meat"},
                {id: 3, description: "Fruits"},
                {id: 4, description: "Vegetable"},
                {id: 5, description: "Yood"},
                {id: 6, description: "Uileh"},
                {id: 7, description: "Good"},
                {id: 8, description: "Kood"},
                {id: 9, description: "Lood"},
                {id: 10, description: "Mood"},
                {id: 11, description: "Oood"},
                {id: 12, description: "Pood"},
                {id: 13, description: "Qood"},
                {id: 14, description: "Rood"},
                {id: 15, description: "sood"},
                {id: 16, description: "Hood"},
                {id: 16, description: "Aood"},
                {id: 16, description: "Bood"},
                {id: 16, description: "Cood"},
            ],
            results: [],
            typing: '',
        }
    },
    mounted: function(){
      this.hideModule();

    },
    methods:{
       hideModule: function(){
             document.querySelector('.search-view').addEventListener('click', function(e){
             if(e.target == this){
               e.target.classList.remove('display-show');
             }
        })
       },
        search: function(){
        this.results = [];
        for(let i = 0; i < this.data.length; i++){
             if(this.data[i].description[0].toLocaleLowerCase() == this.typing.toLocaleLowerCase()){        
              this.results.push(this.data[i]);
            }
            
        }
        return this.results;
      },
  
    },
    computed: {
        resComputed: function(){
            return this.search();
        }
    },
    watch:{
        isOpen: function(newValue){
            if(document.querySelector('.search-view').classList.contains('display-show')){
                document.querySelector('.search-view').classList.remove('display-show');
            }else{
               document.querySelector('.search-view').classList.add('display-show');
            this.$refs.sinput.focus(); 
            }  
        },
    }
}
</script>
<style lang="scss" scoped>

    @import '../scss/main.scss';

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
					li{
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
</style>