try {
  console.log('try catch example');
  dddd;
} catch (error) {
  console.log('error in the code');
}

try {
  setTimeout(() => {
    ddd;
  }, 2000);
} catch (error) {
  console.log('error in the code'); // do not catch error
  // try catch works syncronized
}

setTimeout(() => {
  try {
    ddd;
  } catch (error) {
    console.log('error in the code'); // works
  }
}, 2000);

try {
  ddd;
} catch (error) {
  console.log(error.message); // ddd is not defined
  console.log(error.name); // Reference Error
  console.log(error.stack); // Reference Error: ddd is not defined.
}

// throwing error in try block
try {
  const json = '{ "age" : 11 }';
  const user = JSON.parse(json);
  if (!user.name) {
    // built-in Errors Error, SyntaxError, TypeError, ReferenceError, etc.
    throw new SyntaxError('username does not exists');
  }
} catch (error) {
  console.log(error);
}

// catching more than one error

const func01 = function() {
  try {
    const json = '{ "age" : 11 }';
    const user = JSON.parse(json);
    killcode();
    if (!user.name) {
      throw new SyntaxError('user name does not exists');
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('Syntax error');
    } else {
      throw error;
    }
  }
};

try {
  func01();
} catch (error) {
  console.log('Second error');
}

// finally and return
const func02 = function() {
  try {
    return 'aa';
  } catch (error) {
  } finally {
    console.log('bb');
  }
};

console.log(func02()); // first bb then aa;
