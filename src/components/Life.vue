<template>
    <div class="search-container-life">
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
    name: 'Life',
    data: function(){
        return{
            images: [
                {id: 1, src: "https://source.unsplash.com/random/400x530"},
                {id: 2, src: "https://source.unsplash.com/random/400x630"},
                {id: 3, src: "https://source.unsplash.com/random/400x730"},
                {id: 4, src: "https://source.unsplash.com/random/400x830"},
                {id: 5, src: "https://source.unsplash.com/random/500x630"},
                {id: 6, src: "https://source.unsplash.com/random/500x730"},
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
    }
}
</script>

<style lang="scss">

@import '../scss/main.scss';
@import '../scss/colors.scss';

	img {
		width: 100%;
		border-radius: 8px;
		margin-bottom: 10px;
	}
	.search-container-life{
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
	}

* {
	box-sizing: border-box;
}


</style>


