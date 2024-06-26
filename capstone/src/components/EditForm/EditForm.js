import "./EditForm.scss"
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [status, setStatus] = useState('');
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const fetchForm = async() => {
        try {
            const response = await axios.get('http://localhost:8080/user/info');
            console.log(response.data);
            setForm(response.data)
        } catch (error) {
            console.error(error);
        }
      }
      useEffect (() => {
          fetchForm();
      },[])
      console.log(form)
      if (!form){
          return<div>Loading...</div>
      }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/inventories/${id}`);
                const itemData = response.data;
                setFormData(itemData);
                setStatus(itemData.status);
                const allItemsResponse = await axios.get('http://localhost:8080/api/inventories');
                const allItems = allItemsResponse.data;
                const uniqueCategories = Array.from(new Set(allItems.map(item => item.category)));
                const uniqueWarehouses = Array.from(new Set(allItems.map(item => item.warehouse_name)));
                setCategories(uniqueCategories);
                setWarehouses(uniqueWarehouses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const quantity = formData.status === "Out of Stock" ? 0 : formData.quantity;
            await axios.put(`http://localhost:8080/api/inventories/${id}`, {
                item_name: formData.item_name,
                description: formData.description,
                category: formData.category,
                status: formData.status,
                warehouse_name: formData.warehouse_name,
                quantity: quantity
            });
            alert("Item successfully Edited!");
            navigate("/inventory");
        } catch (error) {
            console.error("Error editing item:", error);
            alert("Failed to edit item. Please try again.");
        }
    };

    if (!formData.category) {
        return <div>Loading...</div>;
    }
    return(
        <section className='edit__main'>
            <form className='edit__container' onSubmit={handleSubmit}>
                <div className='edit__tablet'>
                    <section className='edit__item'>
                        <h2 className='edit__title'>Item Details</h2>
                        <div className='edit__form'>
                            <label htmlFor='item_name' className='edit__label'>Item Name</label>
                            <input id='item_name' className='edit__input' type='text' defaultValue={formData.item_name} onChange={handleInputChange} required />
                        </div>
                        <div className='edit__form'>
                            <label htmlFor='description' className='edit__label'>Description</label>
                            <textarea id='description' className='edit__input-description' type='text' defaultValue={formData.description} onChange={handleInputChange} required />
                        </div>
                        <div className='edit__form edit__select-wrapper'>
                            <label htmlFor='category' className='edit__label'>Category</label>
                            <select id='category' className='edit__select' defaultValue={formData.category} onChange={handleInputChange}>
                                <option value="">{formData.category}</option>
                                {categories.map((category, index) => (
                                    category !== formData.category && (
                                        <option key={index} value={category}>{category}</option>
                                    )
                                ))}
                            </select>
                            <img className='edit__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                </div>
                <section className='edit__buttons'>
                    <button type='button' className='edit__button' onClick={() => navigate("/packages")}>Cancel</button>
                    <button type='submit' className='edit__button edit__button--blue'>Save</button>
                </section>
            </form >
        </section>
                       
    )
}