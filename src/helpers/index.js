import db from '../config/fbconfig';

export const getBooks = (setBook) => {
  db.collection("books").onSnapshot((snapshot) => {
    const newBook = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setBook([...newBook])
  })
}

export const addBook = (values) => {
  db.collection("books").add({
    title: values.title,
    author: values.author,
    description: values.description,
    price: values.price,
    genre: values.genre
  })
  .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
      console.error("Error adding document: ", error);
  });

  console.log("poszło!");
}

export const deleteBook = (id) => {
  db.collection("books").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
  }).catch(error => {
      console.error("Error removing document: ", error);
  });
}