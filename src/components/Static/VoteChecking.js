import Cookies from "js-cookie";

export function VoteCount({votes}){
    var vote = 0;
    // console.log(votes);
      
    if (!votes || votes.length === 0) {
      // Handle the case where votes is undefined or empty
    //   console.log('No votes available');
      return 0; // Or whatever value you want to return in this case
    }
  
    for(var i=0;i<votes.length;i++){
      if (votes[i] && votes[i].hasOwnProperty('hasVoted') && votes[i].hasOwnProperty('userId')) {
        // console.log(votes[i].hasVoted);
        // console.log(votes[i].userId);
        // if(votes[i].userId == Cookies.get('userId')){
        //   setVoteStatus(votes[i].hasVoted);
        // }
        if(votes[i].hasVoted){
          vote = vote + 1;
        }
        
      } else {
        // console.log('Invalid vote object');
      }
    
      return vote; 
  }
   }


   export function VoteStatus({votes}){
    var vote = 0;
    // console.log(votes);
      
    if (!votes || votes.length === 0) {
      // Handle the case where votes is undefined or empty
      console.log('No votes available');
      return "invalid"; // Or whatever value you want to return in this case
    }
  
    for(var i=0;i<votes.length;i++){
      if (votes[i] && votes[i].hasOwnProperty('hasVoted') && votes[i].hasOwnProperty('userId')) {
        // console.log(votes[i].hasVoted);
        // console.log(votes[i].userId);
        if(votes[i].userId == Cookies.get('userId')){
          return votes[i].hasVoted;
        }
        else{
          return false;
        }
        
      } else {
        // console.log('Invalid vote object');
      }
    
     
  }
   }