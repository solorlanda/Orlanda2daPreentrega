import { getFirestore, collection, getDocs } from "firebase/firestore";

const getProducts = async () => {
    const db = getFirestore(); // Inicializa Firestore
    const productsCollection = collection(db, "products"); // 'products' es tu colección en Firestore
    const productsSnapshot = await getDocs(productsCollection); // Obtén los documentos
    const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(), // Extrae y combina el ID con los datos del documento
    }));

    return productsList; // Asegúrate de devolver la lista de productos
};

export default getProducts;
