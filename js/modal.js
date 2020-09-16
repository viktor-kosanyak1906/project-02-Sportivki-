document.querySelector('.btn').addEventListener('click',function() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.filter').style.display = 'block';
    document.querySelector('.modal02').style.display = 'block';
});
document.querySelector('.close').addEventListener('click',function() {
     document.querySelector('.modal').style.display = 'none';
     document.querySelector('.filter').style.display = 'none';
});