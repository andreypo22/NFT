const defaultSelect = () => {
  const element = document.querySelector('.select2');
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
