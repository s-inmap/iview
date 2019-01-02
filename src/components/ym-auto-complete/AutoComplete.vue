<template>
	<v-autocomplete
		:items="params.datas.items"
		v-model="params.datas.item"
		:get-label="getLabel"
		:min-len="params.config.minLength"
		:auto-select-one-item="params.config.autoSelect"
		:component-item="params.template"
    :inputAttrs='params.datas.inputAttrs'
		@update-items="updateItems"
		@item-clicked="itemClicked"
		@change="changeText"
		@input="inputEv"
    :obj='params.config.obj'
	></v-autocomplete>
</template>

<script>
// import Vue from "vue";
import DefaultTemplate from "./AutoComplete/template/DefaultTemplate.vue";
import Autocomplete from "./AutoComplete/v-autocomplete";
// Vue.use(Autocomplete);

export default {
	props: {
		params: {
			type: Object,
			default: function() {
				return {
					datas: {
						items: [],
            			item: {},
            			inputAttrs:{},
					},
					config: {
						getLabel: this.getLabel,
						updateItems: this.updateItems,
						minLength: 1,
            			autoSelect:false,
            			obj:{
							default:() => {
								return {
									title:'name'
								}
							}
						}
          			},
          			template: { default: () => DefaultTemplate },
				};
			}
		}
	},
	components: { "v-autocomplete": Autocomplete },
	data() {
		return {};
  	},
	methods: {
		itemSelected(item) {
		},
		itemClicked(item) {
			if (this.params.config.itemClicked)
				this.params.config.itemClicked(item);
		},
		changeText(text) {
			if (this.params.config.changeText)
				this.params.config.changeText(text);
		},
		getLabel(item) {
			if (this.params.config.getLabel)
				return this.params.config.getLabel(item);
      		else 
        		return item;
		},
		updateItems(text) {
			if (this.params.config.updateItems)
				return this.params.config.updateItems(text);
      		else 
        		return text;
		},
		inputEv(e) {}
	}
};
</script>

<style scoped>
/*@import "./common/autoComplete.css";*/
</style>
<style>
</style>

