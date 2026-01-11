function mul(x: number, y: number): number {
  return x * y;
}
function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(funcs: ((a:number,b:number)=>number)[], values:[number,number][]): number[]{
  const results = [] as number[];
  for(let i=0;i<funcs.length;i++){
    const args=values[i];
    const result=funcs[i](args[0],args[1]);
    results.push(result);

  }
  return results;
}

applyFunc([mul,div],[[1,2],[4,5]]);
