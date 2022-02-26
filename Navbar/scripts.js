const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const darkCover = document.getElementById('dark-cover');
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginCloseBtn = document.getElementById('login-close-btn');

function showDarkCover() {
    darkCover.classList.remove('hidden');
}

function hideDarkCover() {
    darkCover.classList.add('hidden');
}

// When click menuBtn it show the darkCover and show Menu
menuBtn.addEventListener('click', function() {
    showDarkCover()
    sidebar.classList.remove('-translate-x-full');
})

closeBtn.addEventListener('click', function(){
    hideDarkCover()
    sidebar.classList.add('-translate-x-full');
})

loginBtn.addEventListener('click', function() {
    showDarkCover();
    loginForm.classList.remove('hidden');
})

loginCloseBtn.addEventListener('click', function() {
    hideDarkCover();
    loginForm.classList.add('hidden');
})

darkCover.addEventListener('click', function() {
    if (!sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        hideDarkCover();
    }
})


