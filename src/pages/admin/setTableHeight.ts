export default function setTableHeight(className: string, height: number) {
  let wrapper = document.querySelector(`.${className}`) as HTMLElement;

  if (wrapper) {
    wrapper.style.height = `${height}vh`;
  }
}
