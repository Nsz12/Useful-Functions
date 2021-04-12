
ar = [6,2,8,6,1,3,9,9,10,4,5,3,10,2,8,9,4]

uniqueNumbers(ar)

/**
 * 
 * @param arr The array to search through
 */
function uniqueNumbers(arr)
{
    

    //This array will contain the unique numbers
    var uniqueNumber = [];
    // to check if the number unique
    check= true;
    //loop through all the numbers of the array
    for(i = 0; i < arr.length ; i++)
    {
        check = true;
        for(j = 0; j<arr.length; j++){
        
        
        if(i!=j){
 //If the current element is equal to other element, it is not unique
        if(arr[i] == arr[j])
            {
            check = false;
            break;
            }
        }
    }
        if(check){
            uniqueNumber.push(arr[i]);
        }

        
    }
    
    console.log(uniqueNumber);
   
}