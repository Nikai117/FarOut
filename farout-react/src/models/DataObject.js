const SnakeToPascal = (string) => {
    return string
      .split("/")
      .map((snake) =>
        snake
          .split("_")
          .map((substr) => substr.charAt(0).toUpperCase() + substr.slice(1))
          .join("")
      )
      .join("/");
  };
  
  export default class DataObject {
    constructor(data = null) {
      this._data = data;
  
      for (const _key in data) {
        if (Object.hasOwnProperty.call(data, _key)) {
          let key = SnakeToPascal(_key);
  
          let methodName = "get" + key.charAt(0).toUpperCase() + key.slice(1);
  
          if (this[methodName] === undefined) {
            this[methodName] = () => this.getData(_key);
          }
        }
      }
    }
  
    getData(name) {
      if (!name) {
        return this._data;
      }
  
      let path = name.split("/");
      let data = this._data;
  
      for (let i = 0; i < path.lenght; i++) {
        const part = path[i];
  
        if (data[part] === undefined) {
          return undefined;
        }
  
        data = data[part];
      }
    }
  }