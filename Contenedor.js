const fs = require('fs');

class Contenedor {
  constructor(fileName){
    this.fileName = fileName;
    this.objects = this.readData(this.fileName) || [];
  }

  async generateId() {
    try {
        this.objects = await this.getAll() || [];
        let maxId = this.objects.length;
        this.objects.forEach(el => {
            el.id > maxId ? maxId = el.id : maxId
        })
        return maxId + 1;
    } catch (err) {
        console.log(err);
    }
}

  save(objeto){
    const defaultState = "[]";
    const content = fs.readFile(this.fileName, "utf8");
    if (content == ""){
      fs.writeFile(this.fileName, defaultState, (err) => {
        if (err) throw err;
      });
      content= "[]";
    }
    const data = JSON.parse(content);
    if (data.length == 0){
      data.push(objeto);
    }else {
      data.push(objeto);
    }
    fs.writeFile(this.fileName, JSON.stringify(data), (err) => {
      if (err) throw err;
    });
  }

 async getById(number){
  const content = await fs.promises.readFile(this.fileName, "utf8");
  if (content == ""){
    fs.writeFile(this.fileName, defaultState, (err) => {
      if (err) throw err;
    });
    content= "[]";
  }
  const data = JSON.parse(content);
  const objeto = data.find(obj => obj.id == number);
  return objeto;
}

  async getAll() {
    try {
      const data = await this.readData(this.fileName);
      return data;
    } catch (err) {
      console.log(err);
    }
}

  async deleteById(id) {
    try {
      this.objects = await this.getAll();
      this.objects = this.objects.filter(el => el.id != Number(id));
      this.writeData(this.objects);
    }   catch (err) {
      console.log(err);
    }
}

  async deleteAll() {
   try {
       this.objects = await this.getAll();
       this.objects = [];
       this.writeData(this.objects);
    } catch (err) {
      console.log(err);
    }
}
readData(path) {
  const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
  return data;
}
writeData(objects) {
  fs.writeFileSync(this.fileName, JSON.stringify(objects, null, 2));
}

}

module.exports = Contenedor;