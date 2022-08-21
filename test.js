const d = new Date('2022-12-31');

function dateIsValid(date) {
    return date instanceof Date && !isNaN(date);
  }

console.log(dateIsValid(d))

