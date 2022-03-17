import {
    Button,
    TextField,
    makeStyles,
} from '@material-ui/core'
import {React, useState} from "react";
import FileUploadDefaultImage from './cameraS.png'
import Box from '@mui/material/Box';

const useStyles = makeStyles({
    button: {
        
    },
    box: {
        width: 200,
        height:200
    },
});

export default function FileUploadControl(props) {
    const { 
        color,
        text,
        image: {
            url = FileUploadDefaultImage,
            imageStyle = {
                height: 'inherit',
            },
        } = {},
    } = props

    const classes = useStyles()

    const [imageUrl, setImageUrl] = useState(url)
    const [imageName, setImageName] = useState()
    const handleChange = e => {
        if (e.target.files[0]) {
            console.log("파일 경로 => ", e.target.value);
            console.log("파일 이름 => ", e.target.files[0].name);
            setImageUrl(URL.createObjectURL(e.target.files[0]))
            setImageName(e.target.value)
        }
    }

    return (
        <>  
            <TextField
                variant="outlined"
                InputProps={{ readOnly: true }}
                value={imageName || 'Click for upload Image.'}
            />
            <label htmlFor="upload-photo">
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    multiple
                    type="file"
                    onChange={handleChange}
                />
                
                <Button 
                    variant="contained" 
                    component="span"
                    className={classes.button}
                    color={color || 'primary'}
                >
                    {text}
                </Button>
                <br></br>
                <Box position="absolute" className={classes.box}>
                    <img
                        alt="file upload"
                        src={imageUrl}
                        style={imageStyle}
                    />
                </Box>
            </label>
        </>
    )
}

