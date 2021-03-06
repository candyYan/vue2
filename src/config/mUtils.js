
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if(!name) return;
  if(typeof content !== 'string') {
    content.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 *获取localStorage
 */
export const getStore = name => {
  if(!name) return;
  window.localStorage.getItem(name);
}
