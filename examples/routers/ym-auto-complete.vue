<template>
	<YMAutoComplete :params='completeData'></YMAutoComplete>
</template>

<script>
import FilterTemplate from "../template/FilterTemplate.vue";

export default {
	props: {
		
	},
	mounted() {
        this.init()
    },
	// components: { "v-autocomplete": Autocomplete },
	data() {
		return {
			completeData:{
                template:FilterTemplate,
                config:{
                    getLabel:this.getLabel,
                    updateItems:this.updateItems,
                    changeText:this.changeText,
                    itemClicked:this.itemClicked,
                    minLength: 1,
                    autoSelect:false,
                    obj:{
                        title:'title'
                    }
                },
                datas:{
                    items:[],
                    item:{},
                    inputAttrs:{
                        placeholder:'123'
                    },
                }
            },
            allData:[]
		};
  	},
	methods: {
		init(){
			let result = [] 
			for(let i = 0 ; i < 20 ; i ++){
				result.push({
					title: i + ''
				})
			}
			this.allData = result
		},
		getLabel (item) {
            if (item) {
                return item.title
            }
        },
        updateItems (text) {
            text = text.trim().toLowerCase()
            this.completeData.datas.items = this.allData.filter((item) => {
                return item.title.toLowerCase().indexOf(text) !== -1
            })
        },
        changeText(text){
            if(text){
                text = text.trim()
                //为空则清空下拉表表
                if(text === '')
                    this.completeData.datas.items = []
            }
        },
        itemClicked(targetItem){
        	console.log('click:',targetItem)
            // const index = this.allData.findIndex((item)=>{
            //     return item.title === targetItem.title
            // })
            // this.layerOneSelectIndex = index
            // this.calScroll(index)
        },
	}
};
</script>

<style scoped>
/*@import "./common/autoComplete.css";*/
</style>
<style>
</style>

