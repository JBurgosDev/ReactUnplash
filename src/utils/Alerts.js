import Swal from 'sweetalert2';

export const alert = (message, type) => {
    Swal.fire({
        title: message,
        icon: type,
        confirmButtonText: 'OK'
    })
}
