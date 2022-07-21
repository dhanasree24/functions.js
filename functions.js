let users=[
    {id:1, name: 'Person one', age: 24, email_id: 'mani@abc.com', Role: 'Manager', mob_num:1234567890, status: 'Active'},
    {id:2, name: 'Person two', age: 20, email_id: 'hani@abc.com', Role: 'TeamLead', mob_num:1234567890, status: 'InActive'},
    {id:3, name: 'Person three', age: 34, email_id: 'babu@abc.com', Role: 'Manager', mob_num:1234567890, status: 'Active'},
    {id:4, name: 'Person four', age: 54, email_id: 'chinnu@abc.com', Role: 'Approver', mob_num:1234567890, status: 'InActive'},
    {id:5, name: 'Person five', age: 64, email_id: 'munna@abc.com', Role: 'User', mob_num:1234567890, status: 'InActive'},
    {id:6, name: 'Person six', age: 26, email_id: 'moana@abc.com', Role: 'TeamLead', mob_num:1234567890, status: 'Active'},
    {id:7, name: 'Person seven', age: 32, email_id: 'junnu@abc.com', Role: 'TeamLead', mob_num:1234567890, status: 'InActive'},
    {id:8, name: 'Person eight', age: 44, email_id: 'don@abc.com', Role: 'Manager', mob_num:1234567890, status: 'Active'},
    {id:9, name: 'Person nine', age: 22, email_id: 'mouni@abc.com', Role: 'Approver', mob_num:1234567890, status: 'Active'},
    {id:10, name: 'Person ten', age: 30, email_id: 'sree@abc.com', Role: 'Manager', mob_num:1234567890, status: 'Active'},
];


//printing
// function user_data(){
//     console.log(users)
// }
// user_data();


//filtering using role
// function filterByrole(user_role){
//  let filteredUsers = users.filter(function(item){
//     if(item.Role === user_role){
//       return item;
//     }
//   })
//   console.log(user_role);
//   console.log(filteredUsers);
// }
// filterByrole("Manager");


//finding by id
// function findbyId(inputId){
//     let findId = users.find(function(item){
//       if(item.id === inputId){
//         return item;
//       }
//     })
//     console.log(findId);
//   }
//   findbyId(10);


//finding by emailId
// function findbyemail(inputemail){
//     let findemail = users.find(function(item){
//       if(item.email_id === inputemail){
//         return item;
//       }
//     })
//     console.log(findId);
//   }
//   findbyemail(10);


//removing 
// function remObj(inputId){
//   let removedId = users.filter(user => user.id === inputId)
//   console.log(removedId);
//   console.log(users)
// }
// remObj(7);


// Upadation
// function pushNewUser(inputUser){
//   users.push(inputUser);
//   console.log(users);
// }
// let newUser = {id:11, name: 'Person Eleven', age: 30, email_id: 'sree@abc.com', Role: 'Manager', mob_num:1234567890, status: 'Active'}
// pushNewUser(newUser);



