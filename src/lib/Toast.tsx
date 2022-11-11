import React from "react";
import check from './assets/check.svg';
import error from './assets/error.svg';
import info from './assets/info.svg';

import './styles/global.scss'
import './styles/components/toast.scss';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Toast() {
  return (
    <div>
      {/* <span>Usuário inserido com sucesso</span> */}
    </div>
  )
}

export const toast = {

  show: ({ message }: ToastProps) => {

    if (document.querySelectorAll('.toast').length > 0) {
      const toast = document.createElement('div');
      toast.className = `toast slide-left`;
      toast.innerHTML = `<span> ${message}</span><div class='timer'></div>`;

      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 7000);

      if (toast) {
        toast.remove();
      }

      return
    }

    const toast = document.createElement('div');
    toast.className = `toast slide-left`;
    toast.style.top = `${document.querySelectorAll('.toast').length * 55}px`;
    toast.innerHTML = `<span>${message}</span><div class='timer'></div>`;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 7000);

    if (toast) {
      toast.remove();
    }
  },

  success: ({ message }: ToastProps) => {
    if (document.querySelectorAll('.toast').length > 0) {

      const toast = document.createElement('div');
      toast.className = `toast slide-left toast--success`;
      toast.style.top = `${document.querySelectorAll('.toast').length * 55}px`;
      toast.innerHTML = `<span> <img src=${check} /> ${message}</span><div class='timer'></div>`;

      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 7000);

      return;
    }

    const toast = document.createElement('div');
    toast.className = `toast slide-left toast--success`;
    toast.innerHTML = `<span> <img src=${check} /> ${message}</span><div class='timer'></div>`;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 7000);
  },

  error: ({ message }: ToastProps) => {

    if (document.querySelectorAll('.toast').length > 0) {

      const toast = document.createElement('div');
      toast.className = `toast slide-left toast--error`;
      toast.style.top = `${document.querySelectorAll('.toast').length * 55}px`;
      toast.innerHTML = `<span> <img src=${error} /> ${message}</span><div class='timer'></div>`;

      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 7000);

      return;
    }

    const toast = document.createElement('div');
    toast.className = `toast slide-left toast--error`;
    toast.innerHTML = `<span> <img src=${error} /> ${message}</span><div class='timer'></div>`;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 7000);
  },

  info: ({ message }: ToastProps) => {

    if (document.querySelectorAll('.toast').length > 0) {

      const toast = document.createElement('div');
      toast.className = `toast slide-left toast--info`;
      toast.style.top = `${document.querySelectorAll('.toast').length * 55}px`;
      toast.innerHTML = `<span> <img src=${info} /> ${message}</span><div class='timer'></div>`;

      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 7000);

      return;
    }

    const toast = document.createElement('div');
    toast.className = `toast slide-left toast--info`;
    toast.innerHTML = `<span> <img src=${info} /> ${message}</span><div class='timer'></div>`;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 7000);
  },

  primary: ({ message }: ToastProps) => {

    if (document.querySelectorAll('.toast').length > 0) {

      const toast = document.createElement('div');
      toast.className = `toast slide-left toast--primary`;
      toast.style.top = `${document.querySelectorAll('.toast').length * 55}px`;
      toast.innerHTML = `<span>${message}</span><div class='timer'></div>`;

      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 7000);

      return;
    }

    const toast = document.createElement('div');
    toast.className = `toast slide-left toast--primary`;
    toast.innerHTML = `<span>${message}</span><div class='timer'></div>`;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 7000);
  },

  secondary: ({ message }: ToastProps) => {

    if (document.querySelectorAll('.toast').length > 0) {

      const toast = document.createElement('div');
      toast.className = `toast slide-left toast--secondary`;
      toast.style.top = `${document.querySelectorAll('.toast').length * 55}px`;
      toast.innerHTML = `<span>${message}</span><div class='timer'></div>`;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 7000);

      return;
    }

    const toast = document.createElement('div');
    toast.className = `toast slide-left toast--secondary`;

    toast.innerHTML = `<span>${message}</span><div class='timer'></div>`;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 7000);
  }
}