import province from "./storage/province.js"
var DayyprovinceData=[]
for(let i=0;i<province.length;i++){
	 DayyprovinceData.push({value:province[i].name,label:province[i].name})
}



export default  DayyprovinceData;