export function computedStyle(
  element: Element,
  key: keyof CSSStyleDeclaration,
) {
  return window.getComputedStyle(element)[key]
}

export function marginHeight(element: Element) {
  let top = Number.parseFloat(computedStyle(element, 'marginTop') as string)
  let bottom = Number.parseFloat(
    computedStyle(element, 'marginBottom') as string,
  )
  return top + bottom
}

export function height(element: Element) {
  return (
    Number.parseFloat(computedStyle(element, 'height') as string) +
    marginHeight(element)
  )
}

export function parseHostname(url: string) {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  return a.hostname
}

export function createTemplate(content: string, css: string) {
  let html = `<style>${css}</style>${content}`
  let template = document.createElement('template')
  template.innerHTML = html
  return template
}

export function defineElement(
  name: string,
  Class: CustomElementConstructor,
  options?: ElementDefinitionOptions,
) {
  window.customElements.define(name, Class, options)
}
