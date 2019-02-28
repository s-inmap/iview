<template>
	<!-- <YMAutoComplete :items="params.datas.items"
        v-model="params.datas.item"
        :get-label="getLabel"
        :min-len="params.config.minLength"
        :auto-select-one-item="params.config.autoSelect"
        :component-item="params.template"
        :inputAttrs='params.datas.inputAttrs'
        @update-items="updateItems"
        @item-clicked="itemClicked"
        @change="changeText"
        @input="inputEv"></YMAutoComplete> -->
  <!-- </YMAutoComplete> -->
  <YMAutoComplete
     :items="items"
     v-model="item"
     :get-label="getLabel"
     :min-len="minLength"
     :auto-select-one-item="autoSelect"
     :component-item="template"
      @update-items="updateItems"
        @item-clicked="itemClicked"
        @change="changeText"
  ></YMAutoComplete>
</template>

<script>
import FilterTemplate from "../template/FilterTemplate.vue";
import ItemTemplate from "../template/ItemTemplate.vue";

export default {
	props: {
		
	},
	mounted() {
        this.init()
    },
	// components: { "v-autocomplete": Autocomplete },
	data() {
		return {
			// completeData:{
   //              template:FilterTemplate,
   //              config:{
   //                  getLabel:this.getLabel,
   //                  updateItems:this.updateItems,
   //                  changeText:this.changeText,
   //                  itemClicked:this.itemClicked,
   //                  minLength: 1,
   //                  autoSelect:false,
   //                  obj:{
   //                      title:'title'
   //                  }
   //              },
   //              datas:{
   //                  items:[],
   //                  item:{},
                    
   //              }
            // },
            autoSelect:false,
            minLength:1,
            item:{},
            items:[],
            allData:[],
            template:FilterTemplate,
           
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
            this.items = this.allData.filter((item) => {
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

