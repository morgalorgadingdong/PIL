function adjustGridItemHeight() {
    var gridItems = document.querySelectorAll('.about-item');
    var maxHeight = 0;

    // Reset the height to auto to recalculate the height on resize
    gridItems.forEach(function(item) {
        item.style.height = 'auto';
    });

    // Find the height of the tallest item
    gridItems.forEach(function(item) {
        if (item.offsetHeight > maxHeight) {
            maxHeight = item.offsetHeight;
        }
    });

    // Set all items to the height of the tallest item
    gridItems.forEach(function(item) {
        item.style.height = maxHeight + 'px';
    });
}

// Adjust the height on load
window.onload = adjustGridItemHeight;

// Adjust the height on window resize
window.onresize = adjustGridItemHeight;