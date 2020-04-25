import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

    //Configurações do seu projeto
    let firebaseConfig = {
      apiKey: "AIzaSyAI6KcoKZPB_Fo0TRFv-PKEy0KHt4B8W7I",
      authDomain: "paehrces.firebaseapp.com",
      databaseURL: "https://paehrces.firebaseio.com",
      projectId: "paehrces",
      storageBucket: "paehrces.appspot.com",
      messagingSenderId: "678096211336",
      appId: "1:678096211336:web:50100a9e76e924284d7e3d"
    };

class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig);

    //Referenciando a database para acessar em outros locais
    this.app = app.database();

    this.storage = app.storage();
  }

  login(email, password){
    return app.auth().signInWithEmailAndPassword(email, password)
  }

  logout(){
    return app.auth().signOut();
  }

  async register(nome, email, password){
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: nome
    })

  }

  isInitialized(){
      return new Promise(resolve =>{
          app.auth().onAuthStateChanged(resolve);
      })
  }

  getCurrent(){
    return app.auth().currentUser && app.auth().currentUser.email
  }

  getCurrentUid(){
    return app.auth().currentUser.uid
  }

  getCurrenttoken(){
    return app.auth().currentUser.refreshToken
  }

  async getUserName(callback){
    if(!app.auth().currentUser){
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app.database().ref('usuarios').child(uid)
    .once('value').then(callback);

  }

}

export default new Firebase();