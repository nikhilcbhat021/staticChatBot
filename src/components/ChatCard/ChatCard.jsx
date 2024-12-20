import { Paper, Typography, IconButton, Stack, Avatar, Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import styled from "@emotion/styled";

import ai_icon from "/ai_icon.svg";
import user_icon from "/user.svg";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import RatingForm from "../RatingForm/RatingForm";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    boxShadow: "0px 4px 4px 0px #00000040",
    width: 64,
    height: 64,
    alignSelf: "center",
}));


const ChatCard = memo(({ isAI, title, time, updateFeedbackRating, feedback="", rating="", readOnly=false, bgColor="transparent" }) => {

    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [addRating, setAddRating] = useState(false);

    useEffect(() => {
        console.log(rating||0);
    }, [])
    return (
        <Paper elevation={4} sx={{
            p:2,
            borderRadius: '20px',
            bgcolor: bgColor,
            boxShadow: `${readOnly ? 0 : 'var(--Paper-shadow)'}`,
            flexGrow: '2'
        }}>
            <Stack gap={2} flexDirection={"row"}>
                <StyledAvatar
                    alt="Remy Sharp"
                    src={isAI ? ai_icon : user_icon}
                />
                <Stack
                    justifyContent="flex-start"
                    textAlign="start"
                    flexGrow="1"
                    gap={1}
                    my={1}
                >
                    <Typography sx={{
                        fontFamily: 'fontFamily.primary',
                        fontWeight: '700',
                        fontSize: '1rem',
                        lineHeight: '18.38px',
                    }}>{isAI ? "SoulAI" : "You"}</Typography>

                    <Typography>{title}</Typography>
                    
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        gap={1}
                        mt={1}
                    >
                        <Typography sx={{
                            fontSize: '12px',
                            lineHeight: '16.34px'
                        }}>
                            {time}
                        </Typography>

                        {isAI && !readOnly &&
                            <IconButton
                                sx={{ml:'auto'}}
                                onClick={() => {
                                    console.log("thumbs dowm");
                                    setFeedbackModalOpen(true);
                                }}
                            >
                                <ThumbDownOutlinedIcon />
                            </IconButton>
                        }
                        {isAI && !readOnly &&
                            <IconButton
                                onClick={() => {
                                    console.log("thumbs up");
                                    setAddRating(true);
                                }}
                            >
                                <ThumbUpOutlinedIcon />
                            </IconButton>
                        }
                    </Stack>

                    {!!feedback && <Typography sx={{
                        fontFamily: 'fontFamily.primary',
                        fontWeight: '700',
                        fontSize: '1rem',
                        lineHeight: '18.38px',
                        }}>Feedback : <span>{feedback}</span>
                    </Typography>}

                    {(!!rating || addRating) && <Box>
                        <Typography sx={{
                            justifyContent:'center',
                            fontFamily: 'fontFamily.primary',
                            fontWeight: '700',
                            lineHeight: '18.38px',
                            // textAlign:'center'
                        }}>Rating : </Typography>
                        <RatingForm readOnly={readOnly} defaultValue={rating || "0"} addRating={(ratingProvided) => updateFeedbackRating({'rating': ratingProvided})}/>
                    </Box>}
                </Stack>
            </Stack>
            <FeedbackModal 
                open={feedbackModalOpen} 
                closeModal={(feedback) => {
                    updateFeedbackRating({'feedback': feedback})
                    setFeedbackModalOpen(false)
                }
            }/>
        </Paper>
    );
});

export default ChatCard;
