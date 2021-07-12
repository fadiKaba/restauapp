<template>
    <div class="search-container">
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
    name: 'Art',
    data: function(){
        return{
            images: [
                {id: 1, src: "https://source.unsplash.com/random/400x500"},
                {id: 2, src: "https://source.unsplash.com/random/400x600"},
                {id: 3, src: "https://source.unsplash.com/random/400x700"},
                {id: 4, src: "https://source.unsplash.com/random/400x800"},
                {id: 5, src: "https://source.unsplash.com/random/500x600"},
                {id: 6, src: "https://source.unsplash.com/random/500x700"},
                {id: 7, src: "https://source.unsplash.com/random/500x800"},
                {id: 8, src: "https://source.unsplash.com/random/500x900"},
                {id: 9, src: "https://source.unsplash.com/random/300x400"},
                {id: 10, src: "https://source.unsplash.com/random/300x400"},
                {id: 11, src: "https://source.unsplash.com/random/300x500"},
                {id: 12, src: "https://source.unsplash.com/random/300x600"},
                {id: 13, src: "https://source.unsplash.com/random/300x700"},
                {id: 14, src: "https://source.unsplash.com/random/600x700"},
                {id: 15, src: "https://source.unsplash.com/random/600x800"},
                {id: 16, src: "https://source.unsplash.com/random/600x900"},
                {id: 17, src: "https://source.unsplash.com/random/700x800"},
            ],
            title: 'find your test'
        }
    },
    mounted: function(){
        this.fillSearchInput();
    },
    methods:{
        fillSearchInput: function(){
            let searchCounter = 1;
            let column = '';
            document.querySelector('#search-column-2').innerHTML+= `<div class="search-page-title">${this.title}</div>`;
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
    }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

	img {
		width: 100%;
		border-radius: 8px;
		margin-bottom: 10px;
	}
	.search-container{
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
            div{
                display: flex;
                justify-content: center;
                align-items: flex-end;
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


