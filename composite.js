class File{
  constructor(name,content){
    this.name  = name || '';
    this.content = content || '';
  }

  getName(){
    return this.name;
  }

  rename(name){
    this.name = name || this.name;
  }

  doubleClick(){
    console.log(this.name + " File Opened");

  }

  delete(){
    let oldName = this.name;
    console.log("deleting "+this.name);
    this.content = '';
    this.name = ''
    console.log("deleted "+oldName);
  }


  getContent(){
    return this.content;
  }


}

class Folder{
  constructor(name){
    this.name = name  || '';
    this.content = [];
  }

  getName(){
    return this.name;
  }

  rename(name){
    this.name = name || this.name;
  }

  doubleClick(){
    console.log(this.name + " FOlder Opened");
    for( let file in this.content){
      this.content[file].doubleClick();
    }
  }

  add(file){
    this.content.push(file);
  }

  delete(){
    let oldName = this.name;
    console.log("deleting folder "+this.name);
    let fileNames = this.content.reduce( (acc,file) => {return acc+", "+file.getName()} ,"")
    console.log("deleting files also "+ fileNames);
    for( let file in this.content){
      this.content[file].delete();
    }
    this.content = '';
    this.name = ''
    console.log("deleted folder");
  }

  getContent(){
    return this.content;
  }
}


folder1 = new Folder('movies');
folder2 = new Folder('music');

file1 = new File('rihanna - Stay','Stay stay');
file2 = new File('Olamide - wow','Wo!!')
file3 = new File('Splice','Cast')

folder1.add(file1);
folder1.add(file2);
folder2.add(file3);

folder1.doubleClick();
folder2.doubleClick();
folder1.delete();
folder2.delete();
