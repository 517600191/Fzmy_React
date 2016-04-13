import city from "./storage/city.js"

var DayycityData=[];
for(let i=0;i<city.length;i++){
	DayycityData.push({value:city[i].name,label:city[i].name})
}

export default  DayycityData;