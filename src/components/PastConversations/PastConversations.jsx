import { Select, Typography, FormControl, MenuItem } from "@mui/material";
import { useEffect, useState, memo, useCallback, useMemo } from "react";

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

    return <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
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
        {filteredConversations.map((conv, idx) => {
            return <div>
                <p>{conv.time}</p>
                {conv.chats.map((pair, idx) => {
                    return <>
                        <p>{pair.question.title}</p>
                        <p>{pair.answer.title}</p>
                        {pair.answer.feedback && <><p>{pair.answer.feedback} </p><br/></>}
                        {pair.answer.rating && <><p>{pair.answer.rating}/5 </p><br/></>}
                    </> 
                })}
                <hr />
            </div>
        })}
    </div>;
});

export default PastConversations;
