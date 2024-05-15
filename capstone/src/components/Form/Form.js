import "./Form.scss"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import {MdEdit} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function Form({closeNavs, id}) {
    const navigate = useNavigate();
    const[form, setForm] = useState(null);
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
      console.log(id)
      if (!form){
          return<div>Loading...</div>
      }
      const packagedUp = async() => {
        try {
            const response = await axios.post('http://localhost:8080/user/info',{
                firstName: form[0].firstName,
                lastName: form[0].lastName,
                email: form[0].email,
                id: {id}
            });
            console.log(id);
            navigate(`/travel/${id}`)
        } catch (error) {
            console.error(error);
        }
      }

    return (
      <div>
        <div className="form__header">
            <h3>Confirm your details</h3>
            < MdEdit className="icons"/>
            <AiFillCloseCircle onClick={closeNavs} className="icon"/>
        </div>
            <p>first name: {form[0].firstName}</p>
            <p>last name: {form[0].lastName}</p>
            <p>email: {form[0].email}</p>
        
        <button type="button" onClick={packagedUp}>Submit</button>
    </div>
    );
  }
export default Form;  