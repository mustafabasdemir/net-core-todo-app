import Swal from 'sweetalert2';


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});


const showAlert = async (icon, title) => {
  await Toast.fire({
    icon,
    title,
  });
};


export default showAlert;
