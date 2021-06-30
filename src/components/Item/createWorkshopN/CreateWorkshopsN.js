import React, {useState,useContext} from 'react'
import axios from 'axios'
import {State} from '../../State'

const initialState = {
    workshop_id:'',
    title:'',
    time:'',
    date:'',
    description:'',
    images: '',
    category:''

}

function CreateWorkshopsN(){
        const state = useContext(State)
        const [workshops, setWorkshops] = useState(initialState)
        const [images, setImages] = useState(false)

        const [isConductor] = state.guestAPI.isConductor
        const [token] = state.token


        const hUpload = async e => {
            e.preventDefault()
            try{
                if(!isConductor) return alert("Please loggin as an workshop conductor")
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
            setWorkshops({...workshops, [name]:value})
        }

        const handleSubmit = async e => {
            e.preventDefault()
            try{
                if(!isConductor) return alert("Please loggin as a workshop conductor")
                // if(!images) return alert("Please upload your document")
    
                await axios.post('api/workshopsN', {...workshops, images}, {
                    headers: {Authorization: token}
                })
    
                setImages(false)
                setWorkshops(initialState)
    
    
            }catch(err){
                alert(err.response.data.msg)
            }
        }

    return(
        <div className="createWorkshopsN">
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
                    <label htmlFor="workshop_id">
                    Workshop ID
                    </label>
                    <input type="text" name="workshop_id" id="workshop_id" required value={workshops.workshop_id} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="title">
                    Title 
                    </label>
                    <input type="text" name="title" id="title" required value={workshops.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="time">
                    Time
                    </label>
                    <input type="text" name="time" id="time" required value={workshops.time} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="date">
                    Date
                    </label>
                    <input type="text" name="date" id="date" required value={workshops.date} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="description">
                    Description
                    </label>
                    <textarea type="text" name="description" id="description" required value={workshops.description} rows="3"  onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="category">
                    Category
                    </label>
                    <input type="text" name="category" id="category" required value={workshops.category}  onChange={handleChangeInput}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateWorkshopsN