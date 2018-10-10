import * as numeral from "numeral"
const DEFAULT_FORMAT_OPTIONS = {

}
export class FreshNumberBoxUtility{

  static formattingNumber(value: string | number, format: string, options: any = {}): string {
    options = {...DEFAULT_FORMAT_OPTIONS, ...options}
    let formattingNumber = "";
    debugger
    if(value == undefined)
      return ""
    if((format || "") == ""){
      let lNumeral = numeral(value)
      return lNumeral.value()
    }

    /** Format */
    let lValue: number = Number(value);
    
    return formattingNumber
  }
}