export class FreshGlobal{
  public static isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
	}
	public static getMaskFilter(maskArray:Array<string|RegExp>){
		if(!maskArray)
		  return undefined;
		let tempMask = [];
		for(let node of maskArray) {
			if(node.constructor == String)
				tempMask = [...tempMask, ...node.toString().split("")]
			else
			  tempMask.push(node)
		};
		return tempMask;
	}
  public static getMaskValue(focusAllow:Array<boolean>, value: string, placeholder: string){
		debugger
		return focusAllow.map((x, index) => ({index, value: x}))
			.filter( x => x.value)
			.map(x=> value[x.index])
			.join("") 
	}
}