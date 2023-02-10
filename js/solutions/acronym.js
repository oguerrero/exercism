const parse = (companyName) =>
  companyName
    .replace(/[-_\s]+/g, '-')
    .split('-')
    .map((word) => word[0].toUpperCase())
    .join('')
