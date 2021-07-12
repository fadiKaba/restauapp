<template>
        <div class="search-container-hotsopt">
            <div id="search-column-1">

            </div>
            <div id="search-column-2">

            </div>
            <div id="search-column-3">

            </div>       
        </div>
</template>
<script>
export default {
    name: 'Hotspot',
    data: function(){
        return{
            images:[
                {id: 1, src: "https://source.unsplash.com/random/400x550"},
                {id: 2, src: "https://source.unsplash.com/random/400x650"},
                {id: 3, src: "https://source.unsplash.com/random/400x750"},
                {id: 4, src: "https://source.unsplash.com/random/400x850"},
                {id: 5, src: "https://source.unsplash.com/random/500x650"},
                {id: 6, src: "https://source.unsplash.com/random/500x750"},
                {id: 7, src: "https://source.unsplash.com/random/500x850"},
                {id: 8, src: "https://source.unsplash.com/random/500x950"},
                {id: 9, src: "https://source.unsplash.com/random/300x450"},
                {id: 10, src: "https://source.unsplash.com/random/300x450"},
                {id: 11, src: "https://source.unsplash.com/random/300x550"},
                {id: 12, src: "https://source.unsplash.com/random/300x650"},
                {id: 13, src: "https://source.unsplash.com/random/300x750"},
                {id: 14, src: "https://source.unsplash.com/random/600x750"},
                {id: 15, src: "https://source.unsplash.com/random/600x850"},
                {id: 16, src: "https://source.unsplash.com/random/600x950"},
                {id: 17, src: "https://source.unsplash.com/random/700x850"},
            ],
            title: `
                    <div>
                        <span class="small-dot"></span> 
                        <span class="small-dot"></span> 
                        <span class="small-dot"></span> 
                        <span class="small-dot"></span>
                        <span class="small-dot"></span>
                        <span class="small-dot"></span>
                        <span class="small-dot"></span>
                    </div>    
                        <span> wir kreiren</span>
                        <span> ERLEBNISE </span> 
                        `,
        }
    },
    mounted: function(){
       this.fillHotspotInput();
    },
    methods: {
        fillHotspotInput: function(){
            let searchCounter = 1;
            let column = '';
            document.querySelector('#search-column-2').innerHTML+= `<div class="search-page-title-hotspot">${this.title}</div>`;
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
	.search-container-hotsopt{
		display: flex;

		color: #fff;
		.search-page-title {
			height: 20vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
        .search-page-title-hotspot{
            display:grid;
            grid-template-columns: 1fr;
            height: 20vh;
            text-align: center;
            align-content: center;
            font-size: 12px;
            line-height: 20px;
            div{
                display: flex;
                justify-content: center;
                align-items: flex-end;
            }
            span:nth-child(3){
                letter-spacing: 5px;
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
	}

* {
	box-sizing: border-box;
}


</style>