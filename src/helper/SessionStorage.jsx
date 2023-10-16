
export function SetSessionStorage(key, value) {
  sessionStorage.setItem(key, value)
}

export function GetSessionStorage(key) {
   sessionStorage.getItem(key)
}

export function RemoveSessionStorage(key) {
   sessionStorage.remove(key)
}

