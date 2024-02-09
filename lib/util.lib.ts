import { parseCookies, setCookie } from "nookies";


export function getCookie(cname: string) {

    const cookies = parseCookies();
    if (cname) {
      // check in cookie
      let _val: string | null = cookies[cname];
  
      if (!!_val) {
        return _val;
      }
  
      //then chek in localStorage
      _val = localStorage.getItem(cname);
      if (!!_val) {
        return _val;
      }
    }
  
    return null;
  }

export function setCookieClient(key: string, value: string) {
    setCookie(null, key, value, {
      path: "/",
      sameSite: false
    });
    localStorage.setItem(key, value);
  }