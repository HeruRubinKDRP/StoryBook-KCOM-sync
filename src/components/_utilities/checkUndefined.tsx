export const ensureNotUndefinedString =(value : string | undefined):string=>{
  if(!value){return ""}
  return value;
}
