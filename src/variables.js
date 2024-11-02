export const getCSSVar = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  }
  