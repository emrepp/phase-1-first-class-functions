function receivesAFunction(aFunction){
    return aFunction()
  }
  
  function returnsANamedFunction(){
    return function named(){
    }
  }
  
  function returnsAnAnonymousFunction(){
    return function(){
      console.log('test')
    }
  }

  