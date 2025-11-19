import { db,auth } from "../firebase/firbaseConfigFile";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { doc,deleteDoc,setDoc,collection,getDocs } from "firebase/firestore";

export default function useCart(){

    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    

    // Get user then get his cart from firestore db via user ID
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) fetchCart(currentUser.uid);
            else{
                setCart([]);
                setLoading(false);
            }
        });
        return () => unsub();
    }, []);

    // Fetch cart from Firestore based on user ID provided
    const fetchCart = async (userId) => {
        setLoading(true);

        const cartRef = collection(db, "users", userId, "cartItems");
        const allDocs = await getDocs(cartRef);
        
        const items = allDocs.docs.map((doc) => doc.data());
        setCart(items);

        setLoading(false);
    };

    // Add first time
    const addItem = async (image, title, price) => {
        if (!user) return;
        const ref = doc(db, "users", user.uid, "cartItems", title); // Get me the Firestore document for this user’s specific cart item
        await setDoc(ref, {
            image,
            title,
            price,
            qty: 1,
        });
        setCart((prev) => [...prev, { image, title, price, qty: 1 }]); // takes the old array and add new one
    };

    // Increase qty
    const increaseQty = async (title) => {
        const item = cart.find((i) => i.title === title);
        if (!item || !user) return;

        const ref = doc(db, "users", user.uid, "cartItems", title);

        await setDoc(ref, {
        ...item,
        qty: item.qty + 1,
        });

        setCart((prev) =>
        prev.map((i) => (i.title === title ? { ...i, qty: i.qty + 1 } : i))
        );
    }

    // Decrease qty
    const decreaseQty = async (title) => {
        const item = cart.find((i) => i.title === title);
        if (!item || !user) return;

        const ref = doc(db, "users", user.uid, "cartItems", title);

        if (item.qty === 1) {
            await deleteDoc(ref);
            setCart((prev) => prev.filter((i) => i.title !== title));
            return;
        }
        await setDoc(ref, {
            ...item,
            qty: item.qty - 1,
        });

        setCart((prev) =>
        prev.map((i) => (i.title === title ? { ...i, qty: i.qty - 1 } : i))
        );
    }


    // Delete whole item
    const removeItem = async (title) => {
        if (!user) return;

        const ref = doc(db, "users", user.uid, "cartItems", title);
        await deleteDoc(ref);

        setCart((prev) => prev.filter((i) => i.title !== title));
    };

    return{
        user,cart,addItem,increaseQty,decreaseQty,removeItem,loading
    }
}