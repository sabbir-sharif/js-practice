/*
    //var can be re-initialized in same scope. 
    //var does not have scope
    var x = 10; 
    var x = 8;  // Allowed


    //let cannot be re-initialized in same scope
    let y = 5;  
    let y = 6; // Not Allowed

    {
        let x = 12; // Allowed. different scope
    }

    // Hoisting
    name = "Mr. Bean";
    let name;
    console.log(name);
*/
    //var anyName;
    //anyName = undefined; hoisting || it read ull file and detects the variables first;
    anyName = "Mr. Bean";
    var anyName;
    console.log(anyName);

    // let newName; here it does not assined undefined or any value. thats why erros shows. 
    newName = "Jasim";
    let newName;
    console.log(newName); // it shows error. does not mean it did not hoisted. it did but differently.