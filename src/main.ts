const btn = document.getElementById('menu-btn') as HTMLButtonElement;
const menu = document.getElementById('menu') as HTMLElement;

btn?.addEventListener('click', navToggle);

function navToggle(): void {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}