const defaultSelect = () => {
  const element = document.querySelector('.select1');
  const choices = new Choices(element, {
    position: 'bottom',
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    duplicateItemsAllowed: false,
    silent: false,
  });
};

defaultSelect();
