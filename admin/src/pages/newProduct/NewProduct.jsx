import { Publish } from "@mui/icons-material";
import "./newProduct.css"
import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {

    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [text, setText] = useState("");
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();

    function handleChange(e) {
        const value = e.target.value;
        setInputs(prev => {
            return { ...prev, [e.target.name]: value }
        })
    }

    function handleCategory(e) {
        setCat(e.target.value.split(","));
    }

    function handleColor(e) {
        setColor(e.target.value.split(","));
    }

    function handleSize(e) {
        setSize(e.target.value.split(","));
    }

    function handleClick(e) {
        e.preventDefault();
        if (!file) {
            console.error("No file selected");
            return; // Exit early if no file is selected
        }
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);


        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL, categories: cat, color: color, size: size };
                    try {
                        setDisabled(true);
                        addProduct(product, dispatch);
                        setText("Created!");
                        setDisabled(false);
                    } catch (err) {
                        setText("There is a problem!");
                    }
                });
            }
        );


    }


    return (
        <div className="new-product">
            <h1 className="add-product-title">New Product</h1>
            <form className="add-product-form">
                <div className="add-product-item">
                    <label>Image</label>
                    <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="add-product-item">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} placeholder="Apple Airpods" />
                </div>
                <div className="add-product-item">
                    <label>Description</label>
                    <input onChange={handleChange} name="desc" type="text" placeholder="Description" />
                </div>
                <div className="add-product-item">
                    <label>Price</label>
                    <input onChange={handleChange} name="price" type="number" placeholder="100" />
                </div>
                <div className="add-product-item">
                    <label>Categories</label>
                    <input onChange={handleCategory} type="text" placeholder="jeans, skirts" />
                </div>
                <div className="add-product-item">
                    <label>Colour</label>
                    <input onChange={handleColor} type="text" placeholder="blue, black" />
                </div>
                <div className="add-product-item">
                    <label>Size</label>
                    <input onChange={handleSize} type="text" placeholder="M, XXL" />
                </div>
                <div className="add-product-item">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button disabled={disabled} onClick={handleClick} className="addProductButton">Create</button>
                <p style={{ marginTop: "15px" }}>{text}</p>
            </form >
        </div >
    )
};

export default NewProduct;
