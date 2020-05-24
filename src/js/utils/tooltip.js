export const setTooltipOnElement = (element, text) => {
  element.setAttribute('aria-label', text);
  element.setAttribute('role', 'tooltip');
  element.setAttribute('data-microtip-position', 'right');
}