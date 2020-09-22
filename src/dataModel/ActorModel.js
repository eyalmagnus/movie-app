class ActorModel {
  constructor(fname, lname, birthday, image, imdblink) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = birthday;
    this.image = image;
    this.imdblink = imdblink;
  }

  actorAge() {
    const currentYear = new Date().getFullYear();
    const birthyear = this.birthday;
    var age = currentYear - birthyear;
    return age;
  }
}

export default ActorModel;
