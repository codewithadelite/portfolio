import Swal from "sweetalert2";

export const alert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    background: "#2a2e35",
    iconColor: "#22c55e",
    color: "#22c55e",
    timer: 6000,
    timerProgressBar: true,
    showCloseButton: false,
    showClass: {
      backdrop: "swal2-noanimation", // disable backdrop animation
      popup: "", // disable popup animation
      icon: "", // disable icon animation
    },
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return Toast;
};
