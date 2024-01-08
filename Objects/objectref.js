const user ={
  name: 'Yucel',
};

const admin = user;
admin.name='Admin';
// the reason of user object change
// objects are reference type
// the memory addres of the properties
// of the objects are referencedç
console.log(user.name);
