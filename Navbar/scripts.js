const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const darkCover = document.getElementById('dark-cover');
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginCloseBtn = document.getElementById('login-close-btn');

menuBtn.addEventListener('click', function() {
    darkCover.classList.remove('hidden');
    sidebar.classList.remove('-translate-x-full');
})

closeBtn.addEventListener('click', function(){
    darkCover.classList.add('hidden');
    sidebar.classList.add('-translate-x-full');
})

loginBtn.addEventListener('click', function() {
    darkCover.classList.remove('hidden');
    loginForm.classList.remove('hidden');
})

loginCloseBtn.addEventListener('click', function() {
    darkCover.classList.add('hidden');
    loginForm.classList.add('hidden');
})

darkCover.addEventListener('click', function() {
    if (sidebar.classList.contains('-translate-x-full') == true) {
        sidebar.classList.remove('-translate-x-full');
    }
})

