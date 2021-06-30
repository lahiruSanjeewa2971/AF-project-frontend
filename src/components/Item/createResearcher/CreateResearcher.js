import React, {useState,useContext} from 'react'
import axios from 'axios'
import {State} from '../../State'

const initialState = {
    name:'',
    researche_id:'',
    title:'',
    description:'',
    images:'',
    contact_name:'',
    contact_no: '',
    contact_mail:''

}



function CreateResearcher(){
    const state = useContext(State)
    const [researche, setResearche] = useState(initialState)
    const [images, setImages] = useState(false)
    const [isResearcher] = state.guestAPI.isResearcher
    const [token] = state.token

    const hUpload = async e => {
        e.preventDefault()
        try{
            if(!isResearcher) return alert("Please loggin as an researcher")
            const file = e.target.files[0]
            
            if(!file) return alert("Please upload a file")

            if(file.size > 1024*1024*20) //file size check
            return alert("File size should be less than 20mb")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'application/pdf' && file.type !== 'raw')
            return alert("Incorrect format")

            let formData = new FormData
            formData.append('file',file)

            const res = await axios.post('api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setImages(res.data)

        }catch(err){
            alert(err.response.data.msg)
        }
    }

    const sUpload = {
        display: images ? "block" : "none"
    }

    const handleChangeInput = e => {
        const {name, value} = e.target
        setResearche({...researche, [name]:value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            if(!isResearcher) return alert("Please loggin as an researcher")
            // if(!images) return alert("Please upload your document")

            await axios.post('api/researcher', {...researche, images}, {
                headers: {Authorization: token}
            })

            setImages(false)
            setResearche(initialState)


        }catch(err){
            alert(err.response.data.msg)
        }
    }
    return(
        <div className="createResearcher">
            <div className="upload">
                <input type="file" id="file_up" onChange={hUpload}/>
                <div id="file_img" style={sUpload}>
                    <img src="" alt=""/>
                    {/* <iframe src="" width="100%" height="500px" >

                    </iframe> */}
                    <span>X</span>
                </div>

            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="name">
                    Name (unique)
                    </label>
                    <input type="text" name="name" id="name" required value={researche.name} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="researche_id">
                    Researcher ID
                    </label>
                    <input type="text" name="researche_id" id="researche_id" required value={researche.researche_id} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="title">
                    Title
                    </label>
                    <input type="text" name="title" id="title" required value={researche.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">
                    Description
                    </label>
                    <textarea type="text" name="description" id="description" required value={researche.description} rows="3" onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="contact_name">
                    Conact Name
                    </label>
                    <input type="text" name="contact_name" id="contact_name" required value={researche.contact_name} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="contact_no">
                    Conact Number
                    </label>
                    <input type="number" name="contact_no" id="contact_no" required value={researche.contact_no}  onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="contact_mail">
                    Conact Mail
                    </label>
                    <input type="text" name="contact_mail" id="contact_mail" required value={researche.contact_mail} onChange={handleChangeInput} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default CreateResearcher