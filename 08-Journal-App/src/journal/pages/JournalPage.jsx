import IconButton from "@mui/material/IconButton"
import AddOutlined from "@mui/icons-material/AddOutlined"
import Typography from "@mui/material/Typography"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { fontSize } from "@mui/system"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/Journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote=()=>{
    dispatch(startNewNote());
  }

  return (
    <JournalLayout >
      <NothingSelectedView/>  
      {/* <NoteView/> */}
      <IconButton
        onClick={onClickNewNote} 
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{backgroundColor:'error.main', opacity:0.80},
          position:'fixed',
          right:50,
          bottom:50
        }} >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>

  )
}
