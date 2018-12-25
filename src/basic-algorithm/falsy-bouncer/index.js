/**
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are `false, null, 0, "", undefined, and NaN`
 * 
 * Usage example: `bouncer([7, "ate", "", false, 9])`
 * will return `[7, "ate", 9]`
 */
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean)
}

