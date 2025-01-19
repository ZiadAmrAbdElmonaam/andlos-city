document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    function filterServices() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        const allServices = document.querySelectorAll('.service-category');
        
        allServices.forEach(service => {
            const category = service.dataset.category;
            const text = service.textContent.toLowerCase();
            const matchesSearch = text.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
            
            service.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
        });
    }
    
    searchInput.addEventListener('input', filterServices);
    categoryFilter.addEventListener('change', filterServices);
}); 