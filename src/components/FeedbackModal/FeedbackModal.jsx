import { Icon, Modal, Typography, Button, Box, Stack, IconButton, TextField, Input } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import MainButton from "../Utils/Button";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "45vw",
    bgcolor: "#FAF7FF",
    border: "1px solid #00000073",
    borderRadius: '10px',
    boxShadow: "-4px 4px 10px 0px #00000040",
    p: 4,
};

const FeedbackModal = ({ open, closeModal }) => {

    const [feedback, setFeedback] = useState("");

    return (
        <div>
            <Modal
                open={open}
                onClose={(event, reason) => {
                    if (reason && reason === "escapeKeyDown") closeModal("");
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack
                        flexDirection="column"
                        alignItems="flex-start"
                        gap={1}
                    >
                        <Stack
                            flexDirection="row"
                            justifyContent="flex-start"
                            gap={1}
                            alignItems="center"
                            alignSelf="stretch"
                            height={1}
                        >
                            <Icon>
                                <TipsAndUpdatesOutlinedIcon color="black"/>
                            </Icon>
                            <Typography m={0} p={0}>Provide Additional Feedback</Typography>
                            <IconButton
                                onClick={() => closeModal("")}
                                sx={{ 
                                    p: '0',
                                    alignSelf: "flex-end", 
                                    ml: "auto",
                                }}
                            >
                                <CloseOutlinedIcon color="black"/>
                            </IconButton>
                        </Stack>

                        <TextField
                            sx={{
                                alignSelf: 'stretch'
                            }}
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />

                        <MainButton variant="contained" sx={{alignSelf:"flex-end"}} 
                            onClick={() => {
                                closeModal(feedback);
                            }}
                        >Submit</MainButton>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

export default FeedbackModal;
