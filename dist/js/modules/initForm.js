const initForm = () => {
    $('.form').submit((evt) => {
      const formData = Object.fromEntries(new FormData(evt.target).entries());
      console.log(formData);
  
      return false;
    });
};

initForm();

export {initForm};