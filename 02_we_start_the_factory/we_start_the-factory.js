function manufacture(gifts, materials) {
  const materialsLetters = new Set(materials.split(''))
  return gifts.filter(g => g
    .split('')
    .every(m => materialsLetters.has(m))
  );
}