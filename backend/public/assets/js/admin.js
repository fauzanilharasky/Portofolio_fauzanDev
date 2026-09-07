(function(){
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('toggleBtn');
  if(!sidebar || !toggle) return;

  // restore state
  const collapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if(collapsed) sidebar.classList.add('collapsed');

  toggle.addEventListener('click', ()=>{
    const isCollapsed = sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebar-collapsed', isCollapsed);
  });
})();
