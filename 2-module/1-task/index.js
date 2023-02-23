function sumSalary(salaries) {  
  let sum=0;
  let SalariesKeys = Object.keys(salaries);
  for(let i = 0; i <= SalariesKeys.length - 1; i++) {
    if(typeof salaries[SalariesKeys[i]]==='number' && !Number.isNaN(salaries[SalariesKeys[i]]) && Number.isFinite(salaries[SalariesKeys[i]])){
      sum+=salaries[SalariesKeys[i]];
    }
  }
  return sum;
}
