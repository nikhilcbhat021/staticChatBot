import { Select, Typography, FormControl, MenuItem, Box, Stack, Container } from "@mui/material";
import { useEffect, useState, memo, useCallback, useMemo } from "react";

import ChatCard from "../ChatCard/ChatCard";

const NoChatFound = memo(() => {
    return <Container
        maxWidth="static"
        sx={{
            padding: '2rem',
            borderRadius:'10px',
            backgroundColor: 'white',
        }}
    >
        No Chat Found.
    </Container>
})

const PastConversations = memo(({ allConversations }) => {

    useEffect(() => {
        console.log(allConversations);
    }, []);

    const [filterByRating, setFilterByRating] = useState(0);

    const filteredConversations = useMemo(() => {
        if (filterByRating === 0)
            return allConversations;
        
        return allConversations.map((conv, idx) => {
            const filteredChatsInOneConv = conv.chats.filter((pair, idx) => {
                return pair.answer.rating === filterByRating;
            })
            return {...conv, 'chats': [...filteredChatsInOneConv]}
        }).filter((conv, idx) => {
            console.log(conv, conv.chats.length);
            return conv.chats.length;
        })
    }, [filterByRating, allConversations])

    return (
        <Stack 
            display='flex'
            flexDirection='column'
            gap={4}
            m={5}
            pr={{xxs:6 , md:0}}
        >
            <Typography variant="h1">
                Conversation History
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120, width: '20vw', alignSelf:'center' }}>
                <Select
                    sx={{borderRadius:'999999px', border: '1px solid black'}}
                    value={filterByRating}
                    onChange={(e) => setFilterByRating(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={0}>
                        <em>All Ratings</em>
                    </MenuItem>
                    <MenuItem value={1}>1 Star</MenuItem>
                    <MenuItem value={2}>2 Star</MenuItem>
                    <MenuItem value={3}>3 Star</MenuItem>
                    <MenuItem value={4}>4 Star</MenuItem>
                    <MenuItem value={5}>5 Star</MenuItem>
                </Select>
            </FormControl>
            {!filteredConversations.length ? <NoChatFound /> : (
                filteredConversations.map((conv, idx) => {
                    return <Stack
                        gap={1}
                        alignItems='stretch'
                    >
                        <Typography variant="h3">{conv.time}</Typography>
                        {conv.chats.map((pair, idx) => {
                            return (
                                <Box sx={{}}>
                                    <Box sx={{
                                        display:"flex", 
                                        gap:'8px', 
                                        flexDirection:'column', 
                                        background: 'linear-gradient(90deg, #BFACE2 0%, #D7C7F4 100%)',
                                        borderRadius: '10px'
                                    }} key={pair.answer.id}>
                                        <ChatCard
                                            bgColor="transparent"
                                            updateFeedbackRating={({rating, feedback}) => updateUserExperience(pair.answer.id, rating, feedback)}
                                            isAI={false} readOnly={true} title={pair.question.title} time={pair.question.time}
                                        />

                                        <ChatCard
                                            bgColor="transparent"
                                            updateFeedbackRating={({rating, feedback}) => updateUserExperience(pair.answer.id, rating, feedback)}
                                            isAI={true} readOnly={true} title={pair.answer.title} time={pair.answer.time} 
                                            rating={pair.answer.rating} feedback={pair.answer.feedback}
                                        />
                                    </Box>
                            </Box>)
                        })}
                    </Stack>
                })
            )}
    </Stack>);
});

export default PastConversations;
