<template>
	<div class="calendar-wrapper">
		<div class="calendar-head">
		</div>
		<div class="calendar-body">
			<ul class="calendar-title">
				<li class="week" v-for="item in displayLabel" :key="item">{{item}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:　"simpleCalendar",
		props:{
			value:{
				type:String,
				default: new Date()
			},
			label:{
				type: Array,
				default: ["日","一","二","三","四","五","六"]
			}
		},
		data(){
			var labeldefault = ["日","一","二","三","四","五","六"];
			var Result={
				displayLabel:[]
			};
			for(let i = 0;i<7;i++){
				if(this.label[i]){
					Result.displayLabel[i] = this.label[i];
				}else{
					Result.displayLabel[i] = labeldefault[i];
				}
			}
			return Result;
		}
	}
</script>

<style>
.calendar-wrapper{
	width:100%;
	height: auto;
	overflow: hidden;
}
.calendar-head{
	
}
</style>