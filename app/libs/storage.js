// Simple wrapper over localStorage

const storage = {
  get: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.warning("Can't get item from localStorage: ", key);
      return null;
    }
  },

  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export default storage;
