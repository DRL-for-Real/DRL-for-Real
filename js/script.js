// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// 移动端导航菜单
document.addEventListener('DOMContentLoaded', function() {
    // 如果需要添加移动端菜单按钮，可以在这里实现
    // 例如：
    // const header = document.querySelector('header');
    // const nav = document.querySelector('nav');
    // const mobileMenuBtn = document.createElement('button');
    // mobileMenuBtn.classList.add('mobile-menu-btn');
    // mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    // header.insertBefore(mobileMenuBtn, nav);
    // 
    // mobileMenuBtn.addEventListener('click', function() {
    //     nav.classList.toggle('active');
    // });
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});