
function showSalary(users, age) {
  let users = [user1, user2];
  let ArrUserAgeIsTrue = users.filter(item => {if (item.age <= age) return item;})
  let ArrNameAndBalance = ArrUserAgeIsTrue.map(item => {
    let i = {
      name: '',
      balance: 0,
    };
    i.name = item.name;
    i.balance = item.balance;
    return i;
  } );
  let ArrWithoutObj = ArrNameAndBalance.map(item => {
    return Object.values(item);
  })
  let NewStr = '';
  for (let i = 0; i <  ArrWithoutObj.length; i++) {
    NewStr += ArrWithoutObj[i].join(',') + '\r\n'
  } 
    console.log(NewStr);
 }

