const getCSSVar = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

export default getCSSVar;