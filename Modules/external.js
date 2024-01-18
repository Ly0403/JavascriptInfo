
export const func01 = () => {
  console.log('hi from the external module');
};

const func02 = () => {
  console.log('hi from the func 02');
};

const func03 = () => {
  console.log('hi from the func 03');
};

export {func02, func03};
