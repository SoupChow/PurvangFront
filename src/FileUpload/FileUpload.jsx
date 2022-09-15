import React from 'react'
import './FileUpload.scss'
import axios from 'axios'

const FileUpload = ({ files, setFiles}) => {
    let PDFData = new FormData();
    let ExcelData = new FormData();

    const onPDFChange = (event)=>{
        console.log(event.target.files[0]);
        if(event.target && event.target.files[0]){
            PDFData.append("name",event.target.files[0]);
        }
    }

    const onExcelChange = (event)=>{
        console.log(event.target.files[0]);
        if(event.target && event.target.files[0]){
            ExcelData.append("name",event.target.files[0]);
        }
    }

    
    const uploadHandler =(event)=>{
        event.preventDefault();
        axios.post('https://v2.convertapi.com/upload', PDFData)
            .then((res) => {               
                
                console.log(res);
            })
            .catch((err) => {                
                console.error(err)                
            });
        axios.post('https://v2.convertapi.com/upload', ExcelData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {                
                console.error(err)                
            });
    }
    
    return (
        <form>
            <div className="file-card">
                <div className="file-inputs">
                    <h4>Upload PDF</h4>
                    <input type="file" accept='.pdf' onChange={onPDFChange} />                 
                   
                </div>
                <div className="file-inputs">
                    <h4>Upload Excel</h4>
                    <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={onExcelChange} />                
                    
                </div>
                
                <div className="file-submit">
                    <button onClick={uploadHandler}>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default FileUpload
