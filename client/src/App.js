import './App.css';
import {useRef,useState,useEffect} from 'react'
import {uploadFile} from './services/api'



function App() {

  const[file, setFile] =useState('');
  const fileInputref=useRef();
  const [result,setResult]=useState('');

  useEffect(() =>{
    const getImage=async ()=>{
      if (file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response=await uploadFile(data);
        setResult(response.path);
      }

    }
    getImage();
  },[file])



  const onUploadClick=()=>{
    fileInputref.current.click();
  }

  console.log(file);
  return (
    <div className="container">
    <img src='https://www.sodapdf.com/blog/wp-content/uploads/2019/06/file-sharing.jpg' alt='hello'/>
    <div className="wrapper">
      <h1>Simple File Sharing</h1>
      <p>Upload and share the download link.</p>
      <button onClick={()=>onUploadClick()}>Upload</button>
      <input type="file" ref={fileInputref} style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}/>
     
      <a href={result} target='_blank'>{result}</a>
    </div>
    </div>
  );
}

export default App;
