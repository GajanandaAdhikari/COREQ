// AnyComponent.js
import React from 'react';


function SavedPostChecking({postID,savedPostDetails}) {
  if(savedPostDetails==undefined){
    console.log("savedPostDetails is undefined : "+savedPostDetails);
    return false;
  }
if(postID==undefined ){
  console.log("postID is undefined : "+postID);
  return false;
}

else{

  console.log("postID is defined : "+postID);
  console.log("savedPostDetails is defined : "+savedPostDetails);
  return true;
}
  
}

export default SavedPostChecking;
