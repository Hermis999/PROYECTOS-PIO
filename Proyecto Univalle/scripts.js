function adjustSize(tubeId, size) {
    const maxSize = 50;
    const initialSize = 0;
    const newSize = Math.max(initialSize, Math.min(size * 4, maxSize * 4));
    document.getElementById(tubeId).style.height = newSize + 'px';
}

