import Swal from 'sweetalert2';

export const showToaster = (
title: string,
text: string,
icon: 'success' | 'error' | 'info' | 'warning' = 'info',
timer: number = 3000
)=>{
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    position: 'top-end',
    toast: true,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
    customClass: {
      popup: 'toaster-popup',
    }
  });
}
